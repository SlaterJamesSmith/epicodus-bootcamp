import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function PostForm(props) {
  let _name = null;
  let _title = null;
  let _post = null;

  function handleAddingNewBlogPosts(event){
    //console.log(props);
    event.preventDefault();
    const { dispatch } = props;

    const action = {
      type: 'ADD_POST',
      name: _name.value,
      title: _title.value,
      post: _post.value,
      timePosted: new Moment(),
      likes: 0,
      dislikes: 0,
      id: v4()
    };
    dispatch(action);
    // console.log(store.getState());

    _name.value = '';
    _title.value = '';
    _post.value = '';
  }


  return (
    <div>
      <form>
        <h1>POST FORM</h1>
        <label>NAME:</label>
        <input
          type="text"
          placeholder="enter your name"
          ref={(input) => {_name = input;}}/>
        <label>TITLE:</label>
        <input
          type="text"
          placeholder="enter the title of your blog"
          ref={(input) => {_title = input;}}/>
        <label>BLOG POST:</label>
        <input
          type="text"
          placeholder="enter your post content"
          ref={(input) => {_post = input;}}/>
        <button type="submit" onClick={handleAddingNewBlogPosts}>SUBMIT</button>
      </form>
    </div>
  );
}

PostForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(PostForm);
