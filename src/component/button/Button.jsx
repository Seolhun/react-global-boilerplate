import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  const {
    className,
    onClick,
    children,
    style,
  } = props;
  return (
    <button
      type="button"
      className={`${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,

  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.shape({
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
};

Button.defaultProps = {
  className: '',
  onClick: () => {},

  style: {
    color: '#fff',
    backgroundColor: '#2f8af4',
  },
};

export default Button;
