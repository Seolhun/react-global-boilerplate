import React, { Component } from 'react';

import PropTypes from 'prop-types';
import NotFoundView from './child/NotFoundContainer';

class ErrorContainer extends Component {
  static propTypes = {
    statusCode: PropTypes.number,
    message: PropTypes.string,
  }

  static defaultProps = {
    statusCode: 404,
    message: '',
  }

  renderPage() {
    const { statusCode, message } = this.props;
    switch (statusCode) {
      case 400:
        return <NotFoundView message={message} />;
      default:
        return <NotFoundView message={message} />;
    }
  }

  render() {
    return (
      <section className="row">
        <div className="col-sm-12">
          {
            this.renderPage()
          }
        </div>
      </section>
    );
  }
}

export default ErrorContainer;
