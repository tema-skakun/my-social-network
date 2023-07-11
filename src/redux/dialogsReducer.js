const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';

let initialState = {
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
        {id: 7, message: 'bb gl'},
    ],
    newMsgText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 8,
                message: state.newMsgText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMsgText: '',
            };
        case UPDATE_NEW_MSG_TEXT:
            return {
                ...state,
                newMsgText: action.msgText,
            };
        default:
            return state;
    }
}

export const addMessageAC = () => {
    return {type: ADD_MESSAGE}
}

export const onMsgChangeAC = (text) => {
    return {type: UPDATE_NEW_MSG_TEXT, msgText: text}
}

export default dialogsReducer;