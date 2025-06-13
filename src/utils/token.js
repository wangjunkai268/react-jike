const TOKEN = 'token'
const getToken = () => {
    return localStorage.getItem(TOKEN)
}
const _setToken = (token) => {
    localStorage.setItem(TOKEN, token)
}
const removeToken = () => {
    localStorage.removeItem(TOKEN)
}

export {
    getToken,
    _setToken,
    removeToken
}