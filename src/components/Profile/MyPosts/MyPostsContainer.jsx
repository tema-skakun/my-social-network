import React from "react";
import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
	let addPost = () => {
		props.dispatch(addPostAC());
	}

	let onPostChange = (text) => {
		props.dispatch(onPostChangeAC(text));
	}

	return <MyPosts state={props.state} updateNewPostText={onPostChange} addPost={addPost}/>
}

export default MyPostsContainer;
