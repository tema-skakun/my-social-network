import style from './Friend.module.css'

const Friend = (props) => {
    return (
        <div>
            <img src={props.avatarLink}/>
            {props.name}
        </div>
    )
}
export default Friend;
