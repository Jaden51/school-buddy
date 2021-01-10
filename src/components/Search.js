import React, { Component } from 'react';
import SchoolData from './schoolData';
import { Link } from "react-router-dom";

class Search extends Component {
    state = { universityQuery: '' }

    updateUniversityQuery = event => {
        this.setState({ universityQuery: event.target.value });
    }

    render() {
        const { universityQuery } = this.state;

        const Results = SchoolData.filter(data => {
            if (data.name.toLowerCase().includes(universityQuery.toLowerCase())) {
                return data;
            }
            else if (universityQuery === '') {
                return data;
            }
        }).map(data => {
            return (
                <div>
                    <li>
                        <Link to={`/Schools/${data.name}`}>{data.name}</Link>
                    </li>
                </div>
            )
        })
        return (
            <div>
                <input
                    onChange={this.updateUniversityQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder='Search for a university...'
                    className='search'>
                </input>
                {Results}
            </div>
        )
    }
}

export default Search;