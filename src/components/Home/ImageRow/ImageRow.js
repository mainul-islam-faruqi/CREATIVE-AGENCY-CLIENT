import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const ImageRow = () => {
    return (
        <section className="container-fluid mt-sm-0 pt-lg-5 mt-xl-5 mb-5">
        <div className="row d-flex align-items-center justify-content-center  image-row">
            <div className="col-md-2 col-sm-2">
                <img  className="img-fluid w-75  " src={slack} alt=""/>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
                <img className="img-fluid w-75  " src={google} alt=""/>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
                <img className="img-fluid w-75  " src={uber} alt=""/>
            </div>
            <div className="col-md-2 col-sm-2  col-xs-2">
                <img className="img-fluid w-75  " src={netflix} alt=""/>
            </div>
            <div className="col-md-2 col-sm-2  col-xs-2">
                <img className="img-fluid w-75  " src={airbnb} alt=""/>
            </div>
        </div>
        </section>
        
    );
};

export default ImageRow;