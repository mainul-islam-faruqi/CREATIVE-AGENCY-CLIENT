import React from 'react';
import headerImg from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <section className=" container-fluid pr-5 pl-5 ">
            <div style={{height: "40rem"}} className="row d-flex align-items-center justify-content-center">
                <div className="col-sm-12 col-md-6 col-xl-6 d-flex align-items-center justify-content-center mb-sm-3">
                   <div>
                   <h1 className="text-brand mb-4"> Let’s Grow Your <br/>
                    Brand To The <br/>
                    Next Level
                    </h1>

                    <p> Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo ipsum <br/> duis laoreet maecenas. Feugiat </p>

                    <button className="button-primary mt-4"> Hire us  </button>
                   </div>
                </div>
                <div className=" col-sm-8 col-md-5 col-xl-5 pb-5">
                    <img className="img-fluid" src={headerImg} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;