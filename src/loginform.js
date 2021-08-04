import React, {Component} from 'react';
import './main.css';

class Login extends Component{
	render(){
		return(
			<div id='loginForm'>
				<form method="#">
					<h1>BONDSURVEY CONSULT</h1>
					<fieldset>
						<fieldset>
							<legend >Username</legend>
							<input type="text" id="Username" name="Username" required></input>
						</fieldset>
						<fieldset>
							<legend> Password</legend>
							<input type="password" id="password" name="password" required></input>
						</fieldset>
						<input type="submit" value="Login"></input>
					</fieldset>
				</form>
			</div>
	);
}}
export default Login;