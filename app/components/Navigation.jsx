
import React from 'react'
import {Link} from 'react-router'

export var Navigation = React.createClass({
	render: function() {
		return (
<<<<<<< HEAD
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className="dropdown menu">
			      <li className="menu-text ">Job Tracker</li>
			      <li><a href="/">Home</a></li>
			      <li><a href="/dashboard">Dashboard</a></li>
=======
			<div className="top-bar topbar-submenu-background">
			  <div className="top-bar-left">
			    <ul className="dropdown menu" data-dropdown-menu>
			      <li className="menu-text topbar-submenu-background" >Job Tracker</li>
			      <li className="topbar-submenu-background" activeClassName="active" ><a href="/dashboard">Dashboard</a></li>
			      <li className="topbar-submenu-background" activeClassName="active" ><a href="/strategy">Strategy</a></li>
			      <li className="topbar-submenu-background" activeClassName="active" ><a href="/applications">Applications</a></li>
			      <li className="topbar-submenu-background" activeClassName="active" ><a href="/network">Network</a></li>
>>>>>>> 78e60b84ee9689d8b046b4e33db18a90efd99cdb
			    </ul>
				</div>
				<div className="top-bar-right">
					<ul className="dropdown menu ">
						<Login/>
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
