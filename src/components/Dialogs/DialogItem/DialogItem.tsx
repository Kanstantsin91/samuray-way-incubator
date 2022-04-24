import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

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

export default DialogItem;
