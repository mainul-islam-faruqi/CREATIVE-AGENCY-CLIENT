import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OrderListCard = ({orderListItem}) => {

    const [selectedOrder, setSelectedOrder] = useState({});

    useEffect(()=> {
        fetch('http://localhost:5000/getOrderedServiceList', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({serviceId:orderListItem.serviceId}),
            })
            .then(res => res.json())
            .then(data => {
                setSelectedOrder(data[0])
            })
    }, [])


    return (
        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-4 ">
        { selectedOrder._id && <Link className="link-primary" to="/order">
        <div className="card d-flex align-items-center justify-content-center service-card py-4">

          <div className="card-img" style={{ width: "100px", height: "100px" }} >
            {
              selectedOrder.image ? <img style={{ width: "100px", height: "100px" }} src={`data:image/png;base64,${selectedOrder.image.img}`} alt="loading Failed" />
                : " "
            }
          </div>


          <div className="card-body text-center">
            <h5 className="card-title font-weight-bolder"> { selectedOrder.title } </h5>
            <p className="card-text text-light-dark"> {selectedOrder.description} </p>
          </div>

        </div>
        </Link>}
      </div>
    );
};

export default OrderListCard;