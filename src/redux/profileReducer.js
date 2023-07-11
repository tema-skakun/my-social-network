const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 30},
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 2
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText,
            };
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {type: ADD_POST}
}

export const onPostChangeAC = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, postText: text}
}

export default profileReducer;