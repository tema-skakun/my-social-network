import profileReducer, {addPostAC, deletePost} from "./profileReducer";

// 1.1. test data
const state = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 30},
    ]
};

it(`length of posts should be incremented`, () => {
    // 1.2. test action
    const action = addPostAC("my-social-network");
    // 2. action
    const newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`message of post should be correct`, () => {
    // 1.2. test action
    const action = addPostAC("my-social-network");
    // 2. action
    const newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].message).toBe("my-social-network");
});

it(`length of posts should be decremented`, () => {
    // 1.2. test action
    const action = deletePost(1);
    // 2. action
    const newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

it(`length of posts shouldn't be decremented if id was incorrect`, () => {
    // 1.2. test action
    const action = deletePost(1000);
    // 2. action
    const newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});
