// Include React 
var React = require('react');

// Component creation
var Search = React.createClass({

	// Here we set a generic state associated with the text being searched for
	getInitialState: function(){
		return {
			topic: "",
			startYear: "",
			endYear: ""
		}
	},

	// This function will respond to the user input 
	handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	// When a user submits the information 
	handleClick: function(){
	
		// Set the parent to have the search term
		this.props.inputForm(this.state.topic, this.state.startYear, this.state.endYear);

	},

    resetPage: function(){
    	window.location.reload();
    },

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-primary">
				<div className="panel-heading">
					<h2 className="panel-title text-center"><strong>Search</strong></h2>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>
								<input type="text" className="form-control text-center" id="topic" onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>Start Year</strong></h4>
								<input type="text" className="form-control text-center" id="startYear" onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>End Year</strong></h4>
								<input type="text" className="form-control text-center" id="endYear" onChange= {this.handleChange} required/>
								<br />
								
								<button type="button" className="btn btn-info" onClick={this.handleClick}>Search</button>
								<button type="button" style={{'marginLeft': '8px'}} className="btn btn-info" onClick={this.resetPage}>Reset</button>
							</div>

						</form>
				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Search;