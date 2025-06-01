import React from 'react';
import ContactCard from "../components/contact_side/ContactCard";
import Experience from "../components/chronological_side/Experience";
import LCLIcon from "../assets/icons/LCL.png";
import SITIcon from "../assets/icons/SIT.png";

function Homepage() {
  return (
    <div className="flex flex-col md:flex-row pt-10 px-10 bg-darkBlue text-white md:pl-20 md:pr-20 md:space-x-20">
      <div className="w-full md:w-[30%] md:pt-40">
        <ContactCard
          name={"Abdelmalek"}
          address={"Paris, France"}
          email={"belghomariabdelmalek@gmail.com"}
        />
      </div>
      <div className="w-full md:w-[70%]">
        <Experience
          Company={"LCL"}
          Position={"Back-end Software Engineer"}
          StartDate={"March 2025"}
          City={"Paris, France"}
          Description={["Developed and maintained back-end services using Java and Spring Boot.", "Collaborated with front-end developers to integrate user-facing elements.", "Implemented RESTful APIs for data exchange between client and server.", "Participated in code reviews and contributed to team knowledge sharing."]}
          imageURL={LCLIcon}
        />
        <Experience
          Company={"Shibaura Institute of Technology"}
          Position={"AI Research Intern"}
          StartDate={"May 2024"}
          EndDate={"August 2024"}
          City={"Tokyo, Japan"}
          Description= {["Conducted research on AI algorithms and their applications", "Developed Spike Neural Networks for real-time data processing", "Collaborated with a team of researchers to publish findings in international journals", "Presented research results at academic conferences"]}
          imageURL={SITIcon}
        />
      </div>
    </div>
  );
}

export { Homepage };
