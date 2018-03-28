import React from 'react';
import { hot } from 'react-hot-loader';

class Hello extends React.Component {
  state = {
    count: 0
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
      <section>
        <div>
          <button onClick={this.increment}>
            CLICKED {this.state.count} TIMES
          </button>
          <div>aaaxxxxaa</div>
        </div>
      </section>
    )
  }
}
// export default Hello;

export default hot(module)(Hello);
// module.hot.accept();