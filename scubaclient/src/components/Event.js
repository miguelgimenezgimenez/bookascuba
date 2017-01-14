import React from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import Moment from 'moment'

const eventStyle={
  padding: 40,
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
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>

          <FlatButton label="Delete"
            onTouchTap={() => this.props.onDelete(this.props.event.id)}
          />
        </CardActions>
        <CardText expandable={true}>
          {this.props.event.details}
        </CardText>
      </Card>
    )
  }
}

Event.propTypes = {
  event: React.PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired
}
