import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/index';
import _ from 'lodash';

class MainPosts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return(
      <ul className="list-group">
      {this.renderPosts()}
      </ul>
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
