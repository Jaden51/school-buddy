import React, { Component } from 'react';
import SchoolData from './schoolData';
import { List } from "antd";
import { Input } from 'antd';
import { Link } from "react-router-dom";

class Search extends Component {
    state = { universityQuery: '' }

    updateUniversityQuery = event => {
        this.setState({ universityQuery: event.target.value });
    }

    render() {
        const { universityQuery } = this.state;

        const results = SchoolData.filter(data => {
            if (universityQuery.length > 0 && data.name.toLowerCase().includes(universityQuery.toLowerCase())) {
                return true;
            }
            return false;
        });

        return (
            <div>
                <Input
                    onChange={this.updateUniversityQuery}
                    placeholder='Search for a university...'
                    className='search'>
                </Input>
                { results.length > 0 && (
                    <List bordered>
                        {results.map((result) => (
                            <List.Item>
                                <Link to={`/Schools/${result.name}`}>{result.name}</Link>
                            </List.Item>
                        ))}

                    </List>
                )}
            </div>
        )
    }
}

export default Search;
