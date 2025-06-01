function Experience ({ Company, Position, StartDate, EndDate, Description, imageURL}) {
    if(!EndDate) {
        EndDate = "Present";
    }
    if(!Description) {
        Description = "No description provided.";
    }

    return (
        <div className="flex flex-col items-start pb-10 rounded-lg text-white shadow-lg border-blue border-2 bg-darkBlue p-6">
            <div className="w-full max-w-md space-y-4">
                <div className="flex flex-row space-x-2 mb-4">
                    <img className="w-16 h-16 mr-4 rounded-full shadow-lg" src={imageURL} alt={`${Company} logo`} />
                    <div className="flex flex-col text-left">
                        <div className="mb-1 text-xl font-medium text-white mt-2">{Position} @{Company}</div>
                        <div className="mb-1 text-sm text-gray-400">{StartDate} - {EndDate}</div>
                        <ul className="list-disc pl-5 text-gray-200">
                            {Description.map((point, index) => (
                            <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;