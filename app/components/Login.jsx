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
			<div className='trigger' onClick={this.launchModal}>
				<p>Log In</p>
			</div>

			{this.state.open &&
				<div className='background'>
					<div className='trigger' className='content'>
						<p onClick={this.closeModal}>Close</p>
						<h1>Login Component</h1>
					</div>
				</div>
			}

		</div>
		)
	}
})

export default Login