import React from 'react';
import PropTypes from 'prop-types';

function Description(props) {
  const { description } = props;

  return (
    <div>
      Desc:&nbsp;
      {description}
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
