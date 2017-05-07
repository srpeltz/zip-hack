
import React from 'react'
import {Link} from 'react-router'

export var Navigation = React.createClass({
	render: function() {
		return (
			<div className="top-bar topbar-submenu-background">
			  <div className="top-bar-left topbar-submenu-background">
			    <ul className="dropdown menu topbar-submenu-background" data-dropdown-menu>
			      <li className="menu-text topbar-submenu-background">Job Tracker</li>
			      <li className="topbar-submenu-background"><a href="/">Home</a></li>
			      <li className="topbar-submenu-background"><a href="/dashboard">Dashboard</a></li>
			    </ul>
			  </div>
			</div>
	)
}
})

export default Navigation
