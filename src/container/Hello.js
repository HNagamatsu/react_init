import React from 'react'
import { connect } from 'react-redux'
import Hello from 'components/Hello'
import inclements from 'actions/inclements'

function mapStateToProps(state) {
  return state
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    Increment_Click: () => { dispatch(inclements.increment()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)