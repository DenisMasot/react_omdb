/*
*   A MODIFIER
*   BLOCS SERIES DIFFERENT BLOCS MOVIE
* */

var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Serie = React.createClass({
    render: function() {
        var link = "http://www.imdb.com/title/" + this.props.serie.imdbID;
        return(
            <div className="well">
                <div className="row">
                    <div className="col-md-8">
                        <h4>{this.props.serie.Title}</h4>
                        <h5>{this.props.serie.Type}</h5>
                        <ul className="list-group">
                            <li className="list-group-item">Year Released : {this.props.serie.Year}</li>
                            <li className="list-group-item">IMDB ID : {this.props.serie.imdbID}</li>
                        </ul>
                        <a className="btn btn-primary" href={link}>View on IMDB</a>
                    </div>
                    <div className="col-md-4">
                        <img className="thumbnail" src={this.props.serie.Poster} />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Serie;
