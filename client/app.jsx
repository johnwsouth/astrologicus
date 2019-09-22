import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  render() {
    return (<div>Hello World</div>);
  }
}
