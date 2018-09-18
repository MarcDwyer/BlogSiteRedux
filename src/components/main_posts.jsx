import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/index';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class MainPosts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return(
      <div className="container">
      <Link to="/posts/new" className="btn btn-primary centerme">Add Post</Link>
      <ul className="list-group">
      {this.renderPosts()}
      </ul>
      </div>
    );
  }
 renderPosts() {
   return _.map(this.props.posts, post => {
     return (
      <li key={post.id} className="list-group-item">
      {post.title}
      </li>
     );
   })
 }
}
function PostsProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(PostsProps, { getPosts })(MainPosts);
