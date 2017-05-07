
import React from 'react'
import {Link} from 'react-router'

export var Bulletin = React.createClass({
	render: function() {
		var {type, text, company, title, location, 
			created_at, applied, name, email, phone, 
			round, date, contacts, followup, position, role, interaction} = this.props

		return (
		
		<div>
			<div className={'bulletin ' + type}>
				<div className="row">
					<div className="small-8 columns">
						<h5 className="contact-name">{name}</h5>
						<h5 className="round">{round}</h5>
						<h5 className="position">{position}</h5>
						<p className="company">{company}</p>
						<p className="role">{role}</p>
						<p className="title">{title}</p>
						<p className="interaction">{interaction}</p>
						
					</div>
					<div className="small-4 columns">
						<p className="contact-applied">{applied}</p>
						<p className="contact-followup">{followup}</p>
						<p className="contact-phone">{phone}</p>
						<p className="contact-email">{email}</p>
						<p className="date">{created_at}</p>
						<p className="date">{date}</p>
					</div>
				</div>
			</div>
		</div>
		
		)
	}
})

export default Bulletin

