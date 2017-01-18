import React from 'react'
import { Card, CardMedia, CardTitle, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'moment'


const eventStyle={
  padding: 20,
  fontSize: 20,
  marginBottom: 15,
}


export default class Event extends React.Component {
  render() {
    return (
      <Card style={eventStyle}>
        <CardHeader
          title={this.props.event.title}
          subtitle={
            'Date: ' + Moment(this.props.event.date).format('DD MMM YYYY') +
            ' at ' + Moment(this.props.event.time).format('hh:mm a')
          }
        />
        <CardHeader
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <CardMedia
            // overlay={<CardTitle title={this.props.event.title} subtitle={
            //   'Date: ' + Moment(this.props.event.date).format('DD MMM YYYY') +
            //   ' at ' + Moment(this.props.event.time).format('hh:mm a')
            // } />}
          >
            <img src={this.props.event.image} />
          </CardMedia>

          {this.props.event.details}

        </CardText>

        <RaisedButton
          label="Delete Event"
          secondary={true}
          onTouchTap={() => this.props.onDelete(this.props.event.id)}
        />
      </Card>
    )
  }
}

Event.propTypes = {
  event: React.PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  book: React.PropTypes.object.isRequired,
}
