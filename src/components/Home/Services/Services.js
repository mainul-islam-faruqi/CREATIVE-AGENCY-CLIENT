import React, { useEffect } from 'react';
import './Services.css';
import { useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://aqueous-mountain-26751.herokuapp.com/getServices', {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        })
        .then(res => res.json())
        .then(data=> {
            setServices(data);
        })
    }, [])
    return (
        <section className="services container-fluid mt-5 mb-5 p-md-5 ">
            <div className="container-fluid">

                <h3 style={{fontSize: "2.2rem"}} className="text-center font-weight-bold" > Provide awesome <p style={{ fontSize: "2.2rem" }}  className="text-green font-weight-bold d-inline"> services </p> </h3>
                <div className="row row-cols-1 row-cols-md-3 mt-5 pt-5 px-sm-2 mx-md-3 mx-lg-5  ">
                    {
                        services.map(service => <ServicesCard key={service._id} service={service} />)
                    }
                    
                </div>
            </div>
            
        </section>
    );
};

export default Services;