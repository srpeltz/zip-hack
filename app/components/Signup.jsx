
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
	stopClose: function() {
		console.log('stopClose')
		this.setState({
			stopClose: true
		})
	},
	closeModal: function() {
		console.log('closeModal')
		if (!this.state.stopClose) {
			this.setState({
				open: false
			})
		}
	},
	render: function() {
		return (
		<div className='modal'>
			<div className='trigger' onClick={this.launchModal}>
				<p>Launch Modal</p>
			</div>

			{this.state.open &&
				<div className='background' onClick={this.closeModal}>
					<div className='content' onClick={this.stopClose}>
						<h1>Signup Component</h1>
					</div>
				</div>
			}

		</div>
		)
	}
})

export default Signup

