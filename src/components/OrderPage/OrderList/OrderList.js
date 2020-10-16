import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import OrderSidebar from '../OrderSiderbar/OrderSidebar';
import OrderListCard from './OrderListCard/OrderListCard';

const OrderList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orderList, setOrderList] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/getUserOrderList', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({  email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setOrderList(data);
        })
    },[loggedInUser.email])

console.log(orderList)
    return (
        <div className="container-fluid">
            <div className="row pt-3">
                <div className="col-md-3">
                    <OrderSidebar />
                </div>

                <div className="col-md-9">
                    <div className="header-option ml-5">
                        <h4 className=" text-brand ">  Order list </h4>
                    </div>

                    <div className="rightOption ">
                        <div className="row mx-4">
                            {
                                orderList.map(item => <OrderListCard key={item._id} orderListItem={item} />)
                            }
                        </div>
                        
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default OrderList;