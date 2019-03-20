import React, { Component } from 'react';

import NotFoundView from './child/NotFoundContainer';

interface ErrorViewProps {
  statusCode: number;
  message: string;
}

class ErrorView extends Component<ErrorViewProps> {
  renderPage({ statusCode, message }) {

    switch (statusCode) {
      case 400:
        return <NotFoundView message={message} />;
      default:
        return <NotFoundView message={message} />;
    }
  }

  render() {
    const {
      statusCode = 404,
      message = '',
    } = this.props;

    return (
      <section className='row'>
        <div className='col-sm-12'>
          {this.renderPage({ statusCode, message })}
        </div>
      </section>
    );
  }
}

export default ErrorView;
