import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import LoginInputs from "./loginInputs"
import RegisterInputs from "./registerInputs"

require('./Login.css')

class Login extends Component {

  constructor(props, context) {
    super(props, context)

  }

  render() {
    return (
      <Router>
        <div>
          <div className="container" >
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className={'panel panel-login'}>
                  <div className={'panel-heading'}>
        						<div className="row">
        							<div className="col-xs-6">
                        <Link className={'active'} to="/Login">Login</Link>
        							</div>
        							<div className="col-xs-6">
                        <Link to="/Register">Register</Link>
        							</div>
        						</div>
        						<hr/>
        					</div>
                  <div className={'panel-body'}>
        						<div className="row">
        							<div className="col-lg-12">
                        <Switch>
          								<Route path="/Login" components={LoginInputs}/>
                          <Route path="/Register" components={RegisterInputs}/>
                          <Route exact path="/" components={LoginInputs}/>
                        </Switch>
        							</div>
        						</div>
        					</div>
                </div>
              </div>
      		  </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Login
