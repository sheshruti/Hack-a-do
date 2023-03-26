import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Button,
  Card,
 CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";
import PropTypes from "prop-types";
import './style.css';
import { Redirect } from 'react-router-dom'
import { logout } from '../actions/authActions';
import { buttonReset} from '../actions/uiActions';
import Quote from './Quote'
import BookAppointment from './BookAppointment';

export class Profile extends Component {

  static propTypes = {
    button: PropTypes.bool,
    authState: PropTypes.object.isRequired,
    buttonReset: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };


  onLogout = (e) => {
    e.preventDefault();
    this.props.buttonReset();
    this.props.logout();
  };
  QuoteOfTheDay = () =>{
    return <Redirect to ="/quote"/>
  }
  render() {

    
    if(!this.props.authState.isAuthenticated) {
      return <Redirect to="/" />
    }

    const {user} = this.props.authState;

    return (
       <div className="container">
        <div className="main">
        
            
          <Card><BookAppointment/></Card>
        </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({ //Maps state to redux store as props
  button: state.ui.button,
  authState: state.auth
});

export default connect(mapStateToProps, { logout, buttonReset })(Profile);
/*

         
*/