import { Reducer } from 'redux';
import { PostsState, PostsActionTypes } from './types';

// Type-safe initialState!
const initialState: PostsState = {
    postList: [],
    post: undefined,
    errors: undefined,
    loading: false,
    status: undefined
}

// everything will remain type-safe.
const reducer: Reducer<PostsState> = (state = initialState, action) => {

    //console.log(action);

    switch (action.type) {
        case PostsActionTypes.CREATE_REQUEST ||
            PostsActionTypes.FETCH_REQUEST ||
            PostsActionTypes.FETCH_REQUEST_BY_ID ||
            PostsActionTypes.UPDATE_REQUEST_BY_ID:
            return { ...state, loading: true }

            case PostsActionTypes.CREATE_SUCCESS: 
            return { 
                  ...state, loading: false, 
                  postList: [...state.postList, action.payload ], 
                  post: action.payload 
            }

        case PostsActionTypes.FETCH_SUCCESS:
            console.log('Execution flow 7: reducer Switch Case');
            console.log(action);
            return { ...state, loading: false, postList: action.payload }

        case PostsActionTypes.FETCH_ERROR:
            return { ...state, loading: false, errors: action.payload }

        case PostsActionTypes.FETCH_SUCCESS_BY_ID:
            console.log(action.payload);
            return { ...state, loading: false, post: action.payload }

        case PostsActionTypes.UPDATE_SUCCESS_BY_ID:
            // in this if/else check for status code.. json placeholder doesn't give it
            if (action.payload) {
                return { ...state, loading: false, status: true }
            } else {
                return { ...state, loading: false, status: false }
            }

        default:
            return state;
    }
}


// Instead of using default export, we use named exports. 
// That way we can group these exports
// inside the `index.js` folder.
export { reducer as postsReducer }