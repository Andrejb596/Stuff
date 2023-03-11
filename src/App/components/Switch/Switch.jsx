import { useState } from 'react';
import { MoonIcon, SunIcon } from './icons/icons';
import './style.css';

export default function Switch({ toggleTheme, isLightTheme }) {
  const [isToggled, setIsToggled] = useState(isLightTheme);

  const onToggled = () => {
    setIsToggled(!isToggled);
    toggleTheme();
    localStorage.setItem('switchTheme', JSON.stringify(isLightTheme ? 'light' : 'dark'));
  };

  return (
    <div>
      <SunIcon />
      <label className='toggle-switch'>
        <input type='checkbox' checked={isToggled} onChange={onToggled} />
        <span className='switch' />
      </label>
      <MoonIcon />
    </div>
  );
}
