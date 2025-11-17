import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const Services1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,     
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 766,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };   

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      };  
  
    return (
        <section className="service-section overflow-hidden">
        {/* <div className="p-top-left wow slideInLeft"><img src="/assets/images/service/shape01.png" alt="Service shape" /></div> */}
        <div className="container space">
            <div className="row align-items-center gy-30">
                <div className="col-lg-4 col-md-6">
                    <div className="service-content-wrap">
                        <div className="title-area two white">
                            <div className="sub-title">
                                <span><i className="asterisk"></i></span>Services
                            </div>
                            <div className="title-wrap">
                                {/* <h2 className="sec-title">Empowering Research Through <span className="bold">Data , <span className="text-theme2">  Design </span> & Insight</span> <br/></h2> */}
                                <h2 className="sec-title">Outsource your high-value <span className="text-theme2">analytics , <span className="text-theme2">  research </span> & statistical tasks</span> to our experts</h2>
{/* 
                                <p className="sec-text">We provide end-to-end data and research solutions—spanning statistical consulting, 
                                    data analysis, research design, monitoring & evaluation, training, and digital systems. 
                                    Whether you're designing a study, collecting field data, analyzing complex datasets, or building capacity, 
                                    our services are tailored to support evidence-based decision-making at every stage.
                                </p> */}
                            </div>
                        </div>
                        <div className="service-btn-wrapper">
                            {/* <div className="array-button">
                                <button onClick={previous} className="array-prev"><i className="bi bi-arrow-left"></i></button>
                                <button onClick={next} className="array-next active"><i className="bi bi-arrow-right"></i></button>
                            </div> */}
                            <div className="service-btn">
                                <Link to="/service">ALL SERVICES +</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="service-slider swiper">
                        <div className="swiper-wrapper cs_slider_gap_301">
                        <Slider ref={sliderRef} {...settings}>
                            <div className="swiper-slide">
                                <div className="service-single-box bg-theme2">
                                    <div className="inner-box">
                                        {/* <div className="icon"><i className="bi bi-power"></i></div> */}
                                        {/* <div className="icon"><i className="bi bi-graph-up"></i></div> */}
                                        <div className="icon"><img src="/assets/images/icons/Statistical Consulting.png" alt="Service shape" /></div>



                                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                                        <h4 className="title">Statistical Consulting</h4>
                                        <p className="text">We provide expert support across all stages of research, 
                                            from designing robust studies and calculating appropriate sample sizes to applying advanced statistical modeling and assisting with publication-ready results.</p>
                                        {/* <Link to="#" className="theme-btn service-btn">
                                        <i className="bi bi-plus-lg"></i>
                                            <span className="link-text">View Details</span>
                                        </Link> */}
                                        {/* <span className="serial">01.</span> */}
                                        {/* <div className="p-bottom-right wow slideInRight" data-wow-delay="500ms">
                                            <img src="/assets/images/service/box-shape.png" alt="Service shape" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="service-single-box white bg-theme">
                                    <div className="inner-box">
                                        {/* <div className="icon"><i className="bi bi-puzzle"></i></div> */}
                                        {/* <div className="icon"><i className="bi bi-lightning"></i></div> */}
                                        <div className="icon"><img src="/assets/images/icons/Data analysis.png" alt="Service shape" /></div>


                                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                                        <h4 className="title">Data Analysis & Visualization</h4>
                                        <p className="text">We turn data into insights through descriptive and inferential analytics, predictive modeling, 
                                            and interactive visualizations—including geospatial analysis and dynamic dashboards.</p>
                                        {/* <Link to="#" className="theme-btn service-btn">
                                        <i className="bi bi-plus-lg"></i>
                                            <span className="link-text">View Details</span>
                                        </Link>
                                        <span className="serial">02.</span>
                                        <div className="p-top-right wow slideInRight" data-wow-delay="700ms">
                                            <img src="/assets/images/service/box-shape02.png" alt="Service shape" /> 
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="swiper-slide">
                                <div className="service-single-box bg-theme2">
                                    <div className="inner-box">
                                        <div className="icon"><i className="bi bi-clipboard-check"></i></div>
                                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                                        <h4 className="title">Research Support & M&E</h4>
                                        <p className="text">We support research and program evaluation through impact studies, survey design, 
                                            and trial implementation—along with comprehensive baseline to endline analysis and tailored Monitoring & Evaluation (M&E) frameworks.</p> */}
                                        {/* <Link to="#" className="theme-btn service-btn">
                                        <i className="bi bi-plus-lg"></i>
                                            <span className="link-text">View Details</span>
                                        </Link>
                                        <span className="serial">03.</span>
                                        <div className="p-bottom-right wow slideInRight" data-wow-delay="500ms">
                                            <img src="/assets/images/service/box-shape.png" alt="Service shape" />
                                        </div> */}
                                    {/* </div> */}
                                {/* </div> */}
                            {/* </div> */}
                            {/* <div className="swiper-slide">
                                <div className="service-single-box white bg-theme">
                                    <div className="inner-box">
                                        <div className="icon"><i className="bi bi-power"></i></div>
                                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                                        <h4 className="title">Training & Capacity Building</h4>
                                        <p className="text">We offer tailored short courses and hands-on software training in R, Python, SPSS, and Stata, 
                                            along with support for strengthening institutional capacity in data and research skills.</p> */}
                                        {/* <Link to="#" className="theme-btn service-btn">
                                        <i className="bi bi-plus-lg"></i>
                                            <span className="link-text">View Details</span>
                                        </Link>
                                        <span className="serial">04.</span>
                                        <div className="p-top-right wow slideInRight" data-wow-delay="700ms">
                                            <img src="/assets/images/service/box-shape02.png" alt="Service shape" />
                                        </div> */}
                                    {/* </div>
                                </div>
                            </div> */}
                            {/* <div className="swiper-slide">
                                <div className="service-single-box bg-theme2">
                                    <div className="inner-box">
                                        <div className="icon"><i className="bi bi-check2-square"></i></div>
                                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                                        <h4 className="title">Survey Design & Data Collection</h4>
                                        <p className="text">We support end-to-end data collection through tool development and piloting, 
                                            enumerator training, and rigorous quality assurance and supervision in the field.</p> */}
                                        {/* <Link to="#" className="theme-btn service-btn">
                                        <i className="bi bi-plus-lg"></i>
                                            <span className="link-text">View Details</span>
                                        </Link>
                                        <span className="serial">05.</span>
                                        <div className="p-top-right wow slideInRight" data-wow-delay="700ms">
                                            <img src="/assets/images/service/box-shape02.png" alt="Service shape" />
                                        </div> */}
                                    {/* </div>
                                </div>
                            </div> */}
                            {/* <div className="swiper-slide">
                                <div className="service-single-box white bg-theme">
                                    <div className="inner-box">
                                        <div className="icon"><i className="bi bi-layers"></i></div>
                                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                                        <h4 className="title">Data Management Systems</h4>
                                        <p className="text">We design efficient data workflows and build integrated systems—including digital dashboards, real-time monitoring tools, 
                                            and custom databases—to streamline data management and decision-making.</p> */}
                                        {/* <Link to="#" className="theme-btn service-btn">
                                        <i className="bi bi-plus-lg"></i>
                                            <span className="link-text">View Details</span>
                                        </Link>
                                        <span className="serial">06.</span>
                                        <div className="p-top-right wow slideInRight" data-wow-delay="700ms">
                                            <img src="/assets/images/service/box-shape02.png" alt="Service shape" />
                                        </div> */}
                                    {/* </div>
                                </div>
                            </div> */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="service-contact">
                        <div className="social-proof">
                            <div className="social">
                                {/* <img src="/assets/images/service/social-img01.jpg" alt="Client 01" /> */}
                                {/* <img src="/assets/images/service/social-img02.jpg" alt="Client 02" /> */}
                            </div>
                            <p className="text">Partnering with you to transform your vision into reality.</p>
                        </div>
                        <div className="contact-btn">
                            <Link to="/contact" className="theme-btn">
                                <span className="link-effect">
                                    <span className="effect-1">Contact Us Now</span>
                                    <span className="effect-1">Contact Us Now</span>
                                </span><i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
    );
};

export default Services1;