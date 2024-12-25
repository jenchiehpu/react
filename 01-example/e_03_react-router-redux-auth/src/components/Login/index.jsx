import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { type Store } from '../../types';

const Login = () => {
  const isLogged = useSelector((state: Store) => state.user.name !== '');
  const dispatch = useDispatch();

  const atLogin = React.useCallback(() => {
    dispatch({ type: 'LOGIN' });
  }, [dispatch]);

  if (isLogged) {
    const searchParams = new URLSearchParams(window.location.search);
    const redirectUrl = decodeURIComponent(searchParams.get('redirect_url') ?? '/');
    console.log('redirect_url', redirectUrl);
    return <Navigate to={redirectUrl} />;
  }
  return (
    <div className="login">
      <h1>login</h1>
      <button className="btn btn-primary" onClick={atLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
