
import React from 'react'
import {Link} from 'react-router'

import Bulletin from 'Bulletin'

export var BulletinList = React.createClass({
	render: function() {
		var {bulletins} = this.props

		var renderBulletins = () => {
			if (bulletins.length === 0) {
				return <p>No bulletins...</p>
			} else {
				return bulletins.map((bulletin) => {
					return (
						<Bulletin key={bulletin.id} {...bulletin}/>
					)
				})
			}
		}

		return (
			<div>
				<h1>BulletinList</h1>
				{renderBulletins()}
			</div>
		)
	}
})

export default BulletinList

