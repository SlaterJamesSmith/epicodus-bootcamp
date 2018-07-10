import postListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
  const samplePostData = {

  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
});
