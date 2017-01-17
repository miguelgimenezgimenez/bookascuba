import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import "./about.css"


class About extends Component {
  render () {
    return (
      <div className="card card-avatar">
        <div className="waves-effect waves-block waves-light">
            <img className="activator" src="http://joashpereira.com/templates/material_one_pager/img/avatar1.png"/>
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              JC
              <br/>
                Aprendiz de Brujo
            </span>
        </div>
      </div>

  )};

}

export default About;
