import React from 'react';
import ContactCard from "../components/contact_side/ContactCard";
import Experience from "../components/chronological_side/Experience";
import LCLIcon from "../assets/icons/LCL.png";
import SITIcon from "../assets/icons/SIT.png";
import ENSIIcon from "../assets/icons/ENSICAEN - logotype couleur.png";
import OrangeIcon from "../assets/icons/orange.png";
import TheoIcon from "../assets/icons/theo-white.png";
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

  const exp3 = Experience({
    Company: "Orange Innovation Academy",
    Position: "Entrepreneurship Program Participant",
    StartDate: "September 2024",
    EndDate: "February 2025",
    City: "Caen, France",
    Description: [
      "Participated in a 6-month program focused on entrepreneurship and innovation.",
      "Developed a business plan for a tech startup idea.",
      "Collaborated with mentors and industry experts to refine the business model.",
      "Presented the final project to a panel of judges."
    ],
    imageURL: OrangeIcon
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

  const edu2 = Education({
    School: "Theophile Gautier High School",
    Diploma: "Preparatory classes for engineering schools : Mathematics, Physics and Chemistry",
    StartDate: "September 2018",
    EndDate: "June 2021",
    City: "Tarbes, France",
    Description: [
      "Intensive program focusing on mathematics, physics, and engineering principles.",
      "Developed strong analytical and problem-solving skills.",
      "Participated in various engineering projects and competitions."
    ],
    imageURL: TheoIcon,
  });


  const experiences = new Map();
  experiences.set("exp", [exp1, exp3, exp2]);
  experiences.set("edu", [edu, edu2]);

  return (
    <div className="flex flex-col lg:flex-row pt-10 px-10 text-white md:pl-20 md:pr-20 lg:space-x-20">
      <div className="w-full lg:w-[35%] md:pt-32"> 
        <ContactCard
          name={"Abdelmalek"}
          address={"Paris, France"}
          email={"belghomariabdelmalek@gmail.com"}
        />
      </div>
      <div className="w-full lg:w-[65%]">
        <ScrollableContainer children={experiences}/>
      </div>
    </div>
  );
}

export { Homepage };
