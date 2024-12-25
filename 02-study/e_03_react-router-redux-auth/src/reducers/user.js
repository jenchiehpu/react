const initinalState = {
  name: '',
  permission: 0,
};

// eslint-disable-next-line default-param-last
export default function user(state = initinalState, action) {
  console.log('user', action.type);
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        name: 'milkmidi',
        permission: 9527,
      };
    }
    default:
      return state;
  }
}
