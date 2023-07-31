import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <div className={style.head}>
                <h3>My posts</h3>
            </div>
            <div className={style.newPost}>
                New post
				<textarea
                    placeholder='enter your post text...'
                    onChange={onPostChange}
                    value={props.profilePage.newPostText}/>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
