import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

function getInitialTheme() {
  return localStorage.getItem('theme') || 'dark';
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(getInitialTheme());
  const [isDark, setIsDark] = useState(theme === 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    setIsDark(theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
