import axios from 'axios';

export const FETCH_POSTS = 'fetchposts';

export function getPosts() {
  const url = `http://reduxblog.herokuapp.com/api/posts?key=makindemrequests`;
  const request = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
