function Experience ({ Company, Position, StartDate, EndDate, City, Description, imageURL}) {
    EndDate = EndDate || "Present";
    Description = Description || ["No description provided."];

    return (
        <div className="w-full flex flex-col rounded-lg text-white border-2 p-6 mb-4">
            <div className="w-full space-y-4">
                <div className="flex flex-row space-x-2 mb-4">
                    <img className="w-16 h-16 mr-4 rounded-full shadow-lg" src={imageURL} alt={`${Company} logo`} />
                    <div className="flex flex-col text-left">
                        <div className="w-full pt-1 text-lg font-medium text-white mt-2">
                            <span><strong>{Position}</strong></span>
                            <span className="mx-1">&mdash;</span>
                            <span>{Company}</span>
                        </div>
                        <div className="text-sm text-gray-400">📍{City}</div>
                        <div className="mb-1 text-sm text-gray-400">{StartDate} - {EndDate}</div>

                        {/* md and up — show inside the content block */}
                        <ul className="hidden md:block list-disc pl-5 text-gray-200 text-left bg-darkBlue">
                            {Description.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <ul className="block md:hidden list-disc text-gray-200 pl-6 text-left bg-darkBlue">
                    {Description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Experience;
