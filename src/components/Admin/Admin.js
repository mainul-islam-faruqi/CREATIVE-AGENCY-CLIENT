import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Admin.css';

const Admin = () => {
    return (
        <div className="admin">
            <div className="header-option d-flex">
                <Sidebar/>
                <h3>  Add Services </h3>
            </div>
        </div>
    );
};

export default Admin;