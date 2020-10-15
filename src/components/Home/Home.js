import React from 'react';
import Carousel from './Carousel/Carousel';
import Header from './Header/Header';
import ImageRow from './ImageRow/ImageRow';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <ImageRow/>
            <Services/>
            <Carousel/>
        </div>
    );
};

export default Home;