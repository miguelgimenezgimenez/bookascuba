import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions'
import UserEvent from '../components/UserEvent'

const containerStyle = {
  margin: 'auto',
  width: 1000,
  padding: 20,
  display: 'flex'
}

const styleEvents = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start'
}

class UserDashboard extends React.Component {
  componentDidMount () {
    this.props.getEvents()
  }

//
// RENDERING
//

  renderEvents () {
    console.log('UserDashboard: ', this.props.events);
      return this.props.events.map(event =>
        <UserEvent
          className="event"
          style={{ width: 300, marginRight:20, marginBottom: 20 }}
          key={event.id}
          event={event}
          onBook={(id) => this.props.bookEvent(id)}
        />
      )
    }

  render() {
    return <div style={containerStyle}>
      <div style={{margin: 'auto', padding: 20}}>
        {/* <h1 style={{textAlign: 'center'}}>EVENTS</h1> */}
        <div style={styleEvents}>
          {this.renderEvents()}
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  events: state.events
})

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => dispatch(Actions.getEvents()),
  bookEvent: (id) => dispatch(Actions.bookEvent(id))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard)
