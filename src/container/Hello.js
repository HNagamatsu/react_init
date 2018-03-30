import React from 'react'
import { connect } from 'react-redux'
import Hello from 'components/Hello'
import { increments } from 'actions/inclements'

function mapStateToProps(state) {
  return {
      count: state.increments.count,
      text: state.increments.text
  };
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    Increment_Click: (text) => { dispatch(increments(text)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)