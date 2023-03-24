import style from './Post.module.css'

const Post = () => {
	return (
		<div className={style.item}>
			<img src='https://static.vecteezy.com/system/resources/previews/004/819/322/non_2x/female-avatar-woman-profile-icon-for-network-vector.jpg'/>
			Post 1
			<div>
				<span>like</span>
			</div>
		</div>
	)
}

export default Post;
