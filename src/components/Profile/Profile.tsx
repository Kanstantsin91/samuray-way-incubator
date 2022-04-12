import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"
                    alt="beach"/>
            </div>
            <div>ava+descr</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;