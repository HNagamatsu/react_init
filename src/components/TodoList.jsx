import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class TodoList extends React.Component {
  render() {
    return (
      <div className="container">
        todoList
        <input type="text" />
        <button>add</button>
        <button>delete</button>
        <ul>
          <li>aaaaaa</li>
        </ul>
      </div>
    )
  }
}
export default TodoList;