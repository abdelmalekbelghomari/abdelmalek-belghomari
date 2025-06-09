import ContactInfo from "./ContactInfo";
import { useTheme } from "../../theme";

function ContactCard({ name, email, address }) {
    const { theme } = useTheme();
    let photoLink = "https://media.licdn.com/dms/image/v2/D4E03AQESUlhiHW6CkA/profile-displayphoto-shrink_800_800/B4EZbttBFhGQAg-/0/1747744724561?e=1754524800&v=beta&t=FswcqyzKVQfNsiNTY0awVxThpuxTNo-u-UK2cZnPSso";
    
    return (
        <div className="flex flex-col items-center pb-10">
            <img className="w-48 h-48 mb-3 rounded-full shadow-lg" src={photoLink} alt="my awesome face"/>
            <div className={`mb-1 text-2xl md:text-3xl font-medium ${theme.textColor}`}>👋 Hey, I am {name}</div>
            <div className={`text-xl ${theme.textColor}`}>I am an AI and Sofware Engineer based in {address}</div>

            <span className="mt-3"></span>
            <ContactInfo email={email}/>
        </div>
    );
}

export default ContactCard;