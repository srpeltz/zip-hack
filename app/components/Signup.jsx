
import React from 'react'
import {Link} from 'react-router'

export var Signup = React.createClass({
	getInitialState: function(){
		return {
			open: false,
			contentClick: null
		}
	},
	launchModal: function() {
		this.setState({
			open: true
		})
	},
	stopCloseModal: function(component) {
		console.log('closeModal fired with', component)
		if (component === 'content') {
			this.setState({
				contentClick: true
			})	
		} else if (!this.state.contentClick) {
			this.setState({
				open: false
			})
		}
	},
	closeModal: function(component) {
		console.log('closeModal fired with', component)
		if (component === 'content') {
			this.setState({
				contentClick: true
			})	
		} else if (!this.state.contentClick) {
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
					<div className='content' onClick={stopCloseModal}>
						<h1>Signup Component</h1>
					</div>
				</div>
			}

		</div>
		)
	}
})

export default Signup

