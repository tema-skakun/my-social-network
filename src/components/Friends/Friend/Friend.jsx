import style from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={style.friend}>
            <img src={props.avatarLink} alt={props.name}/>
            {props.name}
        </div>
    )
}
export default Friend;
