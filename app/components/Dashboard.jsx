
import React from 'react'
import {Link} from 'react-router'

export var Dashboard = React.createClass({
	render: function() {
		return (
		<div>
			<h1>Dashboard Component</h1>
			{this.props.children}
		</div>
		)
	}
})

export default Dashboard

