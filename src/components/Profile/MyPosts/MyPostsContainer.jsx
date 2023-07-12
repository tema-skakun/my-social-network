import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

function mapStateToProps (state){
	return {
		profilePage: state.profilePage
	}
}

function mapDispatchToProps (dispatch) {
	return {
		updateNewPostText: (text) => dispatch(onPostChangeAC(text)),
		addPost: () => dispatch(addPostAC()),
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
