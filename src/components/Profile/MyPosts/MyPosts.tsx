import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import {PostType} from "../../../index";


type MyPostsPropsType = {
    postsData: Array<PostType>
}

const MyPosts:React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.postsData.map(post => (
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>))
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