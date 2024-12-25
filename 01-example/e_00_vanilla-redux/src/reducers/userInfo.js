const initialUserInfo = {
  name: 'milkmidi',
  age: 18,
};

export default function userInfo(state = initialUserInfo, action) {
  switch (action.type) {
    case 'USER_INFO_NAME': {
      return {
        ...state,
        name: action.value,
      };
    }
    default:
      return state;
  }
}
