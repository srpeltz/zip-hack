
import React from 'react'
import {Link} from 'react-router'

export var Bulletin = React.createClass({
	render: function() {
		var {type, text} = this.props

		return (
		<div className={'bulletin ' + type}>
			<p>{text}</p>
			
		</div>
		)
	}
})

export default Bulletin

