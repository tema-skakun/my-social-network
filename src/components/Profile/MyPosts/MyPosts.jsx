import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {AddPostReduxForm} from "./AddPost/AddPost";

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message}
                                                               likesCount={p.likesCount}
                                                               key={p.id}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.postsBlock}>
            <div className={style.head}>
                <h3>My posts</h3>
            </div>
            <AddPostReduxForm onSubmit={onAddPost} className={style.newPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
