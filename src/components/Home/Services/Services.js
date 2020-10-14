import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    return (
        <section className="services">
            <div className="card-deck mt-5 pt-5">
                <ServicesCard/>
                <ServicesCard/>
                <ServicesCard/>
            </div>
        </section>
    );
};

export default Services;