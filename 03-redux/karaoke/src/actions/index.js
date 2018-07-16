import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const nextLyric = (currentSongId) => ({
  type: types.NEXT_LYRIC,
  currentSongId
});

export const restartSong = (currentSongId) => ({
  type: types.RESTART_SONG,
  currentSongId
});

export const changeSong = (newSelectedSongId) => ({
  type: types.CHANGE_SONG,
  newSelectedSongId
});

export const requestSong = (title, localSongId) => ({
  type: types.REQUEST_SONG,
  title,
  songId: localSongId
});

export const receiveSong = (title, artist, songId, songArray) => ({
  type: types.RECEIVE_SONG,
  songId,
  title,
  artist,
  songArray,
  receivedAt: Date.now()
});

export function fetchSongId(title) {
  return function (dispatch) {
    const localSongId = v4();
    dispatch(requestSong(title, localSongId));
    title = title.replace(' ', '_');
    return fetch('http://api.musixmatch.com/ws/1.1/track.search?&q_track=' + title + `&page_size=1&s_track_rating=desc&apikey=${process.env.exports.apiKey}`).then(
      response => response.json(),
      /* eslint-disable */
      error => console.log('Error: ', error)
      /* eslint-enable */
    ).then(function(json) {
      if (json.message.body.track_list.length > 0) {
        const musixMatchId = json.message.body.track_list[0].track.track_id;
        const artist = json.message.body.track_list[0].track.artist_name;
        const title = json.message.body.track_list[0].track.track_name;
        fetchLyrics(title, artist, musixMatchId, localSongId, dispatch);
      } else {
        /* eslint-disable */
        console.log('No songs found.');
        /* eslint-enable */
      }
    });
  };
}

export function fetchLyrics(title, artist, musixMatchId, localSongId, dispatch) {
  return fetch('http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + musixMatchId + `&apikey=${process.env.exports.apiKey}`).then(
    response => response.json(),
    /* eslint-disable */
    error => console.log('Error: ', error)
    /* eslint-enable */
  ).then(function(json) {
    if (json.message.body.lyrics) {
      let lyrics = json.message.body.lyrics.lyrics_body;
      lyrics = lyrics.replace('"', '');
      const songArray = lyrics.split(/\n/g).filter(entry => entry!='');
      dispatch(receiveSong(title, artist, localSongId, songArray));
      dispatch(changeSong(localSongId));
    } else {
      /* eslint-disable */
      console.log('No lyrics found.');
      /* eslint-enable */
    }
  });
}
