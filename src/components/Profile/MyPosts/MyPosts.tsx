import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {Component} from "react";
import {AddPostReduxForm} from "./AddPost/AddPost.tsx";
import {PostsType} from "../../../types/types";

type PropsType = {
    posts: Array<PostsType>
    addPost: (newPostBody: string) => void
}

class MyPosts extends Component<PropsType> {

    shouldComponentUpdate(nextProps: PropsType) {
        return nextProps.posts !== this.props.posts;
    }

    render() {
        let postsElements = this.props.posts.map(p => <Post message={p.message}
                                                            likesCount={p.likesCount}
                                                            key={p.id}
        />);

        let onAddPost = (values: any): void => {
            const newPostBody: string = values.newPostText;
            this.props.addPost(newPostBody);
        }

        return (
            <div className={style.postsBlock}>
                <div className={style.head}>
                    <h3>My posts</h3>
                </div>
                <div className={style.newPost}>
                    <AddPostReduxForm onSubmit={onAddPost}/>
                </div>
                <div className={style.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
}

export default MyPosts;
