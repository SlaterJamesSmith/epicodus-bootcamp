// LYRIC INFO
const songLyricsArray = 'Ground Control to Major Tom , Ground Control to Major Tom , Take your protein pills and put your helmet on , Ground Control to Major Tom , Commencing countdown, engines on , Check ignition and may God\'s love be with you , This is Ground Control to Major Tom , You\'ve really made the grade , And the papers want to know whose shirts you wear , Now it\'s time to leave the capsule if you dare , This is Major Tom to Ground Control , I\'m stepping through the door , And I\'m floating in a most peculiar way , And the stars look very different today , For here am I sitting in a tin can , Far above the world , Planet Earth is blue , And there\'s nothing I can do , Though I\'m past one hundred thousand miles , I\'m feeling very still , And I think my spaceship knows which way to go , Tell my wife I love her very much, she knows , Ground Control to Major Tom , Your circuit\'s dead, there\'s something wrong , Can you hear me, Major Tom? , Can you hear me, Major Tom? , Can you hear me, Major Tom? , Can you... , Here am I floating round my tin can , Far above the Moon , Planet Earth is blue , And there\'s nothing I can do.'.split(' , ');

// INITIAL REDUX STATE
const initialState = {
  songLyricsArray: songLyricsArray,
  arrayPosition: 0,
};

// REDUX REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_LYRIC':
      let newArrayPosition = state.arrayPosition + 1;
      let newState = {
        songLyricsArray: state.songLyricsArray,
        arrayPosition: newArrayPosition
      };
      return newState;
    default:
      return state;
  }
}

// JEST TESTS + SETUP
const { expect } = window;

expect(reducer(initialState, { type: null})).toEqual(initialState);

expect(reducer(initialState, { type: 'NEXT_LYRIC' })).toEqual({
  songLyricsArray: songLyricsArray,
  arrayPosition: 1
});

// REDUX STORE
const { createStore } = Redux;
const store = createStore(reducer);
console.log(store.getState());

// CLICK LISTENER
const userClick = () => {
  console.log('click');
};
