import { Link } from "react-router-dom";

const History1 = () => {
    return (
<section className="mission-section space bg-white">
            <div className="container">
                <div className="title-area three text-center">
                    <div className="sub-title"><span><i className="asterisk"></i></span>OUR HISTORY</div>
                    <h2 className="sec-title">Our History </h2>
                </div>
                <div className="row gy-30">
                    <div className="col-lg-6 col-md-6 wow fadeInLeft">
                        <div className="mission-single-box bg-theme3">
                            <div className="p-top-right wow slideInRight"><img src="/assets/images/mission/shape01.png" alt="Mission shape" /></div>
                            <div className="mission-content">
                                <h3 className="title">Our Vision <br/></h3>
                                <p className="text">To be Africa’s premier centre of excellence in
                                statistical/machine learning and data
                                science consultancy as well as BPO/ KPO
                                services—empowering local, continental
                                and international organizations, government
                                entities and higher institutions to make
                                faster and smarter, evidence-based
                                decisions.
                                </p>
                                <br/>
                                <p className="text">
                                    We envision to deliver as service where
                                    innovation, sustainable development, and
                                    policy effectiveness are driven and
                                    supported by high-quality big data, rigorous
                                    analytics, and a deep commitment to posi
                                    tive impact to societies
                                </p>
                                {/* <Link to="/about" className="theme-btn bg-transparent">
                                    <span className="link-effect">
                                        <span className="effect-1">Our History</span>
                                        <span className="effect-1">Our History</span>
                                    </span><i className="bi bi-arrow-right"></i>
                                </Link> */}
                            </div>
                            {/* <div className="mission-image p-bottom-right">
                                <img src="/assets/images/mission/img01.png" alt="Mission Image 1" />
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInRight">
                        <div className="mission-single-box bg-light2">
                            <div className="p-top-right wow slideInRight"><img src="/assets/images/mission/shape02.png" alt="Mission shape" /></div>
                            <div className="mission-content">
                                <h3 className="title">Our Mission<br/></h3>
                                <p className="text">
                                    To deliver reliable, insightful, and ethical
                                    data solutions that support research,
                                    development, and measurable outcomes.
                                </p>
                                {/* <Link to="/about" className="theme-btn bg-transparent">
                                    <span className="link-effect">
                                        <span className="effect-1">Our History</span>
                                        <span className="effect-1">Our History</span>
                                    </span><i className="bi bi-arrow-right"></i>
                                </Link> */}
                            </div>
                            {/* <div className="mission-image p-bottom-right">
                                <img src="/assets/images/mission/img02.png" alt="Mission Image 1" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History1;