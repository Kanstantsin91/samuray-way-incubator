import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}


const DialogItem = (props: DialogItemPropsType) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}
                     className={(navData) => navData.isActive ? classes.active : ''}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return <div className={classes.message}>{props.message}</div>
}


const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: "Bill"},
        {id: 2, name: "Bob"},
        {id: 3, name: "Max"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Peter"}
    ]

    const messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
    ]


    const dialogsElements = dialogsData.map(dialog => (
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>));
    const messagesElements = messagesData.map(message => (<Message key={message.id} message={message.message}/>));

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>)
}

export default Dialogs;