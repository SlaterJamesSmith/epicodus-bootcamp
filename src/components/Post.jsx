import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Moment from 'moment';

function Post(props) {

  function handleLikeBlogPost(){
    //console.log(props);
    const { dispatch } = props;

    const action = {
      type: 'LIKE_POST',
      name: props.name,
      title: props.title,
      post: props.post,
      timePosted: props.timePosted,
      likes: props.likes,
      dislikes: props.dislikes,
      id: props.id
    };
    dispatch(action);
    // console.log(store.getState());
  }

  function handleDisLikeBlogPost(){
    //console.log(props);
    const { dispatch } = props;

    const action = {
      type: 'DISLIKE_POST',
      name: props.name,
      title: props.title,
      post: props.post,
      timePosted: props.timePosted,
      likes: props.likes,
      dislikes: props.dislikes,
      id: props.id
    };
    dispatch(action);
    // console.log(store.getState());
  }


  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.name}</h3>
      <p>{props.post}</p>
      <button type="button" onClick={handleLikeBlogPost}>Like {props.likes}</button>
      <button type="button" onClick={handleDisLikeBlogPost}>Dislike {props.dislikes}</button>
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  post: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  id: PropTypes.string
};

export default connect()(Post);
// timePosted: PropTypes.instanceOf(Moment)
// <p>{props.timePosted}</p>,
