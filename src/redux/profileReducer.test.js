import profileReducer, {addPostAC} from "./profileReducer";

// 1.1. test data
let state = {
    posts: [
        {id: 1, message: 'Hello world!', likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 30},
    ]
};

it(`length of posts should be incremented`, () => {
    // 1.2. test action
    let action = addPostAC("my-social-network");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`message of post should be correct`, () => {
    // 1.2. test action
    let action = addPostAC("my-social-network");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].message).toBe("my-social-network");
})

