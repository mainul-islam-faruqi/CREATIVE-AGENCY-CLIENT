import React, { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Admin.css';

import AdminServiceTable from './AdminServiceTable/AdminServiceTable';


const Admin = () => {

    const [allOrderList, setAllOrderList] = useState([]);
    
    useEffect(() => {
        fetch('https://aqueous-mountain-26751.herokuapp.com/all-order-list')
            .then(res => res.json())
            .then(data => {
                setAllOrderList(data)
            })
    }, [])


    return (
        <div className="container-fluid">
            <div className="row pt-3">
                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className=" col-sm-12 col-md-12 col-lg-9">
                    <div className="header-option ml-5">
                        <h4 className=" text-brand ">  Service list </h4>
                    </div>

                    <div className="rightOption ">
                        <div className=" bg-white pt-5 pl-4 pr-4 m-4 table-responsive-sm" style={{ borderRadius: "20px", minHeight: "150px" }} >
                            <table className="table table-borderless ">
                                <thead style={{ background: "#F5F6FA", borderRadius: "10px", margin: "10px", color: "#686868", width: "100%" }} >

                                    <tr >
                                        <td scope="col">Name/Company</td>
                                        <td scope="col">Email ID</td>
                                        <td scope="col">Service</td>
                                        <td scope="col"> Project Details </td>
                                        <td scope="col">Status</td>
                                    </tr>
                                </thead>

                                {
                                    allOrderList.map(singleOrder =>
                                        <AdminServiceTable key={singleOrder._id} singleOrder={singleOrder} />
                                    )
                                }
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admin;