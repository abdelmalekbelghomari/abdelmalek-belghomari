import React from 'react';
import ContactCard from "../components/contact_side/ContactCard";
import Experience from "../components/chronological_side/Experience";
import LCLIcon from "../assets/icons/LCL.png";
import SITIcon from "../assets/icons/SIT.png";
import SITGreenIcon from "../assets/icons/shibaura.jpg";
import ENSIIcon from "../assets/icons/ENSICAEN - logotype couleur.png";
import OrangeIcon from "../assets/icons/orange.png";
import TheoIcon from "../assets/icons/theo-white.png";
import DarkTheoIcon from "../assets/icons/theo.png";
import GCPIcon from "../assets/icons/gcp.png";
import RodatIcon from "../assets/icons/EmilieDeRodat.png";
import WhiteRodatIcon from "../assets/icons/EmilieDeRodatWhite.png";
import ScrollableContainer from '../components/chronological_side/ScrollableContainer';
import Education from '../components/chronological_side/Education';
import { useTheme } from '../theme';

function Homepage() {

  const { theme } = useTheme();
  let sitIcon = SITGreenIcon;
  let rodatIcon = WhiteRodatIcon;
  let theoIcon = TheoIcon;
  if (theme.background === "bg-beige") { 
    sitIcon = SITIcon;
    rodatIcon = RodatIcon;
    theoIcon = DarkTheoIcon;
  }

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
    imageURL: sitIcon
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

  const exp4 = Experience({
    Company: "Google x LCL Hackathon",
    Position: "3rd Place Winner",
    StartDate: "09/20/2024",
    EndDate: "09/22/2024",
    City: "Paris, France",
    Description: [
      "Participated in a 48-hour hackathon organized by Google and LCL.",
      "Developed and deployed an AI chatbot using Google Cloud Platform (GCP), LangChain, and Python.",
      "The chatbot was designed to guide customers in applying for a bank card subscription tailored to their needs.",
      "Collaborated with a team of developers to implement innovative AI-driven solutions.",
      "Achieved 3rd place among 13 teams, showcasing strong problem-solving and teamwork skills."
    ],
    imageURL: GCPIcon
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
    imageURL: theoIcon,
  });

  const edu3 = Education({
    School: "Lycée Emilie de Rodat",
    Diploma: "Baccalauréat S (Science) with High Honors",
    StartDate: "September 2015",
    EndDate: "June 2018",
    City: "Toulouse, France",
    Description: [
      "Completed high school with a focus on science subjects.",
      "Achieved high honors in the Baccalauréat exam.",
      "Developed a strong foundation in mathematics and physics."
    ],
    imageURL: rodatIcon
  });


  const experiences = new Map();
  experiences.set("exp", [exp1, exp3, exp4, exp2]);
  experiences.set("edu", [edu, edu2, edu3]);

  return (
    <div className="flex flex-col lg:flex-row pt-10 px-2 text-white md:pl-20 md:pr-20 lg:space-x-20 3xl:pr-[20%] 3xl:pl-[20%] 3xl:text-2xl">
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
