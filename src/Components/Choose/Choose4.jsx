
const Choose4 = () => {
    return (
<section className="feature-section space">
            <div className="container">
                <div className="row gy-30">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="title-area mb-0">
                            <h3 className="sub-title">
                                <span>
                                    <img 
                                        src="/assets/images/icons/Icon2.svg" 
                                        alt="subtitle icon" 
                                        className="subtitle-image"
                                        />
                                </span>
                                    Why iStat
                            </h3>
                            <h2 className="sec-title mb-0">We provide  <span className="bold">expert advice </span> and support</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="feature-single-box">
                            {/* <div className="icon"><i className="icon-three-people"></i></div> */}
                            <div className="icon">
                                <img 
                                    src="/assets/images/service/Affordable.svg" 
                                    alt="subtitle icon" 
                                    className="icon-three-people"
                                />
                            </div>
                        </div>
                        <h4 className="title">Affordable predictive analytics outsourcing in Africa</h4>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="feature-single-box">
                            {/* <div className="icon"><i className="icon-target"></i></div> */}
                            <div className="icon">
                                <img 
                                    src="/assets/images/service/Global.svg" 
                                    alt="subtitle icon" 
                                    className="icon-target"
                                />
                                
                            </div>

                        </div>

                        <h4 className="title">Global statistical consulting expertise with advanced  tools and techniques</h4>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="feature-single-box">
                            {/* <div className="icon"><i className="icon-message"></i></div> */}
                            <div className="icon">
                                <img 
                                    src="/assets/images/service/Reliable.svg" 
                                    alt="subtitle icon" 
                                    className="icon-message"
                                />
                            </div>
                        </div>
                    <h4 className="title">Reliable, ethical, and <br/> secure data services</h4>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose4;