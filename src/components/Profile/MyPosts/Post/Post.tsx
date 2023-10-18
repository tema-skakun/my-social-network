import {FC} from "react";
import style from './Post.module.css'
import {AVATAR_ALT, LIKE_TITLE} from "../../../../data/constants.ts";
import avatar from "../../../../assets/images/female-avatar.jpg"

export type PropsType = {
	message: string,
	likesCount: number
}

const Post: FC<PropsType> = ({message, likesCount}) => {
	return (
		<div className={style.item}>
			<div className={style.avatar}>
				<img src={avatar} alt={AVATAR_ALT}/>
			</div>
			<div className={style.msg}>
				{message}
			</div>
			<div className={style.like}>
				<span>{LIKE_TITLE}</span>
				{likesCount}
			</div>
		</div>
	)
}

export default Post;
