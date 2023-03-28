import style from './Dialogs.module.css'
import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<div className={style.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return <div className={style.message}>{props.message}</div>
}

// simulation of receiving data from the server
let dialogs = [
	{id: 1, name: 'Linus'},
	{id: 2, name: 'Boris'},
	{id: 3, name: 'Paul'},
	{id: 4, name: 'Evgeniy'},
	{id: 5, name: 'Anton'},
	{id: 6, name: 'Alexander'},
	{id: 7, name: 'Pablo'}
]

let messages = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How are you?'},
	{id: 3, message: 'Yo'},
	{id: 4, message: 'Wazzzaaa?'},
	{id: 5, message: 'go dota'},
	{id: 6, message: 'Whatever'},
	{id: 7, message: 'bb gl'}
]

let dialogsElements = dialogs.map( (d) => <DialogItem name={d.name} id={d.id} /> );

let messagesElements = messages.map( (m) => <Message message={m.message} /> );

const Dialogs = (props) => {
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
