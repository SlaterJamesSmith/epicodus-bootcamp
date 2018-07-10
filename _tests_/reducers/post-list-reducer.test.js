import postListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
  const samplePostData = {
    name: 'Mike Chu',
    title: 'My favorite way to drink coffee',
    post: 'Isn't this cool? Look how much code we're able to cut out of our projects by using Redux! And we\'ve only migrated one state value so far! In the next lesson we\'ll continue migrating our state to Redux, as we address how to retrieve and display Redux-managed state in React user interfaces.',
    timePosted: new Date(),
    likes: 0,
    dislikes: 0,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new post data into the state object', () => {
    const { name, title, post, timePosted, likes, dislikes, id } = samplePostData;
    action = {
      type: 'ADD_POST',
      name: name,
      title: title,
      post: post,
      timePosted: timePosted,
      likes: likes,
      dislikes: dislikes,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
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
  });
});
