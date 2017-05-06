
import React from 'react'
import {Link} from 'react-router'


export var App = React.createClass({
	onLogout: function(evt) {
		var {dispatch} = this.props
		evt.preventDefault()

		dispatch(actions.startLogout())
	},
	getWrapperClass: function() {
		var result = ''
		
		return result
	},
	render: function() {
		return (
		<div id="app-wrapper" className={this.getWrapperClass()}>
			<h1>Hello World</h1>
		</div>
	)
}
})

export default App

