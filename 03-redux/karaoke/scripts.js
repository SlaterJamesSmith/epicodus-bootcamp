// LYRIC INFO
const songList = {
  1: 'Ground Control to Major Tom , Ground Control to Major Tom , Take your protein pills and put your helmet on , Ground Control to Major Tom , Commencing countdown, engines on , Check ignition and may God\'s love be with you , This is Ground Control to Major Tom , You\'ve really made the grade , And the papers want to know whose shirts you wear , Now it\'s time to leave the capsule if you dare , This is Major Tom to Ground Control , I\'m stepping through the door , And I\'m floating in a most peculiar way , And the stars look very different today , For here am I sitting in a tin can , Far above the world , Planet Earth is blue , And there\'s nothing I can do , Though I\'m past one hundred thousand miles , I\'m feeling very still , And I think my spaceship knows which way to go , Tell my wife I love her very much, she knows , Ground Control to Major Tom , Your circuit\'s dead, there\'s something wrong , Can you hear me, Major Tom? , Can you hear me, Major Tom? , Can you hear me, Major Tom? , Can you... , Here am I floating round my tin can , Far above the Moon , Planet Earth is blue , And there\'s nothing I can do.'.split(' , '),
  2: 'Stone love , she kneels before the grave , A brave son - who gave his life to save the slogans , That hovers between the headstone and her eyes , For they penetrate her grieving , New love , a boy and girl are talking , New words - that only they can share in , New words , a love so strong it tears their hearts to sleep , through the fleeting hours of morning , Love is careless in its choosing , Sweeping over cross a baby , Love descends on those defenseless , Idiot love will spark the fusion , Inspirations have I none , Just to touch the flaming dove , All I have is my love of love , And love is not loving , Soul love , the priest that tastes the word and , Told of love , and how my God on high is , All love , though reaching up my loneliness evolves , By the blindness that surrounds him , Love descends on those defenseless , Idiot love will spark the fusion , Inspirations have I none , Just to touch the flaming dove , All I have is my love of love , And love is not loving'.split(' , ')
}

// INITIAL REDUX STATE
const initialState = {
  currentSongId: null,
  songsById: {
    1: {
      title: 'Space Oddity',
      artist: 'David Bowie',
      songId: 1,
      songArray: songList[1],
      arrayPosition: 0,
    },
    2: {
      title: 'Soul Love',
      artist: 'David Bowie',
      songId: 2,
      songArray: songList[2],
      arrayPosition: 0,
    }
  }
};

// REDUX REDUCER
const lyricChangeReducer = (state = initialState.songsById, action) => {
  let newArrayPosition;
  let newSongsByIdEntry;
  let newSongsByIdStateSlice;

  switch (action.type) {
    case 'NEXT_LYRIC':
      newArrayPosition = state[action.currentSongId].arrayPosition + 1;
      newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
        arrayPosition: newArrayPosition
      });
      newSongsByIdStateSlice = Object.assign({}, state, {
        [action.currentSongId]: newSongsByIdEntry
      });
      return newSongsByIdStateSlice;

    case 'RESTART_SONG':
      newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
        arrayPosition: 0
      });
      newSongsByIdStateSlice = Object.assign({}, state, {
        [action.currentSongId]: newSongsByIdEntry
      });
      return newSongsByIdStateSlice;

    default:
      return state;
  }
}

// JEST TESTS + SETUP
const { expect } = window;

expect(lyricChangeReducer(initialState.songsById, { type: null })).toEqual(initialState.songsById);

expect(lyricChangeReducer(initialState.songsById, { type: 'NEXT_LYRIC', currentSongId: 2 })).toEqual(
  {
    1: {
      title: 'Space Oddity',
      artist: 'David Bowie',
      songId: 1,
      songArray: songList[1],
      arrayPosition: 0,
    },
    2: {
      title: 'Soul Love',
      artist: 'David Bowie',
      songId: 2,
      songArray: songList[2],
      arrayPosition: 1,
    }
  }
);

expect(lyricChangeReducer(
  {
    1: {
      title: 'Space Oddity',
      artist: 'David Bowie',
      songId: 1,
      songArray: songList[1],
      arrayPosition: 1,
    },
    2: {
      title: 'Soul Love',
      artist: 'David Bowie',
      songId: 2,
      songArray: songList[2],
      arrayPosition: 0,
    }
  },
  { type: 'RESTART_SONG', currentSongId: 1 }
)).toEqual(initialState.songsById);

// REDUX STORE
const { createStore } = Redux;
const store = createStore(lyricChangeReducer);

// RENDERING STATE IN DOM
const renderLyrics = () => {
  const lyricsDisplay = document.getElementById('lyrics');
  while (lyricsDisplay.firstChild) {
    lyricsDisplay.removeChild(lyricsDisplay.firstChild);
  }
  const currentLine = store.getState().songLyricsArray[store.getState().arrayPosition];
  const renderedLine = document.createTextNode(currentLine);
  document.getElementById('lyrics').appendChild(renderedLine);
  console.log(store.getState());
}

window.onload = function() {
  renderLyrics();
}

// CLICK LISTENER
const userClick = () => {
  const currentState = store.getState();
  if (currentState.arrayPosition < currentState.songLyricsArray.length - 1) {
    store.dispatch({ type: 'NEXT_LYRIC' })
  } else {
    store.dispatch({ type: 'RESTART_SONG' });
  }
};

// SUBSCRIBE TO REDUX STORE
store.subscribe(renderLyrics);
