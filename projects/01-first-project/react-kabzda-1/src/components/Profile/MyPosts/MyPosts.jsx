import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			<div>
				My posts
			</div>
			<div>
				New post
			</div>
			<div className={style.posts}>
				<Post />
				<Post />
			</div>
		</div>
	)
}

export default MyPosts;
