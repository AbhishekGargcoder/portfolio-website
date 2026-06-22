import React, { createContext, useContext, useState, ReactNode } from 'react'

// const Theme = 'light' | 'dark'

const ThemeContext = createContext(undefined);


export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(()=>{return localStorage.getItem('theme') || 'light'});

  const toggleTheme = () => {
    setTheme((prev)=>{
        const newTheme = prev === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('light');
        return newTheme;
    });
  };

  React.useEffect(() => {
    if (theme === 'light'){
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }, [theme])

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>   
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw { theme : "light", toggleTheme : ()=>{}}
  }
  return context;
}