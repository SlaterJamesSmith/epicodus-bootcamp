import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function PostList(props) {
  console.log(props);
  return (
    <div>
      <h2>COFFEE BLOGS</h2>
      <Post/>
    </div>
  );
}

PostList.propsTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};

export default connect(mapStateToProps)(PostList);
