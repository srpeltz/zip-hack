
import React from 'react'
import {Link} from 'react-router'

import Navigation from 'Navigation'

export var App = React.createClass({
	render: function() {
		return (
		<div>
			<Navigation/>
			<div className='row'>
				<div className='columns medium-6 large-4 small-centered'>
					{this.props.children}
				</div>
			</div>

		</div>
	)
}
})

export default App

