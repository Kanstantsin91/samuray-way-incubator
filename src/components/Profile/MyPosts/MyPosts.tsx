import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "post1", likesCount: 15},
        {id: 2, message: "post2", likesCount: 20},
        {id: 3, message: "post3", likesCount: 0},
        {id: 4, message: "post4", likesCount: 25},
    ]

    const postsElements = postsData.map(post => (
        <Post key={post.id} message={post.message} likeCount={post.likesCount}/>))

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;