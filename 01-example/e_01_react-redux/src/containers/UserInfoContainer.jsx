import { useSelector } from 'react-redux';
import UserInfo from '@/components/UserInfo';

const UserInfoContainer = () => {
  const userInfo = useSelector((state) => state.userInfo);
  return <UserInfo userInfo={userInfo} />;
};

export default UserInfoContainer;
