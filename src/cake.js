const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
	return {
		type: BUY_CAKE
	}
}

//(previousState, action) => newState

const initialState = {
	numOfCakes: 10
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				numOfCakes: state.numOfCakes - 1
			}
		default:
			return state
	}
}
