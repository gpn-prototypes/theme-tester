import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [ theme, setTheme ] = useState('dark');

  const changeTheme = () => {
    if (theme === 'dark') setTheme('default');
    if (theme === 'default') setTheme('display');
    if (theme === 'display') setTheme('dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      { props.children }
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;