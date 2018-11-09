import React, { Fragment, Component } from 'react';

export interface HelloProps {
  name?: string;
}

export interface HelloState {
  name?: string;
}

class Hello extends Component<HelloProps, HelloState> {
  name?: string;

  constructor(props) {
    super(props);
    this.state = {
      name,
    }
  }

  render() {
    return (
      <Fragment>
        <h2>Hello TypeScript with Babel</h2>
      </Fragment>
    )
  }
};

export default Hello;
