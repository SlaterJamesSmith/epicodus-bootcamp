import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <div>
      <h2>POST LIST</h2>
      {Object.keys(props.masterPostList).map(function(postId) {
        let post = props.masterPostList[postId];
        return <Post
          name={post.name}
          title={post.title}
          post={post.post}
          timePosted={post.timePosted}
          likes={post.likes}
          dislikes={post.dislikes}
          key={postId}
          id={postId}
        />;
      })}

      <style jsx global>
        {`
          h2 {
            text-align: center;
          }
        `}
      </style>

    </div>
  );
}

PostList.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};

export default connect(mapStateToProps)(PostList);
