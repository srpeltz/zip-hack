
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
			<BulletinList bulletins={seedBulletins}/>
		</div>
		)
	}
})

export default Dashboard

var seedBulletins = [{
		type: 'alert',
		text: 'You '
	}

]

