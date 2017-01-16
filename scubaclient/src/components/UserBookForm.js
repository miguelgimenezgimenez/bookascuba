import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { AutoComplete } from 'material-ui'
import Moment from 'moment';



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
    value: 1,
  };

  submitAdd() {
    const {title, details, date, time, name, mail, rent, cert} = this.state;
    const data = {title, details, date, time, name, mail, rent, cert}
    this.props.onCreate(data)
  }

  // handleChange = (event, index, value) => this.setState({value});


  render() {
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
          <form>
            <div>
              <TextField name="name"
                hintText="Name"
                floatingLabelText="Name"
                ref="name" withRef
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
                onChange={(event, cert) => this.setState({cert})}
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
              <RaisedButton
                label="Submit"
                primary={true}
                type="submit">
              </RaisedButton>
            </div>
          </form>
        </Card>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events.find((event) => event.id === parseInt(ownProps.params.eventId))

  return {
    event
  }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBookForm)
