import React from 'react';
import RenderTip from '@/components/RenderTip';
import { useMyContext } from './context';

const ToggleThemeButton = () => {
  const { theme, setTheme } = useMyContext();

  const atChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <section data-name="ToggleThemeButton">
      <RenderTip />
      <h3>context.theme:{theme}</h3>
      <button type="button" className={`button ${theme}`} onClick={atChangeTheme}>
        Toggle Theme
      </button>
    </section>
  );
};

export default React.memo(ToggleThemeButton);
