import style from './Post.module.css'
import {AVATAR_ALT} from "../../../../data/constants";
import avatar from "../../../../assets/images/female-avatar.jpg"

const Post = ({message, likesCount}) => {
	return (
		<div className={style.item}>
			<div className={style.avatar}>
				<img src={avatar} alt={AVATAR_ALT}/>
			</div>
			<div className={style.msg}>
				{message}
			</div>
			<div className={style.like}>
				<span>like(s) </span>
				{likesCount}
			</div>
		</div>
	)
}

export default Post;
