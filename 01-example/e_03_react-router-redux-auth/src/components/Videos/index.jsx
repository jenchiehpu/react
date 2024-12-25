import { useSelector } from 'react-redux';
import { type Store } from '../../types';

const Videos = () => {
  const user = useSelector((state: Store) => state.user);
  return (
    <div className="videos-root">
      <h1>{user.name}您好</h1>
      <h2>permission:{user.permission}</h2>
    </div>
  );
};

export default Videos;
