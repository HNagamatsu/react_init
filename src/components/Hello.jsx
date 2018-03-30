import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Hello extends React.Component {
  // state = {
  //   count: 0,
  // };
  // increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    console.log(this.props)
    return (
        <div className="container">
        <h1>HELL11O</h1>
        <Link to={`/hello2`}>hello2</Link>
          <button className="button is-primary" onClick={ () => this.props.increments("aaaaaaaa") }>
            CLICKED {this.props.count} TIMES
            {this.props.text}
          </button>

        </div>
      )
  }
}
export default Hello;