import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function PostForm(props) {
  return (
    <div>
      <h1>POST FORM</h1>
    </div>
  );
}

PostForm.propTypes = {
  
};

export default connect()(PostForm);
