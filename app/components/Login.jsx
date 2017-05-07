import React from 'react'
import {Link} from 'react-router'

export var Login = React.createClass({
	getInitialState: function(){
		return {
			open: false,
			stopClose: false
		}
	},
	launchModal: function() {
		this.setState({
			open: true
		})
	},
	closeModal: function() {
		this.setState({
			open: false
		})
	},
	render: function() {
		return (
		<div className='modal'>
			<a className='trigger' onClick={this.launchModal}>
				<button type="button" className="button">Log In</button>
			</a>

			{this.state.open &&
				<div className='background'>
					<div className='trigger login-form-background' className='content'>
						
						<h3>Welcome</h3>

						<form>
						  	<div className="row">
							    <div className="small-3 columns">
							    	<label for="middle-label" className="text-left middle">Email</label>
							    </div>
							    <div className="small-9 columns">
							      	<input type="email" id="middle-label" placeholder="example@gmail.com"></input>
							    </div>
							</div>

						    <div className="row">
						    	<div className="small-3 columns">
						      		<label for="middle-label" className="text-left middle">Password</label>
							    </div>
							    <div className="small-9 columns">
							      	<input type="password" id="middle-label" placeholder="password"></input>
							    </div>
						    </div>

						    <div class="input-group-button">
    							<input type="submit" className="button login-form-button" value="Login"></input>
    							<a type="button" className="alert button" onClick={this.closeModal}>Close</a>
  							</div>	
						</form>
					</div>
				</div>
			}
	</div>

		)
	}
})

export default Login
