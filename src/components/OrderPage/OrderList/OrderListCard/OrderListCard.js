import React, { useState } from 'react';
import { useEffect } from 'react';

const OrderListCard = ({orderListItem}) => {

    const [selectedOrder, setSelectedOrder] = useState({});

    useEffect(()=> {
        fetch('https://aqueous-mountain-26751.herokuapp.com/getOrderedServiceList', {
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
        { selectedOrder._id && 
        <div className="card  service-card py-4">

          <div className="card-img d-flex justify-content-between" >
            {
              selectedOrder.image ? <img style={{ width: "74px", height: "74px", marginLeft: "20px" }} src={`data:image/png;base64,${selectedOrder.image.img}`} alt="loading Failed" />
                : " "
            }

            <button className="button-pending "  style={{position: "absolute", right: "20px" , marginLeft: "20px !important"}} > Pending  </button>
          </div>


          <div className="card-body text-left">
            <h5 className="card-title font-weight-bolder"> { selectedOrder.title } </h5>
            <p className="card-text text-light-dark"> {selectedOrder.description} </p>
          </div>

        </div>
       }
      </div>
    );
};

export default OrderListCard;