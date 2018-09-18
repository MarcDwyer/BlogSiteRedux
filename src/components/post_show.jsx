import React, { Component } from 'react'
import {fetchPost, deletePost} from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
            <button className="btn btn-danger pull-xs-right" onClick={this.onDelete.bind(this)}> Delete </button>
            <h3>{post.title}</h3>
            <h6>{post.categories}</h6>
            <p>{post.content}</p>
            <Link to="/" className="btn btn-warning">Go back</Link>
        </div>
        );
    }
    onDelete() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
}
function getProps({posts}, ownProps) {
    return {
        post: posts[ownProps.match.params.id]
    }
}

export default connect(getProps, {fetchPost, deletePost})(PostShow);