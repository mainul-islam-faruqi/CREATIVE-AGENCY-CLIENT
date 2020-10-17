import React, { useContext, useEffect } from 'react';
import './FeedBack.css';
import { useState } from 'react';
import { UserContext } from '../../../App';

const FeedBack = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-mountain-26751.herokuapp.com/getRviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="container-fluid">
                <h3 style={{ fontSize: "2.2rem" }} className="text-center  font-weight-bold mb-5 mt-3" > Clients <p style={{ fontSize: "2.2rem" }}  className="text-green font-weight-bold d-inline"> Feedback </p> </h3>

            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 my-5 py-5 px-5 mx-3">

                {
                    reviews.map(review =>
                        <div key={review._id} className="col mb-4">
                            <div className="card p-3">

                                <div className="card-img">
                                    <img src={review.picture} style={{ width: "64px", height: "64px" }} className="card-img-top rounded-circle" alt="..." />

                                    <div className="card-header-text">
                                        <h5 style={{lineHeight: "5px"}} className="card-title "> {review.name} </h5>
                                        <strong > {review.companyName} </strong>
                                    </div>
                                    
                                </div>

                                <div className="card-body">

                                    <p className="card-text"> {review.description} </p>
                                </div>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    );
};

export default FeedBack;