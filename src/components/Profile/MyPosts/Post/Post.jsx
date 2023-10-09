import style from './Post.module.css'
import {AVATAR_ALT} from "../../../../data/constants";
import avatar from "../../../../assets/images/female-avatar.jpg"

const Post = (props) => {
	return (
		<div className={style.item}>
			<div className={style.avatar}>
				<img alt={AVATAR_ALT}
					  src={avatar}/>
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
