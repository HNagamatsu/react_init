import React from 'react'
import { connect } from 'react-redux'
import TodoList from 'components/TodoList'
import { increments } from 'actions/inclements'

// export default connect(
//   state => ({
//     count: state.increments.count,
//     text: state.increments.text
//   }),
//   { increments }
// )(TodoList)

export default TodoList;