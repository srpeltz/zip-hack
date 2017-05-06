
import React from 'react'
import {Link} from 'react-router'

import Navigation from 'Navigation'

export var App = React.createClass({
	render: function() {
		return (
		<div>
			<Navigation/>
			{this.props.children}
		</div>
	)
}
})

export default App

