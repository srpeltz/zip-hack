var React = require('react'),
	ReactDOM = require('react-dom'),
	{Route, Router, IndexRoute, browserHistory} = require('react-router')

import App from 'App'
import Landing from 'Landing'
import Dashboard from 'Dashboard'

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

// App css
require('style!css!sass!applicationStyles')

// render the application with the store, router
ReactDOM.render(
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path='/' component={Landing}/>
			<Route path='/dashboard' component={Dashboard}/>
		</Route>
	</Router>,
	document.getElementById('app')
)
