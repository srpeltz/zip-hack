
import React from 'react'
import {Link} from 'react-router'

export var Navigation = React.createClass({
	render: function() {
		return (
		<div>
			<Link to=''>home</Link>
			<Link to='dashboard'>dashboard</Link>
		</div>
	)
}
})

export default Navigation

