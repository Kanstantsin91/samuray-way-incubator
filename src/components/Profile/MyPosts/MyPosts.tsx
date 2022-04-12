import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={"post1"} likeCount={15}/>
                <Post message={"post2"} likeCount={20}/>
                <Post message={"post3"}/>
            </div>
        </div>
    )
}

export default MyPosts;