import PillBadge from "../PillBadge";
import GitHubIcon from "../icons/GitHubIcon"
import LinkedInIcon from "../icons/LinkedInIcon";

function ContactInfo({email}) {
    return (
        <div className="flex flex-col items-center pb-10 rounded-lg text-white shadow-lg border-blue border-2 bg-darkBlue p-6 w-full">
            <div className="space-y-4">
                <div className="mb-1 text-xl font-medium text-white"><a href={`mailto:${email}`}>{email}</a></div>
                <div className="mb-1 text-xl font-medium text-white flex flex-wrap justify-center gap-2">
                    <PillBadge color="yellow" skill="Python" />
                    <PillBadge color="yellow" skill="AI/ML" />
                    <PillBadge color="yellow" skill="PyTorch" />
                    <PillBadge color="green" skill="Java" />
                    <PillBadge color="green" skill="Springboot" />
                    <PillBadge color="purple" skill="C/C++" />
                    <PillBadge color="dark" skill="ReactJS" />
                </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-10 space-x-7">
                <GitHubIcon color="white" size={45} link="https://github.com/abdelmalekbelghomari"/>
                <LinkedInIcon color="white" size={45} link="https://www.linkedin.com/in/abdelmalek-belghomari"/>
            </div>
        </div>
    );
}

export default ContactInfo;

