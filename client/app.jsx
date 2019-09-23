import React from 'react';
import AstroSignSpinner from './containers/astro-sign-spinner';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  render() {
    return (<AstroSignSpinner />);
  }
}
