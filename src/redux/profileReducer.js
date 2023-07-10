const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 2
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = (action.postText);
            return state;
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