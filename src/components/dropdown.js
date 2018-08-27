import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import { colourOptions } from './data';

const filterColors = (inputValue) =>
    colourOptions.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );

const promiseOptions = inputValue =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(filterColors(inputValue));
        }, 1000);
    });
    
const options = [
    { value: 'test 1', label: 'test 1' },
    { value: 'test 2', label: 'test 2' },
    { value: 'test 3', label: 'test 3' }
];

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        selectedOption: null,
        inputValue: ''
    }
    loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterColors(inputValue));
        }, 1000);
    };
    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };

    // handleChange = (selectedOption) => {
    //     this.setState({ selectedOption });
    //     console.log(`Option selected:`, selectedOption);
    // }
    render() {
        // const { selectedOption } = this.state;
        return (
            <div>
                <Link to={`/`}>Volver a Login</Link>

                <br />
                <br />
                <br />
                <br />
                <p>this is a Select simple: </p>
                <Select isMulti
                    value={this.state.selectedOption}
                    onChange={(selectedOption) => this.setState({ selectedOption })}
                    options={options}
                />
                <br />
                <br />
                <p>this is a Select with Async data: </p>
                <AsyncSelect
                    cacheOptions
                    loadOptions={promiseOptions}
                    defaultOptions
                    onInputChange={this.handleInputChange}
                />
            </div>
        )
    }
}