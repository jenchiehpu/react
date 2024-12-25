import MyCount from '@/components/MyCount';
import MyCountButton from '@/components/MyCountButton';
import UserInfoContainer from '@/containers/UserInfoContainer';

const App = () => {
  return (
    <div className="app">
      <MyCount />
      <MyCountButton />
      <UserInfoContainer />
    </div>
  );
};

export default App;
