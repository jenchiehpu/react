import React from 'react';

type UserInfoProps = {
  userInfo: {
    name: string,
    age: number,
  },
};
const UserInfo: React.FC<UserInfoProps> = (props) => {
  const { userInfo } = props;
  return (
    <section data-name="UserInfo">
      <div>{JSON.stringify(userInfo)}</div>
    </section>
  );
};

export default UserInfo;
