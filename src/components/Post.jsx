import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';

function Post(props) {
  const { dispatch } = props;
  const action = {
    type: null,
    name: props.name,
    title: props.title,
    post: props.post,
    timePosted: props.timePosted,
    likes: props.likes,
    dislikes: props.dislikes,
    id: props.id
  };

  function handleLikeBlogPost(){
    action.type = 'LIKE_POST';
    dispatch(action);
  }

  function handleDisLikeBlogPost(){
    action.type = 'DISLIKE_POST';
    dispatch(action);
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.name}</h4>
      <p>{props.post}</p>
      <button type="button" onClick={handleLikeBlogPost}>Like {props.likes}</button>
      <button type="button" onClick={handleDisLikeBlogPost}>Dislike {props.dislikes}</button>

    <style jsx>{`
        button {
          margin:.3rem;
          padding: 1rem;
          border-radius: 5px;
          font-size: .8rem;
        }

        button:nth-child(4) {
          color: magenta;
          border: 1px solid magenta;
        }
        button:nth-child(5){
          color: #939682;
          border: 1px solid #939682;
        }
      `}
    </style>
    </div>
  );
}

Post.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string,
  post: PropTypes.string,
  timePosted: PropTypes.instanceOf(Moment),
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  id: PropTypes.string
};

export default connect()(Post);
