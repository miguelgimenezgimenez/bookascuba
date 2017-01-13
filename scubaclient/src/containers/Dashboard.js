import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions'
import Event from '../components/Event'
import NewEventForm from '../components/NewEventForm'

const containerStyle = {
  margin: '0 auto',
  width: 960,
  padding: 20,
  display: 'flex'
}

class Dashboard extends React.Component {
  componentDidMount () {
    this.props.getEvents()
  }

createEvent(data) {
  const {title, details, date, time} = data
  this.props.createEvent(title, details, date, time)
}

//
// RENDERING
//

  renderEvents () {
      return this.props.events.map(event =>
        <Event
          key={event.id}
          event={event}
        />
      )
    }

  render() {
    return <div style={containerStyle}>
      <div style={{flex:0.5}}>
        <div style={{flex:0.5, marginLeft: 20, padding: 20}}>
          <NewEventForm
            onCreate={(data) => this.createEvent(data)}
            deleteAll={() => this.props.deleteAll()}
          />
        </div>
        {this.renderEvents()}
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  events: state.events
})

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => dispatch(Actions.getEvents()),
  createEvent: (title, details, date, time) => dispatch(Actions.createEvent(title, details, date, time)),
  deleteAll: () => dispatch(Actions.deleteAll())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
