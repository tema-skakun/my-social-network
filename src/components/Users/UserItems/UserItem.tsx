import style from './UserItem.module.css'
import {NavLink} from "react-router-dom";
import {FOLLOW_BUTTON, PROFILE_PATH, UNFOLLOW_BUTTON} from "../../../data/constants";
import {Button} from "antd";
import {FC} from "react";

type PropsType = {
    id: number
    fullName: string
    followed: boolean
    status: string
    photoUrl: string
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

const UserItem: FC<PropsType> = ({
                                     id,
                                     fullName,
                                     followed,
                                     status,
                                     photoUrl,
                                     follow,
                                     unfollow,
                                     followingInProgress,
                                 }) => {
    return (
        <div className={style.user}>
            <NavLink to={PROFILE_PATH + '/' + id}>
                <img src={photoUrl} alt={fullName}/>
            </NavLink>
            <div>
                <div>
                    {fullName}
                </div>
                <div>
                    {followed
                        ? <Button
                            disabled={followingInProgress.some((idI: number) => idI === id)}
                            onClick={() => {
                                unfollow(id);
                            }}>
                            {UNFOLLOW_BUTTON}
                        </Button>
                        : <Button
                            disabled={followingInProgress.some((idI: number) => idI === id)}
                            onClick={() => {
                                follow(id);
                            }}>
                            {FOLLOW_BUTTON}
                        </Button>}
                </div>
                <div>
                    {status}
                </div>
            </div>
        </div>
    )
}
export default UserItem;
