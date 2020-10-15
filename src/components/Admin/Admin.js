import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Admin.css';


const Admin = () => {
    return (
        <div className="container-fluid">
            <div className="row pt-3">
                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className="col-md-9">
                    <div className="header-option ml-5">
                        <h4 className=" text-brand ">  Service list </h4>
                    </div>

                    <div className="rightOption "> </div>

                </div>
            </div>
        </div>
    );
};

export default Admin;