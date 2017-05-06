import React from 'react'
import {Link} from 'react-router'

export var Signup = React.createClass({
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
				<p>Sign Up</p>
			</div>

			{this.state.open &&
				<div className='background'>
					<div className='trigger' className='content'>
						<p onClick={this.closeModal}>Close</p>
						<h1>Signup Component</h1>
					</div>
				</div>
			}

		</div>
		)
	}
})

export default Signup