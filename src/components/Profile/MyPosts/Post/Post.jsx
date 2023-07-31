import style from './Post.module.css'

const Post = (props) => {
	return (
		<div className={style.item}>
			<div className={style.avatar}>
				<img alt={'avatar'}
					  src='https://static.vecteezy.com/system/resources/previews/004/819/322/non_2x/female-avatar-woman-profile-icon-for-network-vector.jpg' />
			</div>
			<div className={style.msg}>
				{props.message}
			</div>
			<div className={style.like}>
				<span>like(s) </span>
				{props.likesCount}
			</div>
		</div>
	)
}

export default Post;
