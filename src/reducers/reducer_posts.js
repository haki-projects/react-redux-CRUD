import { FETCH_POSTS } from '../actions'; //import the action type we assigned to this reducer
import _ from 'lodash';
export default function(state= {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id'); //extracts the id from each object to be the key and the object will be the value.

    default:
      return state;
  }

}