import React from "react";
import ReactDOM from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    };
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    };
    handleTermChange(event) {
        this.setState({term: event.target.value});
    };
    handleLocationChange(event) {
        this.setState({location: event.target.value});
    };
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    };
    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    };
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOptions => {
            const sortByOptionValue = this.sortByOptions[sortByOptions];
            return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}>{sortByOptions}</li>;
        });
    };
    render() {
      return (
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
            <ul>
            {this.renderSortByOptions()}
            </ul>
        </div>
        <div className="SearchBar-fields">
            <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
            <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
            <a onClick={this.handleSearch}>Let's Go</a>
        </div>
        </div>
      );
    };
};

export default SearchBar;