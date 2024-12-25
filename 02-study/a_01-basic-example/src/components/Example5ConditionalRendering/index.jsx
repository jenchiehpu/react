import React from 'react';
import './style.scss';

const UserGreeting = () => <h1 className="user">登入成功</h1>;
const GuestGreeting = () => <h1 className="guest">Please sign up.</h1>;

const Example5 = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const atClick = () => {
    setLoggedIn(!isLoggedIn);
  };
  return (
    <section data-name="Example5">
      {/* TODO */}
      <button onClick={atClick}>{isLoggedIn ? '登出' : '登入'}</button>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      {isLoggedIn && <UserGreeting />}
      {isLoggedIn ? <UserGreeting /> : null}
    </section>
  );
};
export default Example5;
