
import React from 'react'
import {Link} from 'react-router'

export var Navigation = React.createClass({
	render: function() {
		return (
			<div className="top-bar topbar-submenu-background">
			  <div className="top-bar-left">
			    <ul className="dropdown menu" data-dropdown-menu>
			      <li className="menu-text topbar-submenu-background" >Job Tracker</li>
			      <li className="topbar-submenu-background" activeClassName="active" ><a href="/dashboard">Dashboard</a></li>
			      <li className="topbar-submenu-background" activeClassName="active" ><a href="/strategy">Strategy</a></li>
			      <li className="topbar-submenu-background" activeClassName="active" ><a href="/applications">Applications</a></li>
			      <li className="topbar-submenu-background" activeClassName="active" ><a href="/network">Network</a></li>
			    </ul>
			  </div>
				<div className='top-bar-right'>
					<ul className='menu'>
					      <li className="topbar-submenu-background">Log Out</li>
					</ul>
				</div>
			</div>
	)
}
})

export default Navigation
