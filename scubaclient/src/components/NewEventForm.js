import React, { Component } from 'react'
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';


const NewEventFormStyle={
  padding: 40,
  fontSize: 20,
  marginBottom: 15,
}

const style = {
  marginTop: 12,
};

class NewEventForm extends Component {
  submit() {
    const data = {}


  }

  render() {
    return <div>
      <Card style={NewEventFormStyle}>
        <h2>New Dive</h2>
          <TextField
            hintText="Write the title"
            floatingLabelText="Dive Title"
          /><br />
          <TextField
            hintText="Write the details"
            floatingLabelText="Dive Details"
          /><br />
        <DatePicker hintText="Select Date" />
        <TimePicker
          hintText="Select Time"
          autoOk={true}
        />
        <div>
          <RaisedButton label="Add Dive" primary={true} style={style}
          />
        </div>
      </Card>
    </div>
  }
}

NewEventForm.propTypes = {
  onCreate: React.PropTypes.func.isRequired
}

export default NewEventForm
