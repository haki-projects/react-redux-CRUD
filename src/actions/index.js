import axios from 'axios';
export const FETCH_POST = 'fetch_post';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=1906'
 //AJAX request to get posts
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, backToIndex) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
                  .then( () => backToIndex()); //After we get a request back, send the callback()
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, backToIndex) {
   const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
          .then( () => backToIndex());
   return {
     type: DELETE_POST,
     payload: id
   };
}