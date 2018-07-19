import React from "react";
import {connect} from "react-redux";

import {loginUser, LOGIN} from '../actions/actions'

class LoginComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			loginError: {
				email: '',
				pass: ''
			}
		};
		this.handlechangeEmail = this.handlechangeEmail.bind(this);
		this.handlechangePass = this.handlechangePass.bind(this);
		this.login = this.login.bind(this);
	}

	handlechangeEmail(e) {
		this.setState({email: e.target.value});
	}
	handlechangePass = (e) =>{
		this.setState({password: e.target.value});
	}

	login(e) {
		e.preventDefault();
		if (!this.state.email) {
			this.setState({loginError: {email: 'Please enter your email'}});
			return;
		}
		if (!this.state.password) {
			this.setState({loginError: {pass: 'Please enter your password'}});
			return;
		}
		this.props.dispatch(loginUser({email: this.state.email}));
		this.props.history.push('/todoapp')

	}

	render() {
		return(
			<div className="container">
			  <div className="login-container">
			  	<h2>LOGIN</h2>
				<form onSubmit={this.login}>
					<div className="form-group">
					  <label htmlFor="email">Email:</label>
					  <input
					  	value={this.state.email}
					  	ref={this.state.emalRef}
					  	onChange={this.handlechangeEmail}
					   type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
					   <div className="error">{this.state.loginError.email}</div>
					</div>
					<div className="form-group">
					  <label htmlFor="pwd">Password:</label>
					  <input 
					  	value={this.state.password}
					  	ref={this.state.passRef}
					  	onChange={this.handlechangePass}
					  type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
					  <div  className="error">{this.state.loginError.pass}</div>
					</div>
					<div className="form-group form-check">
					  <label className="form-check-label">
					    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
					  </label>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			  </div>
			</div>


		)
	}
}

export default connect(null)(LoginComponent);