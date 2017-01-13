import React from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';


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
          subtitle={this.props.event.date}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Modify" />
          <FlatButton label="Delete"
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
  event: React.PropTypes.object.isRequired
}
