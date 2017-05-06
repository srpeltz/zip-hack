
import React from 'react'
import {Link} from 'react-router'

export var Login = React.createClass({
	render: function() {
		return (
		<div>
			<h1>Login Component</h1>
			{this.props.children}
		</div>
		)
	}
})

export default Login

