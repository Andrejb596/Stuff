import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { MoonIcon, SunIcon } from './icons/icons';
import './style.css';

export default function Switch() {
  const appContext = useContext( AppContext );

  const [isToggled, setIsToggled] = useState(appContext.isLightTheme);

  const onToggled = () => {
    setIsToggled(!isToggled);
    appContext.toggleTheme();
    localStorage.setItem('switchTheme', JSON.stringify(appContext.isLightTheme ? 'light' : 'dark'));
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
