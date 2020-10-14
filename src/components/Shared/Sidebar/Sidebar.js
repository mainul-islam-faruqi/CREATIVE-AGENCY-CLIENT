import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import serviceListIcon from '../../../images/icons/serviceList.png';
import plusIcon from '../../../images/icons/plus 1.png';
import person from '../../../images/icons/person.png';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <Link to="/" className="logo " > <img src={logo} alt=""/> </Link>

            <div className="sidebar-option">
                <h6> <img src={serviceListIcon} alt=""/>  Services list </h6>
                <h6> <img  src={plusIcon} alt="" style={{width:"20px"}}/> Add Service </h6>
                <h6> <img src={person} alt=""/>  Make Admin </h6>
            </div>
            
        </section>
    );
};

export default Sidebar;