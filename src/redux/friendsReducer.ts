const initialState = {
    friends: [
        {
            id: 1,
            name: 'Flash',
            status: null,
            photos: 'https://avatarfiles.alphacoders.com/257/257694.jpg',
            followed: true,
        },
        {
            id: 2,
            name: 'Batman',
            status: null,
            photos: 'https://i.pinimg.com/474x/d7/d7/0e/d7d70e9056d2b0d46463f4ca5e1ea67b.jpg',
            followed: true,
        },
        {
            id: 3,
            name: 'Spider-Man',
            status: null,
            photos: 'https://assets.reedpopcdn.com/spider-man-walkthrough-guide-5014-1537780065472.jpg/BROK/thumbnail/1200x1200/quality/100/spider-man-walkthrough-guide-5014-1537780065472.jpg',
            followed: true,
        },
        {
            id: 4,
            name: 'Wonder Woman',
            status: null,
            photos: 'https://avatarfiles.alphacoders.com/116/116579.jpg',
            followed: true,
        },
    ]
};

export type InitialStateType = typeof initialState;

const friendsReducer = (state = initialState, action: any): InitialStateType => {
    return state;
}
export default friendsReducer;
