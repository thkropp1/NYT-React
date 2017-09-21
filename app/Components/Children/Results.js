// Include React 
var React = require('react');
var moment = require('moment');

// Component creation
var Results = React.createClass({

	getInitialState: function(){
		return {
			title: "",
			date: "",
			url: "",
			results: []
		}
	},

	// When a user clicks to save an article
	clickToSave: function(result){


	
		this.props.savedArticle(result.headline.main, result.pub_date, result.web_url);


	},

	componentWillReceiveProps: function(nextProps){
		var that = this;
		var myResults = nextProps.results.map(function(search, i){
			var boundClick = that.clickToSave.bind(that, search);
			return <div className="list-group-item" key={i}><a href={search.web_url} target="_blank">{search.headline.main}</a><br />Date article was published: {moment(search.pub_date).format("MMMM DD, YYYY")}<br /><button type="button" className="btn btn-default" style={{'float': 'right', 'marginTop': '-39px', 'background-color': 'Turquoise'}} onClick={boundClick}>Save</button></div>
		});

		this.setState({results: myResults});
	},
	
	// Here we render the function
	render: function(){
		return(

			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title text-center"><strong>Results</strong></h3>
				</div>
				<div className="panel-body">
						{this.state.results}
				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;