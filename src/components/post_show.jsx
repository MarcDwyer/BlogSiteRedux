import React, { Component } from 'react'
import {fetchPost} from '../actions/index';
import {connect} from 'react-redux';

class PostShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id)
    }
    render() {
        const {post} = this.props;

        if(!post) {
            return <div>Loading...</div>
        }
        return (
        <div>
            <h3>{post.title}</h3>
            <h6>{post.categories}</h6>
            <p>{post.content}</p>
        </div>
        );
    }
}
function getProps(state, ownProps) {
    return {
        post: state.posts[ownProps.match.params.id]
    }
}

export default connect(getProps, {fetchPost})(PostShow);