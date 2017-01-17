import React from 'react'
import { Card, CardTitle, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'moment'

const eventStyle={
  padding: 40,
  fontSize: 20,
  marginBottom: 15,
}



export default class Book extends React.Component {

  // const cert = this.props.book.cert
  // if (cert === 1) {
  //   cert = OWD
  // }

  render() {
    return (
      <Card style={eventStyle}>
        <CardHeader
          title={this.props.book.name + ' ' + this.props.book.email}
          subtitle={this.props.book.email}
          subtitle={
            'Date: ' + Moment(this.props.event.date).format('DD MMM YYYY') +
            ' at ' + Moment(this.props.event.time).format('hh:mm a')
          }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>

          <RaisedButton
            secondary={true}
            label="Delete Booking"
            onTouchTap={() => this.props.onDelete(this.props.book.id)}
          />
        </CardActions>
        <CardText expandable={true}>
          {this.props.book.cert + ' ' + this.props.book.rent}
        </CardText>
      </Card>
    )
  }
}

Book.propTypes = {
  event: React.PropTypes.object,
  book: React.PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired
}
