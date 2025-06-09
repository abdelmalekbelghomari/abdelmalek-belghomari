import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { hover } from '@testing-library/user-event/dist/hover';

const dayTheme = {
  background: 'bg-beige',
  color: 'bg-green-800',
  textColor: 'text-black',
  iconColor: 'green',
  borderColor: 'border-green-600',
  subTextColor: 'text-gray-700',
  hoverBorderColor: 'hover:border-green-600',
};

const nightTheme = {
  background: 'bg-darkBlue',
  color: 'bg-green-800',
  textColor: 'text-white',
  iconColor: 'white',
  borderColor: 'border-white',
  subTextColor: 'text-gray-400',
  hoverBorderColor: 'hover:border-white',
};

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }) {
  const [isNight, setIsNight] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const savedTheme = Cookies.get('theme');
    if (savedTheme !== undefined) {
      setIsNight(savedTheme === 'night');
    }
    setIsLoading(false);
  }, []);
  
  const theme = isNight ? nightTheme : dayTheme;
  
  const toggleTheme = () => {
    const newIsNight = !isNight;
    setIsNight(newIsNight);
    Cookies.set('theme', newIsNight ? 'night' : 'day', { expires: 365 });
  };
  
  if (isLoading) {
    return null;
  }
  
  return (
    <ThemeContext.Provider value={{ theme, isNight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}