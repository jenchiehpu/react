/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './app.scss';

/* // TODO 1
class MyComponent extends React.Component {
  render() {
    return <div className="react-component">這是ReactComponent組件</div>;
  }
} 
// */

/* // TODO 2
const FunctionalComponent = () => {
  return (
    <div className="functional-component">
      <ul>
        <li>這是 functionalComponent</li>
        <li>
          今天日期：
          {new Date().toDateString()}
        </li>
        <li>1+1={1 + 1}</li>
        <li>0.1+0.2={0.1 + 0.2}</li>
      </ul>
    </div>
  );
}; 
// */

const Example2 = () => {
  return (
    <section data-name="Example2">
      <MyComponent />
      <FunctionalComponent />
    </section>
  );
};
export default Example2;
