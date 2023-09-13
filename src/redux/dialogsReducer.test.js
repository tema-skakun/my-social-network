import dialogsReducer, {addDialog, addMessageAC, deleteDialog, deleteMessage} from "./dialogsReducer";

// 1.1. test data
let state = {
    dialogs: [
        {
            id: 1,
            name: 'Linus',
            avatarLink: 'https://i.pinimg.com/originals/c1/f2/5f/c1f25f71f7dbc8413da545076118e054.jpg'
        },
        {
            id: 2,
            name: 'Boris',
            avatarLink: 'https://99px.ru/sstorage/1/2015/11/image_11111151003517187270.jpg'
        },
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
        {
            id: 5,
            name: 'Anton',
            avatarLink: 'https://bipbap.ru/wp-content/uploads/2017/11/5_ja7.jpg'
        },
        {
            id: 6,
            name: 'Alexander',
            avatarLink: 'https://proprikol.ru/wp-content/uploads/2019/08/kartinki-volk-iz-nu-pogodi-19.jpg'
        },
        {
            id: 7,
            name: 'Pablo',
            avatarLink: 'https://souzmult.ru/api/images/character-5d75efa0dfe23.svg'
        },
        {
            id: 8,
            name: 'Ulyana',
            avatarLink: 'https://img.championat.com/s/1350x900/news/big/c/d/entuziast-pokazal-robota-zajca-iz-nu-pogodi-v-vide-bossa-iz-atomic-heart_1681573670651118554.jpg'
        },

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
};


it(`length of messages should be incremented`, () => {
    // 1.2. test action
    let action = addMessageAC("my-social-network");
    // 2. action
    let newState = dialogsReducer(state, action);
    // 3. expectation
    expect(newState.messages.length).toBe(8);
});

it(`message should be correct`, () => {
    // 1.2. test action
    let action = addMessageAC("my-social-network");
    // 2. action
    let newState = dialogsReducer(state, action);
    // 3. expectation
    expect(newState.messages[7].message).toBe("my-social-network");
});

it(`length of messages should be decremented`, () => {
    // 1.2. test action
    let action = deleteMessage(1);
    // 2. action
    let newState = dialogsReducer(state, action);
    // 3. expectation
    expect(newState.messages.length).toBe(6);
});

it(`length of messages shouldn't be decremented if id was incorrect`, () => {
    // 1.2. test action
    let action = deleteMessage(1000);
    // 2. action
    let newState = dialogsReducer(state, action);
    // 3. expectation
    expect(newState.messages.length).toBe(7);
});

it(`length of dialogs should be incremented`, () => {
    // 1.2. test action
    let action = addDialog(9, "Artem", "https://avatanplus.com/files/resources/original/583a1a320fd46158a2f65391.png");
    // 2. action
    let newState = dialogsReducer(state, action);
    // 3. expectation
    expect(newState.dialogs.length).toBe(9);
});

it(`length of dialogs should be decremented`, () => {
    // 1.2. test action
    let action = deleteDialog(1);
    // 2. action
    let newState = dialogsReducer(state, action);
    // 3. expectation
    expect(newState.dialogs.length).toBe(7);
});

it(`length of dialogs shouldn't be decremented if id was incorrect`, () => {
    // 1.2. test action
    let action = deleteDialog(1000);
    // 2. action
    let newState = dialogsReducer(state, action);
    // 3. expectation
    expect(newState.dialogs.length).toBe(8);
});