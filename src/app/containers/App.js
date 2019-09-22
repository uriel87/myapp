import React from "react";
import { connect } from "react-redux";
import { User } from "../components/users";
import { setName, setEmail } from "../actions/user.action";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../components/nav";
import Routes from "../routes";
import Signup from "../components/signUp";
import Form from "../components/form";


export const App = props => {
  return (
    <Router>
      <div className="container">
        <h1>hello world</h1>
        <User userList={props.user} />
        {console.log("props.user", props.user)}

        {/* <User userid={props.user.id} username={props.user.name} useremail={props.user.email} usertel={props.user.tel} /> */}

      </div>
      <hr />
      <div>
        <Nav />
      </div>
      <Routes />
      {/* <Signup /> */}
      <Form />
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    },
    setEmail: email => {
      dispatch(setEmail(email));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
