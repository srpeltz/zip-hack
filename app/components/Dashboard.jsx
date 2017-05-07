
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
			
			<div className="bulletin goals">
				<div className="row">
					
					<div className="small-4 columns">
						<img src='http://placehold.it/150x150'></img>
					</div>
					
					<div className="small-4 columns">
						<img src='http://placehold.it/150x150'></img>
					</div>

					<div className="small-4 columns">
						<img src='http://placehold.it/150x150'></img>
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
	title: 'Software Developer',
	location: 'Los Angeles, CA',
	created_at: 'May 1, 2017',
	applied: 'Pending Application'
},{
	id: 3,
	urgent: true,
	type: 'application',
	company: 'General Assembly',
	title: 'Software Developer Instructor',
	location: 'Los Angeles, CA',
	created_at: 'April 28, 2017',
	applied: 'Applied'
},{
	id: 4,
	urgent: true,
	type: 'contact',
	name: 'Jane Smith',
	company: 'General Assembly',
	phone: '555-555-5555',
    company: 'Zip Recruiter',
    title: 'Recruiter'
},{
	id: 5,
	urgent: true,
	type: 'contact',
	name: 'Alex Espinoza',
    email: 'alex@gmail.com',
    phone: '555-555-5552',
    company: 'General Assembly',
    title: 'Web Developer Instructor'
},{
	id: 6,
	urgent: true,
	type: 'contact',
	name: 'Steven Peltzer',
    email: 'steve@gmail.com',
    phone: '555-555-5551',
    company: 'Freelance',
    title: 'Web Developer'
},{
	id: 7,
	urgent: true,
	type: 'interview',
	company: 'Ziprecruiter',
	title: 'Software Developer',
	round: 'Phone Interview',
	date: 'May 6, 2017',
	contacts: [{
		name: 'Steven Peltzer',
    	email: 'steve@gmail.com',
    	phone: '555-555-5551',
    	title: 'Web Developer'
    }],
	followup: 'Follow-up: complete'
},{
	id: 8,
	urgent: true,
	type: 'interview',
	company: 'General Assembly',
	title: 'Software Developer Instructor',
	round: 'Technical Interview',
	date: 'May 8, 2017',
	contacts: [{
		name: 'Steven Peltzer',
    	email: 'steve@gmail.com',
    	phone: '555-555-5551',
    	title: 'Web Developer'
    }],
	followup: 'Follow-up: Pending'
}]


