import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'; //import the action type we assigned to this reducer
import _ from 'lodash';

export default function(state= {}, action) {
  switch (action.type) {
    case DELETE_POST:
    return _.omit(state, action.payload);

    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data }; //adds the new post to the current state

    case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id'); //extracts the id from each object to be the key and the object will be the value.

    default:
      return state;
  };

}