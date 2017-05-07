
import React from 'react'
import {Link} from 'react-router'

import Bulletin from 'Bulletin'

export var BulletinList = React.createClass({
	render: function() {
		var {bulletins} = this.props

		var renderBulletins = (urgent) => {
			if (bulletins.length === 0) {
				return <p>No bulletins...</p>
			} else {
				return bulletins.filter((bulletin) => {
					return bulletin.urgent === urgent
				}).map((bulletin) => {
					return (
						<Bulletin key={bulletin.id} {...bulletin}/>
					)
				})
			}
		}

		return (
			<div>
				<div className='urgent'>
					{renderBulletins(true)}
				</div>
				<div className='regular'>
					{renderBulletins(false)}
				</div>
			</div>
		)
	}
})

export default BulletinList

