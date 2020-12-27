import axios from 'axios'
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST
	}
}

export const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users
	}
}

export const fetchUsersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error
	}
}

const initialState = {
	loading: false,
	users: [],
	error: ''
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true
			}
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
				error: ''
			}
		case FETCH_USERS_FAILURE:
			return {
				...state,
				loading: false,
				users: [],
				error: action.payload
			}
		default:
			return state
	}
}

export const fetchUsers = () => {
	return (dispatch) => {
		dispatch(fetchUsersRequest)
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				const users = response.data
				dispatch(fetchUsersSuccess(users))
			})
			.catch((error) => {
				const errorMsg = error.message
				dispatch(fetchUsersFailure(errorMsg))
			})
	}
}

export default userReducer
