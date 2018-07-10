export default (state = {}, action) => {
  const { variables} = action;
  let newState;
  switch (action.type) {
  case 'ADD_POST':
    newState = Object.assign({}, state, {
      [id]: {
        variables: variables
      }
    });
    return newState;
  default:
    return state;
  }
};
