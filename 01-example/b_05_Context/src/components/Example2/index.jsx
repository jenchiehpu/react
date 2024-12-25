import * as React from 'react';
import { MyContext } from './context';
import ToggleThemeButton from './ToggleThemeButton';
import MyCountButton from './MyCountButton';

const App = () => {
  const [theme, setTheme] = React.useState('light');
  const [count, setCount] = React.useState(0);
  const providerValue = {
    theme,
    setTheme,
    count,
    setCount,
  };

  React.useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <section data-name="Example2">
        <MyContext.Provider value={providerValue}>
          <h1>Context Example, Count:{count}</h1>
          <ToggleThemeButton />
          <MyCountButton />
        </MyContext.Provider>
      </section>
    </div>
  );
};

export default App;
