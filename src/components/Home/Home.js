import React from 'react';
import Header from './Header/Header';
import ImageRow from './ImageRow/ImageRow';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <ImageRow/>
            <Services/>
        </div>
    );
};

export default Home;