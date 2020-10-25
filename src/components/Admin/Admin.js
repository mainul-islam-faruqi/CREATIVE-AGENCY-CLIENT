import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Admin.css';
import AdminServiceTable from './AdminServiceTable/AdminServiceTable';


const Admin = () => {

    const [loggedInUser] = useContext(UserContext);

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

                    <div className="header-option d-flex justify-content-between  ml-5 ">
                        <h4 className=" text-brand ">  Service list </h4>
                        <div className="d-flex align-items-center mt-3 mr-5 ">
                            <img src={loggedInUser.picture} style={{ width: "44px", height: "44px", marginTop: "" }} className="card-img-top rounded-circle mr-2" alt="..." />
                            <h5 className="text-brand"> {loggedInUser.name} </h5>
                        </div>

                    </div>

                    <div className="rightOption ">
                        <div className=" bg-white pt-5 pl-4 pr-4 m-4 table-responsive-sm" style={{ borderRadius: "20px",  minHeight: "150px" }} >
                            <table className="table table-borderless ">
                                <thead >
                                    <tr >
                                        {/* <div className="table-header"> */}
                                            <th scope="col">Name/Company</th>
                                            <th scope="col">Email ID</th>
                                            <th scope="col">Service</th>
                                            <th scope="col"> Project Details </th>
                                            <th scope="col">Status</th>
                                        {/* </div> */}
                                        
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