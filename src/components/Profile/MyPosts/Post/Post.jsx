import style from './Post.module.css'

const Post = (props) => {
	return (
		<div className={style.item}>
			<img alt={'avatar'}
				 src='https://static.vecteezy.com/system/resources/previews/004/819/322/non_2x/female-avatar-woman-profile-icon-for-network-vector.jpg' />
			{props.message}
			<div>
				<span>like</span> {props.likesCount}
			</div>
		</div>
	)
}

export default Post;
