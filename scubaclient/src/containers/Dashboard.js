import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../actions'
import Event from '../components/Event'


const containerStyle = {
  margin: '0 auto',
  width: 960,
  padding: 40
}

class Dashboard extends React.Component {
  componentDidMount () {
    this.props.getEvents()
    console.log('in componentDidMount: ', this.props.events);
  }

  renderEvents () {
    console.log('in renderEvents: ', this.props);
      return this.props.events.map(event =>
        <Event
          key={event.id}
          event={event}
        />
      )
    }

  render() {
    return <div style={containerStyle}>
      {this.renderEvents()}
    </div>
  }
}

const mapStateToProps = (state) => ({
  events: state.events
})

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => dispatch(Actions.getEvents())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
