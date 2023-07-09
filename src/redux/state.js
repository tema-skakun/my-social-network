let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', likesCount: 10},
                {id: 2, message: "It's my first post", likesCount: 30},
            ],
            newPostText: 'tema_skakun'
        },

        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Linus',
                    avatarLink: 'https://i.pinimg.com/originals/c1/f2/5f/c1f25f71f7dbc8413da545076118e054.jpg'
                },
                {id: 2, name: 'Boris', avatarLink: 'https://99px.ru/sstorage/1/2015/11/image_11111151003517187270.jpg'},
                {
                    id: 3,
                    name: 'Paul',
                    avatarLink: 'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/224480/P5jfvm3cJ7RzrPVLeo4kHA.jpg'
                },
                {
                    id: 4,
                    name: 'Evgeniy',
                    avatarLink: 'https://cs14.pikabu.ru/post_img/2022/05/23/5/1653287994258846794.jpg'
                },
                {id: 5, name: 'Anton', avatarLink: 'https://bipbap.ru/wp-content/uploads/2017/11/5_ja7.jpg'},
                {
                    id: 6,
                    name: 'Alexander',
                    avatarLink: 'https://proprikol.ru/wp-content/uploads/2019/08/kartinki-volk-iz-nu-pogodi-19.jpg'
                },
                {id: 7, name: 'Pablo', avatarLink: 'https://souzmult.ru/api/images/character-5d75efa0dfe23.svg'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Wazzzaaa?'},
                {id: 5, message: 'go dota'},
                {id: 6, message: 'Whatever'},
                {id: 7, message: 'bb gl'}
            ],
            newMsgText: 'write your message',
        },

        sidebarPage: {
            friends: [
                {id: 1, name: 'Flash', avatarLink: 'https://avatarfiles.alphacoders.com/257/257694.jpg'},
                {
                    id: 2,
                    name: 'Batman',
                    avatarLink: 'https://i.pinimg.com/474x/d7/d7/0e/d7d70e9056d2b0d46463f4ca5e1ea67b.jpg'
                },
                {
                    id: 3,
                    name: 'Spider-Man',
                    avatarLink: 'https://assets.reedpopcdn.com/spider-man-walkthrough-guide-5014-1537780065472.jpg/BROK/thumbnail/1200x1200/quality/100/spider-man-walkthrough-guide-5014-1537780065472.jpg'
                },
                {id: 4, name: 'Wonder Woman', avatarLink: 'https://avatarfiles.alphacoders.com/116/116579.jpg'},
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state was change');
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 2
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(postText) {
        this._state.profilePage.newPostText = (postText);
        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMsg = {
            id: 8,
            message: this._state.dialogsPage.newMsgText
        };
        this._state.dialogsPage.messages.push(newMsg);
        this._state.dialogsPage.newMsgText = '';
        this._callSubscriber(this._state);
    },

    updateNewMsgText(msgText) {
        this._state.dialogsPage.newMsgText = (msgText);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;//патерн observer (наблюдатель)
    },

}

window.store = store;

export default store;