import React, { useState } from 'react';
import './Order.css';
import { useHistory } from 'react-router-dom';
import OrderSidebar from '../OrderSiderbar/OrderSidebar';

import uploadIcon from '../../../images/icons/upload.png';


const Order = () => {



    const history = useHistory();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);


    const handleChange = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('http://localhost:5000/', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    console.log(info, file);



    return (
        <div className="container-fluid">
            <div className="row pt-4">
                <div className="col-md-3">
                    <OrderSidebar />
                </div>

                <div className="col-md-9">
                    <div className="header-option ml-5">
                        <h4 className=" text-brand ">  Order </h4>
                    </div>

                    <div className="rightOption ">
                        <form onSubmit={handleSubmit} className="order-form " action="" >
                            <div className="form-group">

                                <input type="text" name="name"
                                    placeholder="Your name / Company's name" id=""
                                    onChange={handleChange}
                                />

                                <input type="email" name="email"
                                    placeholder="Your email address" id=""
                                    onChange={handleChange}
                                />

                                <input type="text" name="selectedServiceName"
                                    placeholder="selected Service Name " id=""
                                    onChange={handleChange}
                                />

                                <textarea type="text-area" name="description"
                                    placeholder="Enter Description " id=""
                                    onChange={handleChange}
                                    rows="4" cols="28"
                                />

                                <div class="form-row inline ">


                                    <div class=" form-group col mr-2">
                                        <input type="text" class="" placeholder="Price" />
                                    </div>
                                    <div class="col ml-2">
                                        <div className="uploadFile">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="custom-file-input"
                                                onChange={(e) => setFile(e.target.files[0])}
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