
import React from 'react'
import {Link} from 'react-router'

import Menu from 'Menu'
import BulletinList from 'BulletinList'

export var Dashboard = React.createClass({
	render: function() {
		return (
		<div>
			<h1 className='page-title'>Dashboard</h1>
			<Menu/>
			
			<div className="bulletin goals">
				<div className="row">
					<div className="small-4 columns">
						<img src='http://placehold.it/150x150'></img>
						<p>App Goals</p>
					</div>
					
					<div className="small-4 columns">
						<img src='http://placehold.it/150x150'></img>
						<p>Interview Goals</p>
					</div>

					<div className="small-4 columns">
						<img src='http://placehold.it/150x150'></img>
						<p>Follow-ups Goals</p>
					</div>
				</div>
				
			</div>

			<BulletinList bulletins={dummyBulletins}/>
		</div>
		)
	}
})

export default Dashboard

var dummyBulletins = [{
	id: 2,
	urgent: true,
	type: 'application',
	company: 'Ziprecruiter',
	position: 'Software Developer',
	location: 'Los Angeles, CA',
	created_at: 'Date Applied: May 1, 2017',
	applied: 'Status: Applied'
},{
	id: 3,
	urgent: false,
	type: 'application',
	company: 'General Assembly',
	position: 'Software Developer Instructor',
	location: 'Los Angeles, CA',
	created_at: 'Date Applied: April 28, 2017',
	applied: 'Status: Applied'
},{
	id: 4,
	urgent: true,
	type: 'contact',
	name: 'Jane Smith',
	company: 'General Assembly',
	email: 'janesmith@gmail.com',
	phone: '555-555-5555',
    company: 'Zip Recruiter',
    title: 'Recruiter',
    followup: 'Follow-up: Pending',
    interaction: 'Met during Ziprecruiter hackathon. Need to followup (attach resume). Note: enjoys organizing team offsites! Include article on team culture in email.'
},{
	id: 5,
	urgent: false,
	type: 'contact',
	name: 'Alex Espinoza',
    email: 'alex@gmail.com',
    phone: '555-555-5552',
    company: 'General Assembly',
    title: 'Web Developer Instructor',
    interaction: 'Studied together.'
},{
	id: 6,
	urgent: false,
	type: 'contact',
	name: 'Steven Peltzer',
    email: 'steve@gmail.com',
    phone: '555-555-5551',
    company: 'Freelance',
    title: 'Web Developer',
    interaction: 'Worked on the hackathon together. Consider working together on a project.'
},{
	id: 7,
	urgent: true,
	type: 'interview',
	company: 'Ziprecruiter',
	role: 'Software Developer',
	round: 'Phone Interview',
	date: 'Interview date: May 6, 2017',
	contacts: [{
		name: 'Steven Peltzer',
    	email: 'steve@gmail.com',
    	phone: '555-555-5551',
    	title: 'Web Developer'
    }],
	followup: 'Follow-up: Complete'
},{
	id: 8,
	urgent: true,
	type: 'interview',
	company: 'General Assembly',
	role: 'Software Developer Instructor',
	round: 'Technical Interview',
	date: 'Interview date: May 8, 2017',
	contacts: [{
		name: 'Steven Peltzer',
    	email: 'steve@gmail.com',
    	phone: '555-555-5551',
    	title: 'Web Developer'
    }],
	followup: 'Follow-up: Pending'
}]


