import React, { Component } from 'react'

class RegisterInputs extends Component {

  constructor(props, context) {
    super(props, context)

  }
  render(){
    return(
      <form id="register-form" action="http://phpoll.com/register/process" method="post" role="form" style={{"display": "none"}}>
				<div className="form-group">
					<input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value="" />
				</div>
				<div className="form-group">
					<input type="text" name="userid" id="userid" tabindex="2" className="form-control" placeholder="userid" value="" />
				</div>
				<div className="form-group">
					<input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" value="" />
				</div>
				<div className="form-group">
					<input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" />
				</div>
				<div className="form-group">
					<input type="password" name="confirm-password" id="confirm-password" tabindex="2" className="form-control" placeholder="Confirm Password" />
				</div>
				<div className="form-group">
					<input type="text" name="age" id="age" tabindex="2" className="form-control" placeholder="age" />
				</div>
				<div className="form-group">
					<input type="text" name="contactno" id="contactno" tabindex="2" className="form-control" placeholder="contactno" />
				</div>
				<div className="form-group">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-3">
							<input type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" value="Register Now" />
						</div>
					</div>
				</div>
			</form>
    )
  }
}

export default RegisterInputs
