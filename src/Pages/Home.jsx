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
                 
                // title="Empowering Smarter Decisions<br> <span class='bold'>with Data-Driven Business </span> <br>"
                title="Smart Decisions <br> <span class='bold'>with Data-Driven </span> <br> Insight"

                // subtitle="At iStat Data Consult PLC, we translate data into clarity helping organizations,<br> researchers, and institutions make impactful, evidence-based decisions across <br> Africa."
                subtitle="We translate data into clarity helping organizations,<br> researchers, and institutions alike make impactful, <br> data-based decision across Africa."

                // btnname="Request Free Consultation"
                btnname2="Explore Our Services"
                btnurl="/contact"
                btn2url="/services"
                mainimg="/assets/images/banner/heromain.jpg"
                // Clientnumber="5k"
                Clientnumber="15+"
                // Client="We Consultant Client World-wide"
                Client="Years of Combined Expert Experiences"

                // customers="Happy Customers"
                customers="Advanced Statistical Tools & Methods Local Context, Global Standards Client-Centered, Results-Oriented Approach"
                rating="4.8"
                review="(120K Reviews)"
           ></HeroBanner1>
           <About1
                subtitle="About iStat"
                // title="Best powerfull business <br> <span class='bold'>consulting agency for</span> <br> brand success"
                // title="iStat Data Consult PLC is a specialized statistical and data science consulting firm based in Addis Ababa, Ethiopia."
                title="A leading statistical consulting and KPO Company in Ethiopia"

                // rotatetext="* DATA SERVICES  *  GLOBAL  *  CLIENT RESULTS"
                rotatetext=" * PRECISION * CONTEXTUAL INTELLIGENCE * RESULTS "









                subtitle2="Advanced Statistical Tools & Methods"
                // content="Collaboratively <span class='text-theme'>disintermediate</span> one to functionalities and long term impacter compellingly granulars web leveling competencie consult"
                // content="Founded by globally trained statisticians, we bring together deep technical expertise with contextual understanding of Africa’s development landscape."
                content="We specialize in data analytics outsourcing, predictive modelling, and advanced research support for clients worldwide."

                btnname="More About"
                expyear="15"
                exptitle="<span class='fw-semibold'>Years of</span> <br>Expert Experiences in Statistical and data science consulting"
                // exptitle="<span class='fw-semibold'></span> <br>"

                // avatar="/assets/images/about/about02.jpg"
                name="CEO"
                designation="CEO Founder"
           ></About1>
           {/* <Partner1></Partner1> */}
           <Services1></Services1>
           {/* <Choose1></Choose1> */}
           {/* <Process></Process> */}
           {/* <Testimonial></Testimonial> */}
            {/* <ClinicalRS></ClinicalRS> */}
            {/* <Marquee></Marquee> */}
            {/* <ProcessRI></ProcessRI> */}

            
           {/* <Nwesletter addclass="newsletter-section"></Nwesletter> */}

           {/* <ContactInfo1></ContactInfo1> */}
           {/* <Pricing1></Pricing1> */}
           {/* <Blog1></Blog1> */}
           {/* <ContactList></ContactList> */}
           {/* <Nwesletter addclass="newsletter-section"></Nwesletter> */}
        </div>
    );
};

export default Home;