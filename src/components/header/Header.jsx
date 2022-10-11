import React from 'react';
import { GlobalSvgSelector } from '../../assets/images/icons/global/GlobalSvgSelector';
import Search from '../search/Search';
import s from './header.module.scss';
import { useTheme } from '../../hooks/useTheme';
const Header = ( {onSearchChange} ) => {
  const ThemeContext = useTheme()
  const changeTheme = () => {
    ThemeContext.changeTheme(ThemeContext.theme === 'light' ? 'dark' : 'light')
  
  }
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}> React Weather</div>
      </div>
      <div className={s.wrapper}>
      <div className={s.search}>
      <Search onSearchChange={onSearchChange}/>
        </div>

        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" className={s.change_theme} />
        </div>
        
      </div>
    </header>
  );
};

export default Header;
