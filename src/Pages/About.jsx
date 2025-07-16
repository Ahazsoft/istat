import About2 from "../Components/About/About2";
import Choose1 from "../Components/Choose/Choose1";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Counter2 from "../Components/Counter/Counter2";
import History1 from "../Components/History/History1";
import Marquee from "../Components/Marquee/Marquee";
import Partner1 from "../Components/Partner/Partner1";
import Process3 from "../Components/Process/Process3";
import Team2 from "../Components/Team/Team2";
import Testimonial4 from "../Components/Testimonial/Testimonial4";
import ProcessRI from "../Components/Process/ProcessRI";

const About = () => {
    return (
        <div>
            <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="About Us"
                Content=""
            ></BreadCumb>
            <About2></About2>
            <Marquee></Marquee>
            <History1></History1>
            {/* <Partner1></Partner1> */}
            <Choose1></Choose1>
            {/* <Counter2></Counter2> */}
            <Team2></Team2>
            {/* <Process3></Process3> */}
            <Nwesletter addclass="newsletter-section bg-image2"></Nwesletter>

            <ProcessRI></ProcessRI>

            {/* <Testimonial4></Testimonial4> */}
        </div>
    );
};

export default About;