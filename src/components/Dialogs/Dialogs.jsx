import style from './Dialogs.module.css'
import React from "react";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} ava={d.avatarLink} /> );
	let messagesElements= props.state.messages.map( m => <Message message={m.message} /> );

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>
				{ dialogsElements }
			</div>
			<div className={style.messages}>
				{ messagesElements }
			</div>
		</div>
	)
}

export default Dialogs;
