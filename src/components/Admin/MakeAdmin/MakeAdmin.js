import React, { useContext, useState } from 'react';
import './MakeAdmin.css';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const MakeAdmin = () => {

    const [loggedInUser] = useContext(UserContext);
    const history = useHistory();
    const [adminInfo, setAdminInfo] = useState({});


    const handleChange = (e) => {
        const newAdminInfo = { ...adminInfo };
        newAdminInfo[e.target.name] = e.target.value;
        setAdminInfo(newAdminInfo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(adminInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                history.push('/admin')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="addService  container-fluid pr-0 ">
            <div className="addService row pt-4">
                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className="col-md-9">

                    <div className="header-option d-flex justify-content-between  ml-5 ">
                        <h4 className=" text-brand ">  Make Admin </h4>
                        <div className="d-flex align-items-center mt-3 mr-5">
                            <img src={loggedInUser.picture} style={{ width: "44px", height: "44px", marginTop: "" }} className="card-img-top rounded-circle mr-2" alt="..." />
                            <h5 className="text-brand"> {loggedInUser.name} </h5>
                        </div>
                    </div>

                    <div className="rightOption ">

                        {/* {
                event.success ? <Alert severity="success"> Registration Successful — check it out!</Alert> : event.success = ""
            } */}

                        <form onSubmit={handleSubmit} className=" " action="" >
                            <div className="form">
                                <div className="formLeft">
                                    <h5>Email </h5>
                                    <input type="email" name="email"
                                        placeholder=" john@gmail.com" id=""
                                        onChange={handleChange}
                                        styles={{ border: "none !important", borderTop: "1px solid", width: "100%" }}
                                    />
                                </div>

                                <div className="formRight">
                                    <div className=" mt-4 mr-5" style={{ width: " 140px", }}>
                                        <input
                                            className="submit-button "
                                            type="submit"
                                            value="Submit"
                                        />
                                    </div>
                                </div>
                            </div>

                        </form>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default MakeAdmin;