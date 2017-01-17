import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions'
import Event from '../components/Event'
import Book from '../components/Book'
import NewEventForm from '../components/NewEventForm'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'


const containerStyle = {
  margin: '0 auto',
  width: 960,
  padding: 20,
  display: 'flex',
  flexDirection: 'column'

}

const bookStyle = {
  margin: 20
}


class Dashboard extends React.Component {
  componentDidMount () {
    this.props.getEvents()
    this.props.getBooks()
  }

createEvent(data) {
  const {title, details, date, time} = data
  this.props.createEvent(title, details, date, time)
}

createBook(data) {
  const {name, email, cert, rent, eventId} = data
  this.props.createBook(name, email, cert, rent, eventId)
}

//
// RENDERING
//

  renderEvents () {
      return this.props.events.map(event =>
        <div
          style={bookStyle}
          key={event.id}>
          <Event
            event={event}
            onDelete={(id) => this.props.deleteEvent(id)}
          />
          <Card>
            <CardHeader
              title={this.props.books.filter(book => book.eventId === event.id).map(b => b.name).join(", ")}
            />
          </Card>
        </div>
      )
    }

  renderBooks () {
    return this.props.books.map(book =>
      <Book
        key={book.id}
        book={book}
        event={this.props.events.find(event => event.id === book.eventId)}
        onDelete={(id) => this.props.deleteBook(id)}
      />
    )
  }

  render() {
    return <div style={containerStyle}>
      <div style={{width: 350, margin: '0 auto'}}>
        <NewEventForm
          onCreate={(data) => this.createEvent(data)}
          deleteAll={() => this.props.deleteAll()}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex:1, marginLeft: 20, marginRight:20, padding: 20}}>
          <h1 style={{textAlign: 'center'}}>Events</h1>
          {this.renderEvents()}
        </div>
        <div style={{flex:1, marginLeft: 20, marginRight:20, padding: 20}}>
          <h1 style={{textAlign: 'center'}}>Bookings</h1>
          {this.renderBooks()}
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  books: state.books
})

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => dispatch(Actions.getEvents()),
  getBooks: () => dispatch(Actions.getBooks()),
  createEvent: (title, details, date, time) => dispatch(Actions.createEvent(title, details, date, time)),
  deleteAll: () => dispatch(Actions.deleteAll()),
  deleteEvent: (id) => dispatch(Actions.deleteEvent(id)),
  deleteBook: (id) => dispatch(Actions.deleteBook(id))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
