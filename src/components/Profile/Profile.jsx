import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';


const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<div className={style.newPost}>
				<textarea></textarea>
			</div>
			<div className={style.newPost}>
				<button>Add post</button>
			</div>
			<div>
				<MyPosts posts={props.state.posts} />
			</div>
		</div>
	)
}

export default Profile;
