import React from 'react';
import './Carousel.css';
import slider1 from '../../../images/slider image/carousel-1-min.png'
import slider2 from '../../../images/slider image/carousel-2-min.png'
import slider3 from '../../../images/slider image/carousel-3-min.png'
import slider4 from '../../../images/slider image/carousel-4-min.png'
import slider5 from '../../../images/slider image/carousel-5-min.png'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide pl-5 py-5 my-5" style={{ background: "#111430" }} data-ride="carousel">
                <h3 style={{ fontSize: "2.2rem" }} className="text-center text-white font-weight-bold mb-5 mt-3" > Provide awesome <p style={{ fontSize: "2.2rem" }}  className="text-green font-weight-bold d-inline"> services </p> </h3>

                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active "></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
                </ol>
                <div className="carousel-inner pl-2 mb-5" style={{ maxHeight: " 500px" }}>
                    <div className="carousel-item active">
                        <div className="d-flex">
                            <img src={slider1} className="d-inline-block " style={{ width: "40%", height: "14rem" }} alt="..." />
                            <img src={slider2} className="d-inline-block ml-4 " style={{ width: "40%", height: "14rem" }} alt="..." />
                            <img src={slider3} className="d-inline-block ml-4" style={{ width: "40%", height: "14rem" }} alt="..." />
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="d-flex">
                            <img src={slider3} className="d-inline-block " style={{ width: "40%", height: "14rem" }} alt="..." />
                            <img src={slider4} className="d-inline-block ml-4 " style={{ width: "40%", height: "14rem" }} alt="..." />
                            <img src={slider5} className="d-inline-block ml-4" style={{ width: "40%", height: "14rem" }} alt="..." />
                        </div>

                    </div>
                    <div className="carousel-item ">
                        <div className="d-flex">
                            <img src={slider5} className="d-inline-block " style={{ width: "40%", height: "14rem" }} alt="..." />
                            <img src={slider1} className="d-inline-block ml-4 " style={{ width: "40%", height: "14rem" }} alt="..." />
                            <img src={slider2} className="d-inline-block ml-4" style={{ width: "40%", height: "14rem" }} alt="..." />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    );
};

export default Carousel;