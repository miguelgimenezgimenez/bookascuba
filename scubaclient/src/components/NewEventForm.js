import React, { Component } from 'react'
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';


const NewEventFormStyle = {
  padding: 40,
  fontSize: 20,
  marginBottom: 15,
};

const style = {
  marginRight: 25,
  marginTop: 12,
};

class NewEventForm extends Component {

  state = {
    title: "",
    details: "",
    date: "",
    time: ""
  }

  submitAdd() {
    const {title, details, date, time} = this.state;
    const data = {title, details, date, time}
    this.props.onCreate(data)
  }

  submitDeleteAll() {
    this.props.deleteAll()
  }

  render() {
    return <div>
      <Card style={NewEventFormStyle}>
        <h2 style={{textAlign: 'center'}}>Dive Manager</h2>
          <TextField
            hintText="Write the title"
            floatingLabelText="Dive Title"
            onChange={(event, title) => this.setState({title})}
          /><br />
          <TextField
            hintText="Write the details"
            floatingLabelText="Dive Details"
            onChange={(event, details) => this.setState({details})}
          /><br />
        <DatePicker
          hintText="Select Date"
          onChange={(event, date) => this.setState({date})}
        />
        <TimePicker
          hintText="Select Time"
          autoOk={true}
          onChange={(event, time) => this.setState({time})}
        />
        <div>
          <RaisedButton label="Add Dive"
          primary={true}
          style={style}
          onTouchTap={() => this.submitAdd()}
          />
          <RaisedButton label="Delete All"
          primary={true}
          style={style}
          onTouchTap={() => this.submitDeleteAll()}
          />
        </div>
      </Card>
    </div>
  }
}

NewEventForm.propTypes = {
  onCreate: React.PropTypes.func.isRequired,
  deleteAll: React.PropTypes.func.isRequired
}

export default NewEventForm
