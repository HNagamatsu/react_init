import React from 'react';
import { hot } from 'react-hot-loader';


class Hello extends React.Component {
  state = {
    count: 0,
  };
  increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
        <div className="container">
          <button className="button is-primary" onClick={this.increment}>
            CLICKED {this.state.count} TIMES
          </button>
        </div>
      )
  }
}

export default hot(module)(Hello);