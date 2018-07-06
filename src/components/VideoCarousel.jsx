import React from 'react';
import PropTypes from 'prop-types';

function VideoCarousel(props) {
  return (
    <section>
      <h2>VideoCarousel Works!</h2>
    </section>
  );
}

VideoCarousel.propTypes = {
  uploads: PropTypes.object.isRequired
};

export default VideoCarousel;
