
import React from 'react'
import {Link} from 'react-router'

import Signup from 'Signup'
import Login from 'Login'

export var Landing = React.createClass({
	render: function() {
		return (
		<div>
			<h1 className='page-title'>Welcome to Outcomes</h1>

			<div>
				<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula rhoncus justo. Proin sit amet urna nunc. Integer sit amet augue cursus, volutpat turpis vel, tristique sem. Proin aliquam mi at augue porta ullamcorper. Duis nec augue finibus, laoreet nisi rhoncus, blandit ipsum. Fusce molestie varius sodales. Curabitur eu cursus lorem, vitae gravida elit. Proin accumsan dapibus augue. Nam sed scelerisque erat, non lobortis libero. Nullam posuere tortor est, eu scelerisque orci rhoncus id. Etiam a magna tellus.</p>
			</div>

			<br/>

		<div className="container">
			<div className="small-12 columns">
				<div className="text-center">
					<Signup/>
					<Login/>
				</div>
			</div>
			<div className="small-12 columns">
				<div className="text-center">
				</div>
			</div>
		</div>
	</div>
		)
	}
})

export default Landing
