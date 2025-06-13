import { getToken, removeToken, _setToken, request } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'
const getUserToken = (data) => {
    return async (dispatch) => {
        const { data: { data: { token } } } = await request.post('/authorizations', data)
        dispatch(setToken(token))
    }
}
const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || ''
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        clearToken(state) {
            state.token = ''
            removeToken()
        }
    }
})
const { setToken, clearToken }  = userStore.actions
export { setToken, getUserToken, clearToken }
export default userStore.reducer