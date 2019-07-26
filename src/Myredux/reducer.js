
const types = {
    SETUSERLOGININ: "SETUSERLOGININ",
    SETUSERLOGINOUT: "SETUSERLOGINOUT"
};

const initState = {
    empno: "",
    password:"",
    empname: "",
    isLogin: false,
    todos: [
        {
            id: 1,
            isComplete: false,
            title: "学习redux"
        },
        {
            id: 2,
            isComplete: true,
            title: "学习react"
        },
        {
            id: parseInt(Math.random() * 100000),
            isComplete: false,
            title: "学习node"
        }
    ]
};

// Here is the dispatch

const SetUserLoginIn = {
    type: types.SETUSERLOGININ
};

const SetUserLoginOut = {
    type: types.USERLOGINOUT
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SETUSERLOGININ:
            return Object.assign({}, state, { isLogin: true });
        case types.SETUSERLOGINOUT:
            return Object.assign({}, state, { isLogin: false });
        default:
            return state;
    }
}

export default reducer;
export { SetUserLoginIn, SetUserLoginOut };