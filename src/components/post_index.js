import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'; //import the Action function we will be using
import _ from 'lodash';


class PostsIndex extends Component {

 componentDidMount() {
    this.props.fetchPosts();
}
  renderPosts() {
     return  _.map(this.props.posts, post => {
      return ( <li className='list-group-item' key={post.id}>
       {post.title}
        </li>
     );
      });
  }

  render() {
    return(
      <div>
        <h3> Posts </h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}
/**
 * We call mapStateToProps any time we want to connect a piece of application state to the props
 * of a container component. In this case, we are mapping the application state object 'posts' to
 * this component's (PostsIndex) props.
 * @param {*} state
 */
function mapStateToProps(state) {
  return {posts: state.posts};
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);