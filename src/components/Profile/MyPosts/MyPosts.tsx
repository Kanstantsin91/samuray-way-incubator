import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.addPostBlock}>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button className={classes.addPostBtn}>Add post</button>
                </div>
            </div>
            <div>
                <Post message={"post1"} likeCount={15}/>
                <Post message={"post2"} likeCount={20}/>
                <Post message={"post3"} likeCount={0}/>
            </div>
        </div>
    )
}

export default MyPosts;