const BUY_CAKE = 'BUY_CAKE'

export const buyCake = (number = 1) => {
	return {
		type: BUY_CAKE,
		payload: number
	}
}

const initialState = {
	numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - action.payload
			}
		default:
			return state
	}
}

export default cakeReducer
