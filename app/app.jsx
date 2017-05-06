var React = require('react'),
	ReactDOM = require('react-dom'),
	{Route, Router, IndexRoute, hashHistory} = require('react-router')

var {Provider} = require('react-redux')
var actions = require('actions')

import App from 'App'

import Welcome from 'Welcome'
import WelcomeMenu from 'WelcomeMenu'
import Signup from 'Signup'
import Login from 'Login'

import About from 'About'
import AboutMise from 'AboutMise'
import AboutAPI from 'AboutAPI'

import Ideas from 'Ideas'
import Projects from 'Projects'
import Recipes from 'Recipes'
import Chef from 'Chef'

import RecipeList from 'RecipeList'
import NewRecipe from 'NewRecipe'

// load app css
require('style!css!sass!applicationStyles')

// Set up redux store
var defaultState = {
	auth:{authenticated:false}
}
var store = require('configureStore').configure(defaultState)

var lastAuth = false

store.subscribe(() => {

	console.log('State change.')
	var state = store.getState()

	if (!lastAuth && state.auth.authenticated) {
		hashHistory.push('/chef')
	}

	lastAuth = state.auth.authenticated
})

// Authentication middleware
var requireLogin = (nextState, replace, next) => {
	if (!store.getState().auth.authenticated) replace('/')
	next()
}

var loginRedirect = (nextState, replace, next) => {
	if (store.getState().auth.authenticated) replace('/chef')
	next()
}

// render the application with the store, router
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={App}>

				<Route path='/' component={Welcome}>
					<IndexRoute component={WelcomeMenu} onEnter={loginRedirect}/>
					<Route path='log-in'component={Login} onEnter={loginRedirect}/>
					<Route path='sign-up' component={Signup} onEnter={loginRedirect}/>
				</Route>

				<Route path='about' component={About}>
					<IndexRoute component={AboutMise}/>
					<Route path='api' component={AboutAPI}/>
				</Route>

				<Route path='ideas' component={Ideas} onEnter={requireLogin}>
				</Route>

				<Route path='projects' component={Projects} onEnter={requireLogin}>
				</Route>

				<Route path='recipes' component={Recipes} onEnter={requireLogin}>
					<IndexRoute component={RecipeList}/>
					<Route path='new'component={NewRecipe} onEnter={requireLogin}/>
				</Route>

				<Route path='chef' component={Chef} onEnter={requireLogin}>
				</Route>

			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)