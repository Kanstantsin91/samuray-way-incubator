import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (<div>
            <div>
                <img className={classes.backgroundImg}
                     src="https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"
                     alt="beach"/>
            </div>
            <div className={classes.descriptionBlock}>ava+descr</div>
        </div>
    )
}

export default ProfileInfo;