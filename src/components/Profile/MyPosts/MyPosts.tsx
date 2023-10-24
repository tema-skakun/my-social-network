import {FC} from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.tsx';
import {AddPostReduxForm} from './AddPost/AddPost.tsx';
import {PostsType} from '../../../types/types';

type PropsType = {
    posts: Array<PostsType>;
    addPost: (newPostBody: string) => void;
};

const MyPosts: FC<PropsType> = ({ posts, addPost }) => {
    const onAddPost = (values: any): void => {
        const newPostBody: string = values.newPostText;
        addPost(newPostBody);
    };

    const postsElements = posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id} />
    ));

    return (
        <div className={style.postsBlock}>
            <div className={style.head}>
                <h3>My posts</h3>
            </div>
            <div className={style.newPost}>
                <AddPostReduxForm onSubmit={onAddPost} />
            </div>
            <div className={style.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
