import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';

function Post(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.name}</h3>

      <p>{props.post}</p>
      <button type="button">Like {props.likes}</button>
      <button type="button">Dislike {props.dislikes}</button>
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  post: PropTypes.string,

  likes: PropTypes.number,
  dislikes: PropTypes.number
};

export default Post;
// timePosted: PropTypes.instanceOf(Moment)
// <p>{props.timePosted}</p>,
