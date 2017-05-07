
import React from 'react'
import {Link} from 'react-router'

import NewApplication from 'NewApplication'

export var Applications = React.createClass({
	render: function() {
		return (
		<div>
			<h1>Applications</h1>
			<NewApplication/>
		</div>
		)
	}
})

export default Applications

var applications = [{

}]