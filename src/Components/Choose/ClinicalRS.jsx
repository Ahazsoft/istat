import { Link } from "react-router-dom";

const ClinicalRS = () => {
    return (
        <section className="planning-section space bg-white">
            <div className="p-top-right wow slideInRight"><img src="/assets/images/choose/shape01.png" alt="Planning shape" /></div>
            <div className="container">
                <div className="row gy-30 align-items-center">

                    
                    <div className="col-lg-6">
                       <div className="planning-content-wrapper">
                            <div className="title-area two">
                                <div className="sub-title"><span><i className="asterisk"></i></span>Clinical Research Support</div>
                                <h2 className="sec-title">Biostatistics Services for Clinical Trials</h2>
                                <p className="sec-text text-gray">We offer expert statistical support for clinical trials, 
                                    including development of Statistical Analysis Plans (SAP), management of randomization and blinding, interim and final analyses, regulatory reporting, 
                                    study design validation, and audit strategies to address trial challenges.</p>
                            </div>
                            <div className="feature-grid mb-20">
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>Statistical Analysis Plan (SAP) development</p>
                                </div>
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>Randomization, blinding & interim analyses</p>
                                </div>
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>Audit & rescue strategy for stalled trials</p>
                                </div>
                            </div>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>Final reporting & regulatory support</p>
                                </div>
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>Study design validation</p>
                                </div>
                            </div>
                            <div className="py-35"><div className="border"></div></div>

                            <h2 className="sec-title">Safety Monitoring</h2>
                                <p className="sec-text text-gray">We provide comprehensive safety oversight, 
                                    including Adverse Event (AE) reporting, safety database management, 
                                    documentation of serious events (SAE/SUSAR/USADE), 
                                    and preparation of periodic safety reports with detailed case narratives.</p>
                            </div>
                            <div className="py-20"><div className=""></div></div>

                            <div className="feature-grid mb-20">
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>Adverse Event (AE) reporting</p>
                                </div>
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>Safety database maintenance</p>
                                </div>
                            </div>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>Periodic safety reports and case narratives</p>
                                </div>
                                <div className="feature-item">
                                    <i className="icon-check-circle2"></i>
                                    <p>SAE/SUSAR/USADE documentation</p>
                                </div>
                            </div>
                            {/* <div className="planning-btn d-flex gap-15 align-items-center">
                                <Link to="/contact" className="theme-btn bg-dark">
                                    <span className="link-effect">
                                        <span className="effect-1">Contact With Us</span>
                                        <span className="effect-1">Contact With Us</span>
                                    </span><i className="bi bi-arrow-right"></i>
                                </Link>
                                <a href="tel:+181234567890" className="contact-info">
                                    <div className="icon"><i className="icon-phone-circle-small"></i></div>
                                    <div className="number">+18 123 (4567) 890</div>
                                </a>
                            </div> */}
                            <div className="py-35"><div className="border"></div></div>

                            <div className="title-area two">
                                <div className="sub-title"><span><i className="asterisk"></i></span>Why It Matters:</div>
                                <p className="sec-text text-gray">Even the best-run trials can fail without statistical alignment. 
                                    We ensure every protocol is statistically sound and scientifically valid</p>
                            </div>
                       </div>

                       <div className="col-lg-6">


                        
                            
                            <div className="planning-image-box-CRS">
                                
                                <img className="image wow img-custom-anim-left" src="/assets/images/resource/planning01.jpg" alt="Planning image" />
                                
                                {/* <div className="since-box"> */}
                                    {/* <div className="inner-box">
                                        <div className="icon-box">
                                            <span className="icon"><i className="icon-since"></i></span>
                                        </div> */}
                                        {/* <h5 className="since">SINCE 2007</h5> */}
                                        {/* <div className="text">Providing marketing solutions client satisfaction</div> */}
                                    {/* </div> */}
                                {/* </div> */}
                            </div>

                        </div>
                    </div>

                    
                </div>
        </section>
    );
};

export default ClinicalRS;