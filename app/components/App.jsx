
import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'
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
			{this.props.children}
		</div>
	)
}
})

export default Redux.connect()(App)

