import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './ServicesCard.css';

const ServicesCard = ({ service }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleOrder = ()=> {
    setLoggedInUser({...loggedInUser, image:service.image, title:service.title, description:service.description, serviceId: service._id  })
  }
  return (
    
      <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-4 ">
        <Link className="link-primary" to="/order" onClick={handleOrder}>
        <div className="card d-flex align-items-center justify-content-center service-card py-4"
        
        >

          <div className="card-img" style={{ width: "100px", height: "100px" }} >
            {
              service.image ? <img style={{ width: "100px", height: "100px" }} src={`data:image/png;base64,${service.image.img}`} alt="loading Failed" />
                : " "
            }
          </div>


          <div className="card-body text-center">
            <h5 className="card-title font-weight-bolder"> {service.title} </h5>
            <p className="card-text text-light-dark"> {service.description} </p>
          </div>

        </div>
        </Link>
      </div>
    
  );
};

export default ServicesCard;