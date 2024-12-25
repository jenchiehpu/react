/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

const MyContext = React.createContext({ hello: 'defaultValue' });

const ChildOne = () => {
  return <ChildTwo />;
};

const ChildTwo = () => {
  return <ChildThree />;
};

const ChildThree = () => {
  const contextData = React.useContext(MyContext);
  return <div>contextData.hello:{contextData.hello} </div>;
};

const NotWithContext = () => {
  const contextData = React.useContext(MyContext);
  console.log(contextData); // {hello:'defaultValue'}
  return <div>NotWithContext</div>;
};
const MyContextComponent = () => {
  return (
    <section data-name="Example1">
      <NotWithContext />
      <MyContext.Provider value={{ hello: 'Hello World' }}>
        <ChildOne />
      </MyContext.Provider>
    </section>
  );
};

export default MyContextComponent;
