export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE_USER':
            return {
                ...state,
                users: action.payload
            }
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case 'EDIT_USER':

            let updateUsers = state.users.map(user => {
                if (user.id === action.payload.id) {
                    user = {...user, name: action.payload.name}
                }
                return user
            })
            return {

                ...state,
                users: updateUsers
            }
        default:
            return state
    }
}
