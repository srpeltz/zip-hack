var React = require('react'),
	ReactDOM = require('react-dom'),
	{Route, Router, IndexRoute, hashHistory} = require('react-router')

import App from 'App'

// load app css
require('style!css!sass!applicationStyles')

// render the application with the store, router
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={App}>

			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)