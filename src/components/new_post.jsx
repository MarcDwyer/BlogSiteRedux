import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';

class NewPost extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form className="form-group" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                <div className="hello">
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
                </div>
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
        this.props.createPost(values, () => {
            this.props.history.push('/');
        })
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
})(
    connect(null, {createPost})(NewPost));