// have store/posts/actions.ts file with the following code 
// let's work with handling the resp and patching it up the reducer 
// these functions with action types only helps reducers capture them in switch case 

import { action } from 'typesafe-actions'
import { PostsActionTypes, Post } from './types';

export const fetchRequest = () => {
    console.log("Flow 1:Exec: HIT Action");
    return action(PostsActionTypes.FETCH_REQUEST)
}

export const createRequest = (post: Post) => {
    console.log(post);
    return action(PostsActionTypes.CREATE_REQUEST, post)
  }
  export const createSuccess = (data: Post) => {
    console.log(data);
    return action(PostsActionTypes.CREATE_SUCCESS, data);
  }


// for post details 
export const fetchRequestById = (postId: string) => action(PostsActionTypes.FETCH_REQUEST_BY_ID, postId)
export const fetchSuccessById = (data: Post) => action(PostsActionTypes.FETCH_SUCCESS_BY_ID, data);

// for post details update
export const updateRequestById = (post: Post) => action(PostsActionTypes.UPDATE_REQUEST_BY_ID, post)
export const updateSuccessById = (data: Post) => action(PostsActionTypes.UPDATE_SUCCESS_BY_ID, data);

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchSuccess = (data: Post[]) => {
    console.log('Execution Flow 6 :FETCH_SUCCESS');
    return action(PostsActionTypes.FETCH_SUCCESS, data);
}
export const fetchError = (message: string) => action(PostsActionTypes.FETCH_ERROR, message)
