import React from 'react';
import { connect } from 'react-redux';

import * as Actions from './actions'

class Dashboard extends React.Component {
  componentWillMount () {
    this.props.getEvents()
  }


  render() {
    return <div></div>
  }
}

const mapStateToProps = (state) => ({
  events: state.events
})

const mapDispatchToProps = {
  getEvents: dispatch(Actions.getEvents())
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
