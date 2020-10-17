import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Footer.css';

const Footer = () => {

    const [loggedInUser] = useContext(UserContext);

    const history = useHistory();
    const [review, setReview] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

        review.picture = loggedInUser.picture;

        fetch('https://aqueous-mountain-26751.herokuapp.com/addReview', {
            method: 'POST',
            headers: { "content-type": "application/json" },
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
        if (newReview.name === undefined) {
            newReview['name'] = loggedInUser.name;
        }
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }


    return (
        <footer className="footer">
            <div className=" container-fluid py-5 px-5 pl-5">
                <div className="row">
                    <div className="col-md-5 col-sm-12 ml-5">
                        <h3 style={{ fontSize: "2.2rem" }} className="  font-weight-bold mb-3 mt-3" > Let us handle your <br /> project, professionally.</h3>
                        <p> With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6 col-sm-12 ">
                        <form onSubmit={handleSubmit} className="order-form footer-form" action="" >
                            <div className="form-group">


                                <input type="text" name="companyName"
                                    placeholder="Your name / Company's name " id=""
                                    onChange={handleChange} required
                                />

                                <input type="email" name="name"
                                    placeholder="Your email address " id=""
                                    onChange={handleChange} required
                                    defaultValue={loggedInUser.email}
                                />

                                <textarea type="text-area" name="description"
                                    placeholder=" Your message " id=""
                                    onChange={handleChange} required
                                    rows="4" cols="38"
                                    className="order-text-area footer-text-area"
                                    style={{ height: " 160px", paddingTop: "15px" }}
                                />

                            </div>

                            <div className="" style={{ width: " 170px", }}>
                                <input
                                    className="submit-button "
                                    type="submit"
                                    value="Send"
                                    style={{
                                        background: "#111430",
                                        padding: " 0 70px 0 60px",
                                        width: "170px",
                                        marginTop: "-10px"
                                    }}
                                />
                            </div>

                        </form>
                    </div>
                </div>
                
                <p className="text-center pt-5"> &copy;  copyright Mainul Islam Faruqi 2020 </p>
            </div>
        </footer>
    );
};

export default Footer;