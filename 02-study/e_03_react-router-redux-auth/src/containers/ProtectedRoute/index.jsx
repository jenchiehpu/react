/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import { RouteProps, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type Store } from '../../types';

type ProtectedRouteProps = RouteProps & {};
const ProtectedRoute = (props: ProtectedRouteProps) => {
  // TODO
  /* const { children } = props;
  const isLogged = useSelector((state: Store) => state.user.name !== '');
  if (!isLogged) {
    return <Navigate to={`/login?redirect_url=${encodeURIComponent(window.location.pathname)}`} />;
  }
  return children; */
};

export default ProtectedRoute;
