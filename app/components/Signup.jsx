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
			<a className='trigger' onClick={this.launchModal}>
				<button type="button" className="button button-padding">Sign up</button>
			</a>

			{this.state.open &&
				<div className='background'>
					<div className='trigger' className='content'>
						<a type="button" className="alert button" onClick={this.closeModal}>Close</a>
						<h1>Signup Component</h1>
					</div>
				</div>
			}

		</div>
		)
	}
})

export default Signup
