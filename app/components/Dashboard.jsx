
import React from 'react'
import {Link} from 'react-router'

import Menu from 'Menu'
import BulletinList from 'BulletinList'

export var Dashboard = React.createClass({
	render: function() {
		return (
		<div>
			<h1>Dashboard</h1>
			<Menu/>
			<BulletinList bulletins={dummyBulletins}/>
		</div>
		)
	}
})

export default Dashboard

var dummyBulletins = [{
	id: 1,
	type: 'alert',
	text: 'Add some goals.'
},{
	id: 2,
	type: 'alert',
	text: 'Try adding a new job application.'
},{
	id: 3,
	type: 'alert',
	text: 'Try adding a new contact.'
}]

