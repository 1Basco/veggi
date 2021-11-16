/* eslint-disable import/no-anonymous-default-export */
export default (users = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload;
        case 'FETCH_USER':
            return users.filter(user => user.id === action.payload);
        //delete user
        case 'DELETE_USER':
            return users.filter(user => user.id !== action.payload);
        default:
            return users;
    }
}