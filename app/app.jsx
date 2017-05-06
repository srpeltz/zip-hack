var React = require('react'),
	ReactDOM = require('react-dom'),
	{Route, Router, IndexRoute, hashHistory} = require('react-router')

import App from 'App'
import Landing from 'Landing'
import Dashboard from 'Dashboard'

// load app css
require('style!css!sass!applicationStyles')

// render the application with the store, router
ReactDOM.render(
	<Router history={hashHistory}>
		<Route component={App}>
			<Route path='/' component={Landing}/>
			<Route path='/dashboard' component={Dashboard}/>
		</Route>
	</Router>,
	document.getElementById('app')
)