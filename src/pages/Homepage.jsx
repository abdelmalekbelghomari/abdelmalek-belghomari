import React from 'react';
import ContactCard from "../components/contact_side/ContactCard";
import Experience from "../components/chronological_side/Experience";
import LCLIcon from "../assets/icons/LCL.png";
import SITIcon from "../assets/icons/SIT.png";
import ENSIIcon from "../assets/icons/ENSICAEN - logotype couleur.png";
import ScrollableContainer from '../components/chronological_side/ScrollableContainer';
import Education from '../components/chronological_side/Education';

function Homepage() {
  const exp1 = Experience({
    Company: "LCL",
    Position: "Back-end Software Engineer",
    StartDate: "March 2025",
    City: "Paris, France",
    Description: [
      "Developed and maintained back-end services using Java and Spring Boot.",
      "Collaborated with front-end developers to integrate user-facing elements.",
      "Implemented RESTful APIs for data exchange between client and server.",
      "Participated in code reviews and contributed to team knowledge sharing."
    ],
    imageURL: LCLIcon
  });
  const exp2 = Experience({
    Company: "Shibaura Institute of Technology",
    Position: "AI Research Intern",
    StartDate: "May 2024",
    EndDate: "August 2024",
    City: "Tokyo, Japan",
    Description: [
      "Conducted research on AI algorithms and their applications",
      "Developed Spike Neural Networks for real-time data processing",
      "Collaborated with a team of researchers to publish findings in international journals",
      "Presented research results at academic conferences"
    ],
    imageURL: SITIcon
  });

  const edu = Education({
    School: "ENSICAEN",
    Diploma: "Master's in Computer Science, AI and Image and Sound Proccesing",
    StartDate: "September 2021",
    City: "Caen, France",
    Description: [
      "Specialized in Artificial Intelligence and Image Processing.",
      "Completed projects on machine learning algorithms and computer vision.",
      "Participated in workshops and seminars on advanced AI topics."
    ],
    imageURL: ENSIIcon
  })

  const experiences = new Map();
  experiences.set("exp", [exp1, exp2, exp1, exp2, exp1, exp2, exp1, exp2, exp1, exp2]);
  experiences.set("edu", [edu]);

  return (
    <div className="flex flex-col md:flex-row pt-10 px-10 text-white md:pl-20 md:pr-20 md:space-x-20">
      <div className="w-full md:w-[35%] md:pt-32">
        <ContactCard
          name={"Abdelmalek"}
          address={"Paris, France"}
          email={"belghomariabdelmalek@gmail.com"}
        />
      </div>
      <div className="w-full md:w-[65%]">
        <ScrollableContainer children={experiences}/>
      </div>
    </div>
  );
}

export { Homepage };
