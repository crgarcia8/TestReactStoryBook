import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const options = [
    { value: 'Creative Agency 1', label: 'Creative Agency 1' },
    { value: 'Creative Agency 2', label: 'Creative Agency 2' },
    { value: 'Creative Agency 3', label: 'Creative Agency 3' }
];
class ClientProfile extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        selectedOption: null,
        inputValue: ''
    }
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    {...field.input}
                />
                <div className="text-danger">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Client Profile</h3>
                <Field
                    label="Client Name"
                    name="client_name"
                    component={this.renderField}
                />
                <Field
                    label="Agency of Record"
                    name="agency_of_record"
                    component={this.renderField}
                />
                <label>Creative Agency(s)</label>
                <Select isMulti
                    value={this.state.selectedOption}
                    onChange={(selectedOption) => this.setState({ selectedOption })}
                    options={options}
                />
                <br />
                <button type="submit" className="btn btn-primary">Save</button>
                <Link className="btn btn-danger" to="/clientLanding">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.client_name)
        errors.client_name = 'Client Name is empty';
    if (!values.agency_of_record)
        errors.agency_of_record = 'Agency Of Record is empty';
    // if (!values.creative_agencies)
    //     errors.creative_agencies = 'Creative Agencies is empty';

    return errors;
}
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(ClientProfile);
