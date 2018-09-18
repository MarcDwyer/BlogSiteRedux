import axios from 'axios';

export const FETCH_POSTS = 'fetchposts';
export const CREATE_POST = 'createpost';
const url = `http://reduxblog.herokuapp.com/api/posts?key=makindemrequests`;

export function getPosts() {
  const request = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}


export function createPost(post, callback) {
  const request = axios.post(url, post)
        .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}

export const FETCH_POST = 'fetchme';

export function fetchPost(id) {
  const key = `?key=makindemrequests`;
  const newurl = `http://reduxblog.herokuapp.com/api/posts/${id}/${key}`

  const req = axios.get(newurl)

  return {
    type: FETCH_POST,
    payload: req
  }
}