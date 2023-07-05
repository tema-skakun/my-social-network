import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElements =
		props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );
	return (
		<div className={style.posts}>
			<div>
				<h3>My posts</h3>
			</div>
			<div>
				New post
			</div>
			<div>
				{ postsElements }
			</div>
		</div>
)
}

export default MyPosts;
