import React from 'react'
import {Link} from 'react-router'

export var NewApplication = React.createClass({
	getInitialState: function(){
		return {
			open: false,
			part: 1
		}
	},
	launchModal: function() {
		this.setState({
			open: true
		})
	},
	closeModal: function(e) {
		e.preventDefault()
		this.setState({
			open: false
		})
	},
	handleNext: function(e) {
		e.preventDefault()
		this.setState({
			part: 2
		})
	},
	render: function() {

		var that = this

		function getForm() {
			switch (that.state.part) {
				case 1:
					return (
						<form>
			
						  	<div className="row">
							    <div className="small-4 columns">
							    	<label className="text-left middle">Job Title</label>
							    </div>
							    <div className="small-8 columns">
							      	<input type="text"/>
							    </div>
							</div>

						    <div className="row">
						    	<div className="small-4 columns">
						      		<label className="text-left middle">Company Name</label>
							    </div>
							    <div className="small-8 columns">
							      	<input type="text"/>
							    </div>
						    </div>

						    <div className="row">
						    	<div className="small-4 columns">
						      		<label className="text-left middle">Link to Posting</label>
							    </div>
							    <div className="small-8 columns">
							      	<input type="text"/>
							    </div>
						    </div>

						    <br/>

						    <div className="input-group-button">
								<a href="#" 
								   className="alert-text" 
								   value="Cancel"
								   onClick={that.closeModal}>Cancel</a>
    							<input type="submit" 
    								   className="button" 
    								   value="Next"
    								   onClick={that.handleNext}/>
  							</div>	
						</form>
					)
					break
				case 2:
					return (
						<form>
							<p>Please keep this open while you complete your application.</p>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
							<h1>Spacer</h1>
						</form>
					)
					break
			}
		}

		return (
		<div className='modal'>
			<button type="button" className="button trigger" onClick={this.launchModal}>Add Job Application</button>

			{this.state.open &&
				<div className='background'>
					<div className='trigger' className='content'>
						<h2>New Application</h2>
						{getForm()}
					</div>
				</div>
			}
	</div>

		)
	}
})

export default NewApplication
