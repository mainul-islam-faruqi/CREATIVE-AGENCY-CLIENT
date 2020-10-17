import React, { useState } from 'react';
import './Order.css';
import { useHistory } from 'react-router-dom';
import OrderSidebar from '../OrderSiderbar/OrderSidebar';

import uploadIcon from '../../../images/icons/upload.png';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const Order = () => {
    const [loggedInUser] = useContext(UserContext);


    const history = useHistory();
    const [info, setInfo] = useState({ status: 'pending' });
    const [file, setFile] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('selectedServiceName', loggedInUser.title);
        formData.append('description', info.description);
        formData.append('price', info.price);
        formData.append('serviceId', loggedInUser.serviceId);
        formData.append('status', info.status);

        fetch('https://aqueous-mountain-26751.herokuapp.com/placeOrder', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                history.push('/orderList')
            })
            .catch(err => console.log(err))
    }


    const handleChange = (e) => {

        let isFieldValid = true;
        if (isFieldValid) {
            const newInfo = { ...info };

            if (newInfo.email === undefined) {
                newInfo['email'] = loggedInUser.email;
            }

            newInfo[e.target.name] = e.target.value;
            setInfo(newInfo);
        }
    }
    console.log(info);

    return (
        <div className="container-fluid">
            <div className="row pt-4">
                <div className="col-md-3">
                    <OrderSidebar />
                </div>

                <div className="col-md-9">

                    <div className="header-option d-flex justify-content-between  ml-5 ">
                        <h4 className=" text-brand ">  Make Order </h4>
                        <div className="d-flex align-items-center mt-3 mr-5">
                            <img src={loggedInUser.picture} style={{ width: "44px", height: "44px", marginTop: "" }} className="card-img-top rounded-circle mr-2" alt="..." />
                            <h5 className="text-brand"> {loggedInUser.name} </h5>
                        </div>
                    </div>

                    <div className="rightOption ">
                        <form onSubmit={handleSubmit} className="order-form " action="" >
                            <div className="form-group">

                                <input type="text" name="name"
                                    placeholder="Your name / Company's name" id=""
                                    onChange={handleChange} required
                                />

                                <input type="email" name="email"
                                    placeholder="Your email address" id=""
                                    onChange={handleChange}
                                    defaultValue={loggedInUser.email}
                                    required
                                />

                                <input type="text" name="selectedServiceName"
                                    placeholder="selected Service Name " id=""
                                    onChange={handleChange}
                                    defaultValue={loggedInUser.title} required
                                />

                                <textarea type="text-area" name="description"
                                    placeholder="Enter Description " id=""
                                    onChange={handleChange} required
                                    rows="4" cols="28"
                                    className="order-text-area"
                                />

                                <div className="form-row inline ">


                                    <div className=" form-group col mr-2">
                                        <input type="number" name="price" className="" placeholder="Price" onChange={handleChange} required />
                                    </div>
                                    <div className="col ml-2 ">
                                        <div className="uploadFile">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="custom-file-input"
                                                onChange={(e) => setFile(e.target.files[0])}
                                                required
                                            />
                                            <div id="uploadImageText" style={{ top: ".85rem" }}> <img className='uploadIcon' src={uploadIcon} alt="" /> Upload project file </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" style={{ width: " 170px", }}>
                                <input
                                    className="submit-button "
                                    type="submit"
                                    value="Send"
                                    style={{
                                        background: "#111430",
                                        padding: " 0 60px 0 60px",
                                        width: "170px"
                                    }}
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;