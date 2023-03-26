import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import { connect } from "react-redux";
import { Route, Switch, Link } from 'react-router-dom'
//import BookAppointment from './BookAppointment';
import {
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import Quote from './Quote';
import { buttonClicked } from "../actions/uiActions";
import './style.css';
import store from '../store';
import { isAuth } from '../actions/authActions'
import {Redirect} from 'react-router-dom'
//import BookAppointment from './BookAppointment';


var divStyle = {
color:'white'
};

export class HomePage extends Component {

  componentDidMount() {
    // Check if session cookie is present
    store.dispatch(isAuth());
  }

  static propTypes = {
    button: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
  };

  render() {

    if(this.props.isAuthenticated) {
      return <Redirect to="/profile" />
    }

    return (
       <div className="container">
        <div className="main">
          <h1 style={divStyle}> <strong>Anand</strong>  </h1>
          <br/>
            <h5 style={divStyle}> Aao baat karein.... <span role="img" aria-label="lock"> </span><br></br> A small chat can make a big difference </h5>
           
          <br/>
          <div>

            <Switch>
              <Route exact path ="/login" component={Login}/>
              <Route exact path ="/register" component={Register}/>
            </Switch>

             { this.props.button && <Link className='divStyle' to="/login">
               <Button size="lg"  color="light">Sign In</Button>
               </Link>}

             {this.props.button && <Link className='divStyle' to="/register">
               <Button  size="lg"  color="light">Register</Button>
             </Link>}

          </div>
          
        </div>
       
    </div>
    )
  }
}
const mapStateToProps = (state) => ({ //Maps state to redux store as props
  button: state.ui.button,
  isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps)(HomePage);
