import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../actions'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'moment';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


const NewEventFormStyle={
  padding: 40,
  fontSize: 20,
  marginBottom: 15,
}

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const style = {
  marginRight: 15,
  marginTop: 12,
};

const containerStyle = {
  margin: '0 auto',
  width: 960,
  padding: 20,
  display: 'flex'
}



class UserBookForm extends Component {
  state = {
    cert: 1,
    open: false,
  };


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  submitBook() {
  const eventId = this.props.event.id;
    const {name, email, rent, cert} = this.state;
    const data = {name, email, rent, cert}
    this.props.onCreate(name, email, rent, cert, eventId)
  }


  render() {
    const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            onTouchTap={() => {this.submitBook(); this.handleClose()}}
          />,
        ];

    return (
      <div style={containerStyle}>
        <div style={{flex:0.5}}>
          <Card style={NewEventFormStyle}>
            <CardHeader
              title={this.props.event.title}
              subtitle={
                'Date: ' + Moment(this.props.event.date).format('DD MMM YYYY') +
                ' at ' + Moment(this.props.event.time).format('hh:mm a')
              }
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              {this.props.event.details}
            </CardText>
          </Card>

        <Card style={NewEventFormStyle}>
          <form onSubmit={(e) => {e.preventDefault(); this.submitBook()}}>
            <div>
              <TextField name="name"
                hintText="Name"
                floatingLabelText="Name"
                onChange={(event, name) => this.setState({name})}
              />
            </div>
            <div>
              <TextField name="email"
                hintText="Email"
                floatingLabelText="Email"
                onChange={(event, email) => this.setState({email})}
                />
            </div>
            <div>
              <SelectField
                floatingLabelText="Certification"
                value={this.state.cert}
                onChange={(event, index, cert) => this.setState({cert})}
                autoWidth={true}
              >
                <MenuItem value={1} primaryText="Open Water Diver" />
                <MenuItem value={2} primaryText="Advanced Open Water" />
                <MenuItem value={3} primaryText="Rescue Diver" />
                <MenuItem value={4} primaryText="Instructor" />
              </SelectField>
            </div>
            <div style={style}>
              <div>
                <RadioButtonGroup
                  name="renting"
                  defaultSelected="rentGear"
                  onChange={(event, rent) => this.setState({rent})}
                  >
                  <RadioButton
                    value="rentGear"
                    label="I need to rent diving equipment"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="ownGear"
                    label="I have my own equipment"
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
              </div>
            </div>

            <div>
              <RaisedButton label="ok"
                primary={true}
                onTouchTap={this.handleOpen} />
              <Dialog
                title="THANK YOU FOR CODING WITH US"
                actions={actions}
                modal={true}
                open={this.state.open}
              >
                Please confirm your booking for {Moment(this.props.event.date).format('DD MMM YYYY') +
                ' at ' + Moment(this.props.event.time).format('hh:mm a')}
              </Dialog>
            </div>
          </form>
        </Card>
      </div>
    </div>
    )
  }
}


UserBookForm.propTypes = {
  onCreate: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events.find((event) => event.id === parseInt(ownProps.params.eventId))

  return {
    event
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCreate: (name, email, rent, cert, eventId) => dispatch(Actions.createBook(name, email, rent, cert, eventId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBookForm)
