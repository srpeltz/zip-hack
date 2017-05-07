
import React from 'react'
import {Link} from 'react-router'

import QuickstartForm from 'QuickstartForm'

export var Strategy = React.createClass({
	render: function() {
		function renderStrategy() {
			if (dummyUser.quickstart) {
				return (
					<div>
						<p>Skills</p>
						<p>Resume/Cover Letter/Narative</p>
						<p>Experience</p>
						<p>Education</p>
					</div>
				)
			} else {
				return (
					<QuickstartForm></QuickstartForm>
					)
			}
		}
		return (
		<div>
			<h1 className='page-title'>Strategy</h1>
			{renderStrategy()}
		</div>
		)
	}
})

export default Strategy

var dummyUser = {
	name: "Test Testerson",
	quickstart: false
}

