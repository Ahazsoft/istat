import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import Choose1 from "../Components/Choose/Choose1";
import ClinicalRS from "../Components/Choose/ClinicalRS"
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import ContactList from "../Components/ContactInfo/ContactList";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Marquee from "../Components/Marquee/Marquee";
import Partner1 from "../Components/Partner/Partner1";
import Pricing1 from "../Components/Pricing/Pricing1";
import Process from "../Components/Process/Process";
import Services1 from "../Components/Services/Services1";
import Testimonial from "../Components/Testimonial/Testimonial";
import ProcessRI from "../Components/Process/ProcessRI";

const Home = () => {
    return (
        <div>
           <HeroBanner1
                videotext="<strong></strong><br>"
                 
                title="Empowering Smarter Decisions<br> <span class='bold'>with Data-Driven Business </span> <br>"
                subtitle="At iStat Data Consult PLC, we translate data into clarity helping organizations,<br> researchers, and institutions make impactful, evidence-based decisions across <br> Africa."
                btnname="Request Free Consultation"
                btnname2="Explore Our Services"
                btnurl="/contact"
                btn2url="/services"
                // mainimg="/assets/images/banner/hero-img-1.jpg"
                Clientnumber="5k"
                Client="We Consultant Client World-wide"
                customers="Happy Customers"
                rating="4.8"
                review="(120K Reviews)"
           ></HeroBanner1>
           <About1
                subtitle="Who We Are"
                // title="Best powerfull business <br> <span class='bold'>consulting agency for</span> <br> brand success"
                title="iStat Data Consult PLC is a specialized statistical and data science consulting firm based in Addis Ababa, Ethiopia."
                // rotatetext="* DATA SERVICES  *  GLOBAL  *  CLIENT RESULTS"
                rotatetext=" * PRECISION * CONTEXTUAL INTELLIGENCE * RESULTS "









                subtitle2="Advanced Statistical Tools & Methods"
                // content="Collaboratively <span class='text-theme'>disintermediate</span> one to functionalities and long term impacter compellingly granulars web leveling competencie consult"
                content="Founded by globally trained statisticians, we bring together deep technical expertise with contextual understanding of Africa’s development landscape."

                btnname="More About"
                expyear="10"
                exptitle="<span class='fw-semibold'>Years of</span> <br>Expert Experiences"
                // exptitle="<span class='fw-semibold'></span> <br>"

                // avatar="/assets/images/about/about02.jpg"
                // name="DAVID WATSON"
                // designation="CEO Founder"
           ></About1>
           {/* <Partner1></Partner1> */}
           <Services1></Services1>
           <Choose1></Choose1>
           <Process></Process>
           {/* <Testimonial></Testimonial> */}
            <ClinicalRS></ClinicalRS>
            <Marquee></Marquee>
            <ProcessRI></ProcessRI>

            
           <Nwesletter addclass="newsletter-section"></Nwesletter>

           <ContactInfo1></ContactInfo1>
           {/* <Pricing1></Pricing1> */}
           {/* <Blog1></Blog1> */}
           {/* <ContactList></ContactList> */}
           {/* <Nwesletter addclass="newsletter-section"></Nwesletter> */}
        </div>
    );
};

export default Home;