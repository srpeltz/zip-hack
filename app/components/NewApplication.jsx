import React from 'react'
import {Link} from 'react-router'

export var QuickstartForm = React.createClass({
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
				<button type="button" className="button">New Job Application</button>
			</a>

			{this.state.open &&
				<div className='background'>
					<div className='trigger' className='content'>
						<a type="button" className="alert button" onClick={this.closeModal}>Close</a>
						<h1>New Application</h1>
						<br/>
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

						    <div className="input-group-button">
    							<input type="submit" className="button" value="Log in"></input>
  							</div>	
						</form>
					</div>
				</div>
			}
	</div>

		)
	}
})

export default QuickstartForm
