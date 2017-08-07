import { combineReducers } from 'redux';
import PostsReducer from '../reducers/reducer_posts';
const rootReducer = combineReducers({
  posts: PostsReducer,
  robbieConstant: "123456"

});

export default rootReducer;
