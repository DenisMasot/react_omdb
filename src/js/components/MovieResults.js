var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie.js');
var Serie = require('./Serie.js');

var MovieResults = React.createClass({
  render: function() {
    return(
      <div>
        <h3 className="text-center">Results</h3>
        {
            this.props.movies.map(function(movie, i){
                if(movie.Type == "series") {
                    return(
                        <Serie serie={movie} key={i}/>
                    )
                }
                else if(movie.Type == "movie"){
                    return(
                        <Movie movie={movie} key={i} />
                    )
                }
          })
        }
      </div>
    )
  }
});

module.exports = MovieResults;
