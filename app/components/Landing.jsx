
import React from 'react'
import {Link} from 'react-router'

export var Landing = React.createClass({
	render: function() {
		return (
		<div>
			<h1>Welcome to Job Tracker</h1>

			<Link to=''>Sign Up</Link>
			<Link to=''>Log In</Link>

			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula rhoncus justo. Proin sit amet urna nunc. Integer sit amet augue cursus, volutpat turpis vel, tristique sem. Proin aliquam mi at augue porta ullamcorper. Duis nec augue finibus, laoreet nisi rhoncus, blandit ipsum. Fusce molestie varius sodales. Curabitur eu cursus lorem, vitae gravida elit. Proin accumsan dapibus augue. Nam sed scelerisque erat, non lobortis libero. Nullam posuere tortor est, eu scelerisque orci rhoncus id. Etiam a magna tellus.</p>

		</div>
		)
	}
})

export default Landing

