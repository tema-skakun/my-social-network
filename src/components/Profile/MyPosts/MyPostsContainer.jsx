import {addPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

function mapStateToProps (state){
	return {
		profilePage: state.profilePage
	}
}
function mapDispatchToProps (dispatch) {
	return {
		addPost: (newPostBody) => dispatch(addPostAC(newPostBody)),
	}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;
