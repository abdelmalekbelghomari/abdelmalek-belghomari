import { useState, useRef } from 'react';
import { useTheme } from '../theme';

function PillBadge({ color = 'gray', skill = 'Skill', projects = [], onProjectClick }) {
  const { theme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  const hideTimeoutRef = useRef(null);
  
  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 50);
  };
  let bgClass = '';
  let textClass = '';
  let darkBgClass = '';
  let darkTextClass = '';

  switch (color) {
    case 'blue':
      bgClass = 'bg-blue-100';
      textClass = 'text-blue-800';
      darkBgClass = 'dark:bg-blue-900';
      darkTextClass = 'dark:text-blue-300';
      break;
    case 'gray':
      bgClass = 'bg-gray-100';
      textClass = 'text-gray-800';
      darkBgClass = 'dark:bg-gray-700';
      darkTextClass = 'dark:text-gray-300';
      break;
    case 'red':
      bgClass = 'bg-red-100';
      textClass = 'text-red-800';
      darkBgClass = 'dark:bg-red-900';
      darkTextClass = 'dark:text-red-300';
      break;
    case 'green':
      bgClass = 'bg-green-100';
      textClass = 'text-green-800';
      darkBgClass = 'dark:bg-green-900';
      darkTextClass = 'dark:text-green-300';
      break;
    case 'yellow':
      bgClass = 'bg-yellow-100';
      textClass = 'text-yellow-800';
      darkBgClass = 'dark:bg-yellow-900';
      darkTextClass = 'dark:text-yellow-300';
      break;
    case 'indigo':
      bgClass = 'bg-indigo-100';
      textClass = 'text-indigo-800';
      darkBgClass = 'dark:bg-indigo-900';
      darkTextClass = 'dark:text-indigo-300';
      break;
    case 'purple':
      bgClass = 'bg-purple-100';
      textClass = 'text-purple-800';
      darkBgClass = 'dark:bg-purple-900';
      darkTextClass = 'dark:text-purple-300';
      break;
    case 'pink':
      bgClass = 'bg-pink-100';
      textClass = 'text-pink-800';
      darkBgClass = 'dark:bg-pink-900';
      darkTextClass = 'dark:text-pink-300';
      break;
    default:
      bgClass = 'bg-gray-100';
      textClass = 'text-gray-800';
      darkBgClass = 'dark:bg-gray-700';
      darkTextClass = 'dark:text-gray-300';
  }

  return (
    <div className="relative inline-block">
      <span
        className={`text-sm font-medium me-2 px-2.5 py-0.5 rounded-full ${bgClass} ${textClass} ${darkBgClass} ${darkTextClass} hover:bg-opacity-80 hover:-translate-y-1 transition-all duration-200 cursor-pointer`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {skill}
      </span>
      
      {showTooltip && projects.length > 0 && (
        <div 
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 max-w-xs z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`${theme.background} ${theme.textColor} text-sm rounded-lg p-3 shadow-lg border ${theme.borderColor}`}>
            <div className="font-semibold mb-2 text-center">Projects using {skill}</div>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {projects.map((project, index) => (
                <div 
                  key={project.id || index} 
                  className={`${theme.subTextColor} hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer truncate px-2 py-1 rounded transition-colors duration-150`}
                  onClick={() => {
                    if (onProjectClick) {
                      onProjectClick(project);
                    }
                    setShowTooltip(false);
                  }}
                >
                  • {project.name || project}
                </div>
              ))}
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-800"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PillBadge; 