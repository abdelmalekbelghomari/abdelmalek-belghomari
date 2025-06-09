import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../theme";

function ScrollableContainer({ children }) {
    const [hasClickedOnExperience, setHasClickedOnExperience] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    var key = hasClickedOnExperience ? "exp" : "edu";
    const { theme } = useTheme();

    const firstRef = useRef(null);
    const lastRef = useRef(null);
    const containerRef = useRef(null);
    const [barTop, setBarTop] = useState(0);
    const [barHeight, setBarHeight] = useState(0);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    useEffect(() => {
        if (!isMobile && containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, [hasClickedOnExperience, isMobile]);

    useEffect(() => {
        const calculateBarPosition = () => {
            if (firstRef.current && lastRef.current && containerRef.current) {
                const container = containerRef.current;
                const containerStyle = getComputedStyle(container);
                const paddingTop = parseFloat(containerStyle.paddingTop);

                if (isMobile) {
                    const firstRect = firstRef.current.getBoundingClientRect();
                    const lastRect = lastRef.current.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    
                    const top = firstRect.top - containerRect.top + paddingTop;
                    const bottom = lastRect.top - containerRect.top + paddingTop;
                    
                    setBarTop(top);
                    setBarHeight(bottom - top);
                } else {
                    const firstOffsetTop = firstRef.current.offsetTop;
                    const lastOffsetTop = lastRef.current.offsetTop;
                    const top = firstOffsetTop + 2.2 * paddingTop;
                    const bottom = lastOffsetTop + 2.2* paddingTop;
                    
                    setBarTop(top);
                    setBarHeight(bottom - top);
                }
            }
        };

        calculateBarPosition();
    }, [children, hasClickedOnExperience, isMobile]);

    let textColorForSelector = theme.textColor;

    if (theme.color === "bg-green-800" && theme.background === "bg-beige") {
        textColorForSelector = "text-white";
    }

    var colorForSeparator = 'bg-white';

    if (theme.borderColor === 'border-green-600') {
        colorForSeparator = 'bg-green-600'
    }



    return (
        <div className="flex flex-col items-center">
            <div className={`flex items-center justify-center rounded-lg border-2 ${theme.borderColor} mb-2 3xl:border-4`}>
                <button
                    className={`text-lg font-medium px-4 py-2 rounded-bl-md rounded-tl-md 3xl:rounded-bl-sm 3xl:rounded-tl-sm 3xl:text-3xl ${
                        hasClickedOnExperience ? `${theme.color} ${textColorForSelector}` : `${theme.background} ${theme.textColor}`
                    }`}
                    onClick={() => setHasClickedOnExperience(true)}
                >
                    Experience
                </button>
                <div className={`w-0.5 h-11 3xl:h-[3.3rem] 3xl:w-1 ${colorForSeparator}`}></div>
                <button
                    className={`text-lg font-medium px-4 py-2 focus:outline-none rounded-br-md rounded-tr-md 3xl:rounded-br-sm 3xl:rounded-tr-sm 3xl:text-3xl ${
                        !hasClickedOnExperience ? `${theme.color} ${textColorForSelector}` : `${theme.background} ${theme.textColor}`
                    }`}
                    onClick={() => setHasClickedOnExperience(false)}
                >
                    Education
                </button>
            </div>
            <div 
                ref={containerRef}
                className={`
                    border-2 ${theme.borderColor} 3xl:border-4 rounded-lg p-6 w-full relative
                    ${isMobile 
                        ? 'min-h-fit'
                        : 'h-[80vh] overflow-y-scroll'
                    }
                `}
            >
                <div className="relative z-10">
                    {children.has(key) && children.get(key).map((exp, index) => (
                        <div 
                            key={index} 
                            ref={index === 0 ? firstRef : index === children.get(key).length - 1 ? lastRef : null} 
                            className="mb-4"
                        >
                            {exp}
                        </div>
                    ))}
                </div>
                <div 
                    className="absolute z-0 bottom-[0rem] left-[5rem] w-0.5 3xl:w-1 bg-gray-400" 
                    style={{ 
                        top: `${barTop}px`, 
                        height: `${barHeight}px`,
                    }}
                />
            </div>
        </div>
    );
}

export default ScrollableContainer;