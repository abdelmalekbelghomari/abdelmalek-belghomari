import React from 'react';
import ContactCard from "../components/contact_side/ContactCard";
import Experience from "../components/chronological_side/Experience";
import LCLIcon from "../assets/icons/LCL.png";

function Homepage() {
  return (
    <div className="flex flex-col md:flex-row pt-10 px-10 bg-darkBlue text-white md:pl-40 md:pr-40 md:space-x-20">
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
          Description={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]}
          imageURL={LCLIcon}
        />
        <Experience
          Company={"LCL"}
          Position={"AI Engineer Intern"}
          StartDate={"March 2024"}
          EndDate={"August 2024"}
          Description={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]}
          imageURL={LCLIcon}
        />
      </div>
    </div>
  );
}

export { Homepage };
