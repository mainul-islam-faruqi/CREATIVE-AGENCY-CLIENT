import React, { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getServices', {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        })
        .then(res => res.json())
        .then(data=> {
            setServices(data);
        })
    }, [])
    return (
        <section className="services">
            <div className="container-fluid">
                <div className="card-deck mt-5 pt-5">
                    {
                        services.map(service => <ServicesCard key={service._id} />)
                    }
                    
                </div>
            </div>
            
        </section>
    );
};

export default Services;