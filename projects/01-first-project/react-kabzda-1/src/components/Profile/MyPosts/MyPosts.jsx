import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={style.posts}>
			<div>
				<h3>My posts</h3>
			</div>
			<div>
				New post
			</div>
			<div className={style.posts}>
				<Post message='Hello world!'likesCount='15'/>
				<Post message="It's my first post" likesCount='20'/>
			</div>
		</div>
	)
}

export default MyPosts;
