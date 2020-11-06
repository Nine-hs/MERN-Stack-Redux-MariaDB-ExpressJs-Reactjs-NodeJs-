import axios from 'axios'

export const Loginbtn = (user, pass) => {
    return dispatch => {
        axios.post('http://localhost:3000/login', { username: user, password: pass }).then(
            res => {
                dispatch({ type: 'LOGIN_BTN', payload: res.data })
            }
        )
            .catch(err => {
                dispatch({ type: 'LOGIN_ERR', payload: err.response.data })
            }

            )
    }
}