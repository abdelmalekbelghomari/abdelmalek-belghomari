import PillBadge from "../PillBadge";
import GitHubIcon from "../icons/GitHubIcon"
import LinkedInIcon from "../icons/LinkedInIcon";
import myEnglishResume from "../../assets/documents/belghomari_resume.pdf";
import { useTheme } from "../../theme";

function ContactInfo({email}) {
    const { theme } = useTheme();
    return (
        <div className={`flex flex-col items-center pb-10 rounded-lg shadow-lg border-blue border-2 ${theme.borderColor} 3xl:border-4 p-6 w-full`}>
            <div className="space-y-4">
                <div className={`mb-1 text-lg font-medium ${theme.textColor}`}><a href={`mailto:${email}`}>{email}</a></div>
                <div className="mb-1 text-xl font-medium text-white flex flex-wrap justify-center gap-2">
                    <PillBadge 
                        color="yellow" 
                        skill="Python"
                        projects={["AI Chatbot", "Data Analysis", "Web Scraper"]} 
                    />
                    <PillBadge 
                        color="yellow" 
                        skill="AI/ML"
                        projects={["Image Classifier", "Recommendation System", "Sentiment Analysis"]} 
                    />
                    <PillBadge 
                        color="yellow" 
                        skill="PyTorch" 
                        projects={["Fake Signatures detector", "Explainable AI", "Image Generator", "Encrypted Message Decypherer"]}/>
                    <PillBadge 
                        color="green" 
                        skill="Java" 
                        projects={["Image previewer", "Tennis Club Web App", "Goose Board Game"]}/>
                    <PillBadge 
                        color="green" 
                        skill="Springboot" 
                        projects={["API for Banking plateform"]}/>
                    <PillBadge 
                        color="purple" 
                        skill="C/C++" 
                        projects={["Rice grains discrimanator", "Sudoku Game and Helper",]}/>
                    <PillBadge 
                        color="dark" 
                        skill="React" 
                        projects={["E-commerce App", "Dashboard", "Portfolio Site"]} 
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-10 space-x-7">
                <GitHubIcon color={theme.iconColor} size={45} link="https://github.com/abdelmalekbelghomari"/>
                <LinkedInIcon color={theme.iconColor} size={45} link="https://www.linkedin.com/in/abdelmalek-belghomari"/>
                <a className={`rounded-2xl ${theme.color} p-2 pt-1 pb-1 3xl:text-xl`} href={myEnglishResume} target="_blank" rel="noreferrer">Download my resume</a>
            </div>
        </div>
    );
}

export default ContactInfo;

