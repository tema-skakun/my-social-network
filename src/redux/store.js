import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./friendsReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', likesCount: 10},
                {id: 2, message: "It's my first post", likesCount: 30},
            ],
            newPostText: ""
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
            newMsgText: "",
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
                {
                    id: 4,
                    name: 'Wonder Woman',
                    avatarLink: 'https://avatarfiles.alphacoders.com/116/116579.jpg'
                },
            ]
        }
    },

    _callSubscriber() {
        console.log('state was change');
    },

    subscribe(observer) {
        this._callSubscriber = observer;//патерн observer (наблюдатель)
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;
