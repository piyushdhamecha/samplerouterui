import React, { Component } from 'react'

class LoginInputs extends Component {

  constructor(props, context) {
    super(props, context)
    debugger;
  }
  render(){
    debugger;
    return(
      <form id="login-form" method="post" role="form" style={{"display": "block"}}>
        <div className="form-group">
          <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value="" />
        </div>
        <div className="form-group">
          <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" />
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login" value="Log In" />
            </div>
          </div>
        </div>

      </form>
    )
  }
}

export default LoginInputs
