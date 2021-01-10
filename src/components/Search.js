import React, { Component } from 'react';

class Search extends Component {
    state = { universityQuery: '' }

    updateUniversityQuery = event => {
        this.setState({ universityQuery: event.target.value });
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {

        }
    }
    
    render() {
        return (
            <div>
                <input
                    onChange={this.updateUniversityQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder='Search for a university...'
                    className='search'></input>
            </div>
        )
    }
}

export default Search;