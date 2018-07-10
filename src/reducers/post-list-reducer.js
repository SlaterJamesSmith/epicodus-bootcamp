export default (state = {}, action) => {
  const { name, title, post, timePosted, likes, dislikes, id } = action;
  let newState;
  switch (action.type) {
  case 'ADD_POST':
    newState = Object.assign({}, state, {
      [id]: {
        name: name,
        title: title,
        post: post,
        timePosted: timePosted,
        likes: likes,
        dislikes: dislikes,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
