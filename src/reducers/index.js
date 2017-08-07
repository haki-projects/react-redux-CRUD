import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from '../reducers/reducer_posts';


const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer //NOTE: make sure that the keyword is 'form' as this keyword is used within redux-form

});

export default rootReducer;
