import ContactInfo from "./ContactInfo";

function ContactCard({ name, email, address }) {

    let photoLink = "https://media.licdn.com/dms/image/v2/D4E03AQESUlhiHW6CkA/profile-displayphoto-shrink_800_800/B4EZbttBFhGQAg-/0/1747744724561?e=1754524800&v=beta&t=FswcqyzKVQfNsiNTY0awVxThpuxTNo-u-UK2cZnPSso";
    
    return (
        <div class="flex flex-col items-center pb-10">
            <img class="w-48 h-48 mb-3 rounded-full shadow-lg" src={photoLink} alt="my awesome face"/>
            <div class="mb-1 text-2xl md:text-3xl font-medium text-white">👋 Hey, my name is {name}</div>
            <div class="text-xl text-white">I am an AI and Sofware Engineer based in {address}</div>

            <span className="mt-3"></span>
            <ContactInfo email={email}/>
        </div>
    );
}

export default ContactCard;