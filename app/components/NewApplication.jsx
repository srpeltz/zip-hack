import React from 'react'
import {Link} from 'react-router'

export var NewApplication = React.createClass({
	getInitialState: function(){
		return {
			open: false,
			stopClose: false
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
	handleSubmit: function(e) {
		e.preventDefault()
	},
	render: function() {
		return (
		<div className='modal'>
			<button type="button" className="button trigger" onClick={this.launchModal}>Add Job Application</button>

			{this.state.open &&
				<div className='background'>
					<div className='trigger' className='content'>
						<h2>New Application</h2>
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
								   onClick={this.closeModal}>Cancel</a>
    							<input type="submit" 
    								   className="button" 
    								   value="Add"
    								   onClick={this.handleSubmit}/>
  							</div>	
						</form>
					</div>
				</div>
			}
	</div>

		)
	}
})

export default NewApplication
