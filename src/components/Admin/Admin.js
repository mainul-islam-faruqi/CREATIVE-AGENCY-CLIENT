import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Admin.css';


const Admin = () => {
    return (
        <div className="admin d-flex pt-4">
            <Sidebar/>
            <div className="header-option ">
                <h3> Add Service </h3>
            </div>
            <div className="rightOption">

            </div>
        </div>
    );
};

export default Admin;