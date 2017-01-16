import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Card }     from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField    from 'material-ui/TextField';

import * as Actions from '../actions'

const containerStyle = {
  margin: '0 auto',
  width: 960,
  padding: 20,
  display: 'flex'
}

const LoginStyle={
  padding: 40,
  fontSize: 20,
  marginBottom: 15,
}

const style = {
  marginRight: 15,
  marginTop: 12,
};


class LoginForm extends Component {

  state = {
    username: "",
    password: ""
  }

  submitLogin() {
    const {username, password} = this.state;
    this.props.onSubmit(username, password)
    console.log(this.props);
  }

  handleKeyPress(target) {
    if(target.charCode === 13){
      () => this.submitLogin();
    }
  }

  render () {
    return <div>

      <div style={containerStyle}>
        <div style={{flex:0.5}}>
          <div style={{flex:0.5, marginLeft: 20, padding: 20}}>
            <Card className="login" style={LoginStyle}>
              <h2 className="card-heading">Admin Login</h2>
              <div className="field-line">
                <TextField
                  floatingLabelText="username"
                  name="username"
                  onChange={(event, username) => this.setState({username})}
                />
              </div>

              <div className="field-line">
                <TextField
                  floatingLabelText="password"
                  type="password"
                  name="password"
                  onChange={(event, password) => this.setState({password})}
                  onKeyPress={this.handleKeyPress}
                />
              </div>

              <div className="button-line">
                <RaisedButton
                  type="submit"
                  label="Log in"
                  style={style}
                  primary
                  onTouchTap={() => this.submitLogin()}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>



    </div>
  }

}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => dispatch(Actions.login(username, password))
})

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  user: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
