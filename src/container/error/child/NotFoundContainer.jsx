import React from 'react';

import PropTypes from 'prop-types';

const NotFoundView = (props) => {
  NotFoundView.propTypes = {
    statusCode: PropTypes.number,
    message: PropTypes.string,
  };

  NotFoundView.defaultProps = {
    statusCode: 404,
    message: '',
  };

  const { statusCode, message } = props;
  return (
    <section className="row">
      <div className="col-sm-12">
        <h1>
          Not Found Page
          {statusCode}
        </h1>
      </div>
      <div className="col-sm-12">
        <h5>
          {message}
        </h5>
      </div>
    </section>
  );
};

export default NotFoundView;
