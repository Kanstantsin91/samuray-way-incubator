import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={classes.backgroundImg}
                     src="https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"
                     alt="beach"/>
            </div>
            <div>ava+descr</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;