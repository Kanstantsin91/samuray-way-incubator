import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../index";


const Dialogs:React.FC<DialogsPageType> = (props) => {

    const dialogsElements = props.dialogsData.map(dialog => (
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>));
    const messagesElements = props.messagesData.map(message => (<Message key={message.id} message={message.message}/>));

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