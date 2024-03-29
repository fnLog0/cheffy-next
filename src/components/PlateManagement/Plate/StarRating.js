import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

const StarRating = ({ size }) => {
  return (
    <div className="inline-flex">
      <span className="text-pink-500 mr-2">
        <AiFillStar size={size || 25} />
      </span>
      <span className="text-gray-400 mr-2">
        <AiFillStar size={size || 25} />
      </span>
      <span className="text-gray-400 mr-2">
        <AiFillStar size={size || 25} />
      </span>
      <span className="text-gray-400 mr-2">
        <AiFillStar size={size || 25} />
      </span>
      <span className="text-gray-400 mr-2">
        <AiFillStar size={size || 25} />
      </span>
    </div>
  );
};

StarRating.defaultProps = {
  size: 0,
};

StarRating.propTypes = {
  size: PropTypes.number,
};

export default StarRating;
