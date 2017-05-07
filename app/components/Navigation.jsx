
import React from 'react'
import {Link} from 'react-router'
import Login from 'Login'

export var Navigation = React.createClass({
	render: function() {
		return (
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className="dropdown menu">
			      <li className="menu-text ">Job Tracker</li>
			      <li><a href="/">Home</a></li>
			      <li><a href="/dashboard">Dashboard</a></li>
			    </ul>
				</div>
				<div className="top-bar-right">
					<ul className="dropdown menu ">
						<Login/>
					</ul>
			  </div>
			</div>

	)
}
})

export default Navigation
