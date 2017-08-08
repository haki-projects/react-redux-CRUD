import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
   /**
    * this.props.match.params.id is given to us as a helper method from React Router. it allows us to
    * access the 'id' from the url. it does not have to be 'id' specifically. if the url was
    * http://haki.io/users/:id/:lastName we could access the last name by using this.props.match.params.lastName
    */
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const { post } = this.props; //destructuring the post off of props so we dont have to type this.props.post all day...
    if(!post) { //Make sure the post actually exists before displaying anything.
      return <div>Loading....</div>;
    }
    return(



      <div>
        <div>
        <Link to='/' className='btn btn-primary'>Back</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        > Delete Post </button>
        </div>

          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
      </div>
    );
  }
}

/**
 *
 * @param {*} posts is JUST the posts object on the application state.
 * @param {*} ownProps Has all the props that are headed to this component
 */
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }; //this allows us to use the this.props to get the id from the react router helper

}
/**
 * Connects the fetchPost action creator to the PostsShow component
 * This adds fetchPost to props ( so we can say this.props.fetchPost() within our component)
 * When we call this.props.fetchPost(), it fetches the new set of posts from the remote API. it then
 * passes those posts to a reducer. The reducer then adds the posts to the current set of posts on the
 * Application state object. Once the new posts have been added to the application state object, we can
 * access the information via this.state.
 */
export default  connect(mapStateToProps, { fetchPost, deletePost }) (PostsShow);