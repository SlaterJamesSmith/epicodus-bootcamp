const songList = {
  1: 'Ground Control to Major Tom\nGround Control to Major Tom\nTake your protein pills and put your helmet on\nGround Control to Major Tom\nCommencing countdown, engines on\nCheck ignition and may God\'s love be with you\nThis is Ground Control to Major Tom\nYou\'ve really made the grade\nAnd the papers want to know whose shirts you wear\nNow it\'s time to leave the capsule if you dare\nThis is Major Tom to Ground Control\nI\'m stepping through the door\nAnd I\'m floating in a most peculiar way\nAnd the stars look very different today\nFor here am I sitting in a tin can\nFar above the world\nPlanet Earth is blue\nAnd there\'s nothing I can do\nThough I\'m past one hundred thousand miles\nI\'m feeling very still\nAnd I think my spaceship knows which way to go\nTell my wife I love her very much, she knows\nGround Control to Major Tom\nYour circuit\'s dead, there\'s something wrong\nCan you hear me, Major Tom?\nCan you hear me, Major Tom?\nCan you hear me, Major Tom?\nCan you...\nHere am I floating round my tin can\nFar above the Moon\nPlanet Earth is blue\nAnd there\'s nothing I can do.'.split('\n'),
  2: 'Stone love\nshe kneels before the grave\nA brave son\nwho gave his life to save the slogans\nThat hovers between the headstone and her eyes\nFor they penetrate her grieving\nNew love\na boy and girl are talking\nNew words\nthat only they can share in\nNew words\na love so strong it tears their hearts to sleep\nthrough the fleeting hours of morning\nLove is careless in its choosing\nSweeping over cross a baby\nLove descends on those defenseless\nIdiot love will spark the fusion\nInspirations have I none\nJust to touch the flaming dove\nAll I have is my love of love\nAnd love is not loving\nSoul love\nthe priest that tastes the word and\nTold of love\nand how my God on high is\nAll love\nthough reaching up my loneliness evolves\nBy the blindness that surrounds him\nLove descends on those defenseless\nIdiot love will spark the fusion\nInspirations have I none\nJust to touch the flaming dove\nAll I have is my love of love\nAnd love is not loving'.split('\n')
};

export const initialState = {
  currentSongId: 1,
  songsById: {
    1: {
      title: 'Space Oddity',
      artist: 'David Bowie',
      songId: 1,
      songArray: songList[1],
      arrayPosition: 0
    },
    2: {
      title: 'Soul Love',
      artist: 'David Bowie',
      songId: 2,
      songArray: songList[2],
      arrayPosition: 0
    }
  }
};
