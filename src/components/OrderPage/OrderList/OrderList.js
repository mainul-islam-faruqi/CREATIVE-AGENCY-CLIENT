import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import OrderSidebar from '../OrderSiderbar/OrderSidebar';
import OrderListCard from './OrderListCard/OrderListCard';

const OrderList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-mountain-26751.herokuapp.com/getUserOrderList', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setOrderList(data);
            })
    }, [loggedInUser.email])

    console.log(orderList)
    return (
        <div className="container-fluid">
            <div className="row pt-3">
                <div className="col-md-3">
                    <OrderSidebar />
                </div>

                <div className="col-md-9">

                    <div className="header-option d-flex justify-content-between  ml-5 ">
                        <h4 className=" text-brand ">   Order List </h4>
                        <div className="d-flex align-items-center mt-3 mr-5">
                            <img src={loggedInUser.picture} style={{ width: "44px", height: "44px", marginTop: "" }} className="card-img-top rounded-circle mr-2" alt="..." />
                            <h5 className="text-brand"> {loggedInUser.name} </h5>
                        </div>
                    </div>

                    <div className="rightOption ">
                        <div className="row row-cols-1 mx-4">
                            {
                                orderList.map(item => <OrderListCard key={item._id} orderListItem={item} status={item.status} />)
                            }
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderList;