import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class NewPost extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                name="title"
                label='Title'
                component={this.renderList}
                />
                <Field 
                name="categories"
                label='Categories'
                component={this.renderList}
                />
                 <Field 
                name="content"
                label='Post Content'
                component={this.renderList}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }

    renderList(field) {
        const className = field.meta.touched && field.meta.error ? 'has-danger' : '';
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input {...field.input}
                type="text"
                className="form-control"
                />
                <div className="text-help">
                {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }
    onSubmit(values) {
        console.log(values)
    }
}
function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter a category";
    }
    if (!values.content) {
        errors.content = "Enter Content";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(NewPost);