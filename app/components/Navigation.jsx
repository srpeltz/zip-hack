
import React from 'react'
import {Link} from 'react-router'

export var Navigation = React.createClass({
	render: function() {
		return (
			<div>
				<nav className="navbar navbar-toggleable-md navbar-light">
				  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <a className="navbar-brand" href="/">Job Tracker</a>
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href='/'>Home</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link" href="/dashboard">Dashboard</a>
							</li>
				    </ul>
				  </div>
				</nav>
		</div>
	)
}
})

export default Navigation
