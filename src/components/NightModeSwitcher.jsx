import { useTheme } from "../theme";

function NightModeSwitcher({size = "30"}) {
  const { isNight, toggleTheme, theme } = useTheme();
  
  const moonPath = "M18 27.5C18 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 12.3122 18 27.5Z";
  const circlePath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

  return (
    <div className={`cursor-pointer p-2 rounded-full ${theme.background}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-700 ease-out"
        style={{
          transform: `rotate(${isNight ? '320deg' : '40deg'})`
        }}
        onClick={toggleTheme}
      >
        <path
          d={isNight ? moonPath : circlePath}
          fill="#FFC700"
          className="transition-all duration-700 ease-out"
        />
      </svg>
    </div>
  );
}

export default NightModeSwitcher;