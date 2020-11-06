
var initialState = {
    Loginin: false,
    status:"",
    token: "",
    msg: "",
    err: false
}

const Login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_BTN':
            return Object.assign({}, state, {
                status: action.payload.status,
                Loginin: action.payload.Loginig,
                token: action.payload.token
            })
        case 'LOGIN_ERR':
            return Object.assign({}, state, {
                err: action.payload.err,
                msg: action.payload.msg
            })
        default:
            return state
    }
}

export default Login