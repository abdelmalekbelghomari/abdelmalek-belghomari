import { useState, useEffect, useRef} from "react";
import {theme} from "../../theme";

function ScrollableContainer({ children }) {
    const [hasClickedOnExperience, setHasClickedOnExperience] = useState(true);
    var key = hasClickedOnExperience ? "exp" : "edu";

    const firstRef = useRef(null);
    const lastRef = useRef(null);
    const [barTop, setBarTop] = useState(0);
    const [barHeight, setBarHeight] = useState(0);

    useEffect(() => {
        if (firstRef.current && lastRef.current) {
        const firstRect = firstRef.current.getBoundingClientRect();
        const lastRect = lastRef.current.getBoundingClientRect();

        const container = document.querySelector('.scrollable-container');
        const containerStyle = getComputedStyle(container);
        const paddingTop = parseFloat(containerStyle.paddingTop);

        const top = firstRect.top - container.getBoundingClientRect().top + paddingTop;
        const bottom = lastRect.top - container.getBoundingClientRect().top + paddingTop;

        setBarTop(top);
        setBarHeight(bottom - top);
        }
        
    }, [children, hasClickedOnExperience]);

return (
    <div className="flex flex-col items-center">
        <div className="flex items-center justify-center rounded-lg border-2 mb-2">
            <button
                className={`text-lg font-medium px-4 py-2 focus:outline-none rounded-bl-md rounded-tl-md ${
                    hasClickedOnExperience ? `${theme.color} ${theme.textColor}` : `${theme.background} ${theme.textColor}`
                }`}
                onClick={() => setHasClickedOnExperience(true)}
            >
                Experience
            </button>
            <div className="w-0.5 h-11 bg-white"></div>
            <button
                className={`text-lg font-medium px-4 py-2 focus:outline-none rounded-br-md rounded-tr-md ${
                    !hasClickedOnExperience ? `${theme.color} ${theme.textColor}` : `${theme.background} ${theme.textColor}`
                }`}
                onClick={() => setHasClickedOnExperience(false)}
            >
                Education
            </button>
        </div>
        <div className="scrollable-container border-2 rounded-lg p-6 w-full relative h-[80vh] y-scroll overflow-y-scroll">
            <div className="relative z-10">
                {children.has(key) && children.get(key).map((exp, index) => (
                    <div key={index} 
                         ref={index === 0 ? firstRef : index === children.get(key).length - 1 ? lastRef : null} 
                         className="mb-4">
                        {exp}
                    </div>
                ))}
            </div>
            <div className="absolute z-0 bottom-[0rem] left-[5rem] w-0.5 bg-gray-400" style={{ top: `${barTop}px`, height: `${barHeight}px`}}></div>
        </div>
    </div>
);
}
export default ScrollableContainer;