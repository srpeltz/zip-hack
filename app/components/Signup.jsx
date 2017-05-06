
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
		<div>
			<h1>Signup Component</h1>
		</div>
		)
	}
})

export default Signup

