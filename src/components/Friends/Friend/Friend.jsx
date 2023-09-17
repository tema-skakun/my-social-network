import style from './Friend.module.css'

const Friend = ({avatarLink, name}) => {
    return (
        <div className={style.friend}>
            <img src={avatarLink} alt={name}/>
            {name}
        </div>
    )
}
export default Friend;
