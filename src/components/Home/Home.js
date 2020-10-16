import React from 'react';
import Carousel from './Carousel/Carousel';
import FeedBack from './FeedBack/FeedBack';
import Footer from './Footer/Footer';
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
            <FeedBack />
            <Footer/>
        </div>
    );
};

export default Home;