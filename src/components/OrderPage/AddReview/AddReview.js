import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import OrderSidebar from '../OrderSiderbar/OrderSidebar';
import './AddReview.css';

const Review = () => {

    const [loggedInUser] = useContext(UserContext);

    const history = useHistory();
    const [review, setReview] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

        review.picture = loggedInUser.picture;
        
        fetch('https://aqueous-mountain-26751.herokuapp.com/addReview', {
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                history.push('/')
            })
            .catch(err => console.log(err))
    }




    const handleChange = (e) => {
        const newReview = { ...review };
        if(newReview.name === undefined){
            newReview['name'] = loggedInUser.name;
        }
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }



    return (
        <div className="container-fluid">
            <div className="row pt-4">
                <div className="col-md-3">
                    <OrderSidebar />
                </div>

                <div className="col-md-9">

                    <div className="header-option d-flex justify-content-between  ml-5 ">
                        <h4 className=" text-brand "> Give A Review </h4>
                        <div className="d-flex align-items-center mt-3 mr-5">
                            <img src={loggedInUser.picture} style={{ width: "44px", height: "44px", marginTop: "" }} className="card-img-top rounded-circle mr-2" alt="..." />
                            <h5 className="text-brand"> {loggedInUser.name} </h5>
                        </div>
                    </div>

                    <div className="rightOption ">
                        <form onSubmit={handleSubmit} className="order-form " action="" >
                            <div className="form-group">

                                <input type="text" name="name"
                                    placeholder="Your name " id=""
                                    onChange={handleChange} required
                                    defaultValue={loggedInUser.name}
                                />

                                <input type="text" name="companyName"
                                    placeholder="Company's name Designation" id=""
                                    onChange={handleChange} required
                                />

                                <textarea type="text-area" name="description"
                                    placeholder="Enter Description " id=""
                                    onChange={handleChange} required
                                    rows="4" cols="28"
                                    className="order-text-area"
                                />

                            </div>

                            <div className="" style={{ width: " 170px", }}>
                                <input
                                    className="submit-button "
                                    type="submit"
                                    value="Submit"
                                    style={{
                                        background: "#111430",
                                        padding: " 0 70px 0 55px",
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

export default Review;