import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ChangeCssRootVar } from '../model/ChangeCssRootVar';
import { storage } from '../model/Storage';


export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = React.useState(storage.getItem('theme'));
  const changeTheme = (theme) => {
    setTheme(theme);
    ChangeCssRootVar(theme)
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
