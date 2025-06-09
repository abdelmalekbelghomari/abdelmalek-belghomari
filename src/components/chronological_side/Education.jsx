import { useTheme } from "../../theme";

function Education ({ School, Diploma, StartDate, EndDate, City, Description, imageURL}) {
    EndDate = EndDate || "Present";
    Description = Description || ["No description provided."];
    const { theme } = useTheme();

    return (
        <div className={`w-full flex flex-col text-white p-6 mb-4 hover:shadow-lg ${theme.hoverBorderColor} hover:border-2 transition-shadow duration-300 rounded-lg bg-opacity-80 hover:bg-opacity-90`} style={{ backgroundColor: theme.background }}>
            <div className="w-full space-y-4">
                <div className="flex flex-row space-x-2 mb-4">
                    <img className={`w-16 h-16 mr-4 rounded-full shadow-lg ${theme.background}`} src={imageURL} alt={`${School} logo`} />
                    <div className="flex flex-col text-left">
                        <div className={`w-full pt-1 text-lg font-medium ${theme.textColor} mt-2 3xl:text-3xl`}>
                            <span><strong>{Diploma}</strong></span>
                            <span className="mx-1">&mdash;</span>
                            <span>{School}</span>
                        </div>
                        <div className={`text-sm ${theme.subTextColor} 3xl:text-xl`}>📍{City}</div>
                        <div className={`mb-1 text-sm ${theme.subTextColor} 3xl:text-xl`}>{StartDate} - {EndDate}</div>
                        <ul className={`hidden md:block list-disc pl-5 ${theme.textColor} text-left ${theme.background}`}>
                            {Description.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <ul className={`block md:hidden list-disc ${theme.textColor} pl-6 text-left ${theme.background}`}>
                    {Description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Education;
