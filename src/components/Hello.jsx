import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Hello extends React.Component {
  // state = {
  //   count: 0,
  // };
  // increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
        <div className="container">
        <h1>HELL11O</h1>
        <Link to={`/hello2`}>hello2</Link>
          <button className="button is-primary" onClick={ () => this.props.Increment_Click() }>
            CLICKED {this.props.count} TIMES
          </button>

        </div>
      )
  }
}
export default Hello;