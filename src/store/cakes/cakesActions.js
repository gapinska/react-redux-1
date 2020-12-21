const BUY_CAKE = 'BUY_CAKE'

export const buyCake = () => {
	return {
		type: BUY_CAKE
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
				numOfCakes: state.numOfCakes - 1
			}
		default:
			return state
	}
}

export default cakeReducer
