import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}


const DialogItem = (props: DialogItemType) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}
                     className={(navData) => navData.isActive ? classes.active : ''}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return <div className={classes.message}>{props.message}</div>
}


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem id={1} name={"Bill"}/>
                <DialogItem id={2} name={"Bob"}/>
                <DialogItem id={3} name={"Max"}/>
                <DialogItem id={4} name={"Sasha"}/>
                <DialogItem id={5} name={"Victor"}/>
                <DialogItem id={6} name={"Peter"}/>
            </div>
            <div className={classes.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you?"}/>
                <Message message={"Yo"}/>
            </div>
        </div>)
}

export default Dialogs;