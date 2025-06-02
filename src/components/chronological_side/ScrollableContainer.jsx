import { useState } from "react";

function ScrollableContainer({ children }) {
    const [hasClickedOnProfessional, setHasClickedOnProfessional] = useState(true);
    var key = hasClickedOnProfessional ? "exp" : "edu";
return (
    <div className="flex flex-col items-center">
        <div className="flex items-center justify-center rounded-lg border-2 mb-2">
            <button className="text-lg font-medium text-white px-4 py-2 focus:outline-none"
                onClick={() => setHasClickedOnProfessional(true)}
            >
                Professional
            </button>
            <div className="w-0.5 h-11 bg-white"></div>
            <button className="text-lg font-medium text-white px-4 py-2 focus:outline-none"
                onClick={() => setHasClickedOnProfessional(false)}
            >
                Education
            </button>
        </div>
        <div className="scrollable-container border-2 rounded-lg p-6 w-full relative h-[80vh] y-scroll overflow-y-scroll">
            <div className="relative z-10">
                {children.has(key) && children.get(key).map((exp, index) => (
                    <div key={index} className="mb-4">
                        {exp}
                    </div>
                ))}
            </div>
            <div className="absolute z-0 top-[6rem] bottom-[0rem] left-[5rem] transform w-0.5 bg-gray-400"></div>
        </div>
    </div>
    
    );
}
export default ScrollableContainer;