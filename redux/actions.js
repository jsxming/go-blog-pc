export const actionTypes = {
    SET_TOKEN: 'SET_TOKEN',
    DELETE_TOKEN: 'DELETE_TOKEN',
    DO_LOGIN: "DO_LOGIN",
    SET_USER: "SET_USER",
    SET_TYPES:"SET_TYPES"
}


function createAction(type) {
    return (payload) => {
        return {
            type,
            payload
        }
    }
}


export const setUser = createAction(actionTypes.SET_USER)
export const setToken = createAction(actionTypes.SET_TOKEN)
export const removeToken = createAction(actionTypes.DELETE_TOKEN)
export const setTypes = createAction(actionTypes.SET_TYPES)

