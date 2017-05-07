import React from 'react'
import {Link} from 'react-router'



export var Login = React.createClass({
	getInitialState: function(){
		return {
			open: false,
			stopClose: false
		}
	},
	handleClick: function(e) {
		e.preventDefault()

		window.location.replace('/dashboard')
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
			<a className='trigger' onClick={this.launchModal}>Log In</a>

			{this.state.open &&
				<div className='background'>
					<div className='trigger' className='content'>

						<h1>Log In</h1>
						<form>
						  	<div className="row">
							    <div className="small-3 columns">
							    	<label htmlFor="middle-label" className="text-left middle">Email</label>
							    </div>
							    <div className="small-9 columns">
							      	<input type="email" id="middle-label" placeholder="example@gmail.com"></input>
							    </div>
							</div>

						    <div className="row">
						    	<div className="small-3 columns">
						      		<label htmlFor="middle-label" className="text-left middle">Password</label>
							    </div>
							    <div className="small-9 columns">
							      	<input type="password" id="middle-label" placeholder="password"></input>
							    </div>
						    </div>

						    <br/>

						    <div className="input-group-button">
								<a href="#" className="alert-text" onClick={this.closeModal}>Close</a>
    							<input type="submit" className="button" value="Log in" onClick={this.handleClick}></input>
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
