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
      <ul>
      {this.renderPosts()}
      </ul>
      </div>
    );
  }
 renderPosts() {
   return _.map(this.props.posts, post => {
    const pather = `/posts/${post.id}`;
     return (
      <li key={post.id} className="list-group-item">
      <h4>{post.title}</h4>
      <h6>{post.categories}</h6>
      <p>{post.content}</p>
      <Link to={pather} className="btn btn-danger">Visit Post</Link>
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
