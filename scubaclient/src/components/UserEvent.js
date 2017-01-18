import React from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'moment';

const eventStyle={
  padding: 40,
  fontSize: 20,
  marginBottom: 240,
}

const style = {
  display: 'flex',
  marginTop: 12,
};


export default class UserEvent extends React.Component {
  render() {
    return (
      <Card style={this.props.style}>
        <CardHeader
          title="Vanas Dive"
          subtitle="Diving Center"
          avatar="http://www.vanasdive.com/wp-content/uploads/caballitu-bola-home.png"
        />
        <CardMedia
          overlay={<CardTitle
            title={this.props.event.title}
            subtitle={
              'Date: ' + Moment(this.props.event.date).format('DD MMM YYYY') +
              ' at ' + Moment(this.props.event.time).format('hh:mm a')
            } />}
        >
          <img src={this.props.event.image} />
        </CardMedia>


        <CardText>
          {this.props.event.details}
        </CardText>

        <CardActions>
          <RaisedButton
            style={style}
            label="Book"
            primary={true}
            onTouchTap={() => this.props.onBook(this.props.event.id)}
            containerElement={<Link to={`/bookform/${this.props.event.id}`} />}
          />
        </CardActions>
    </Card>

    )
  }
}

Event.propTypes = {
  event: React.PropTypes.object.isRequired,
  onBook: React.PropTypes.func.isRequired
}
