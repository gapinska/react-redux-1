const BUY_CHOCOLATE = 'BUY_CHOCOLATE'

export const buyChocolate = () => {
	return {
		type: BUY_CHOCOLATE
	}
}

const initialState = {
	numOfChocolates: 20
}

const chocolateReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CHOCOLATE:
			return {
				...state,
				numOfChocolates: state.numOfChocolates - 1
			}
		default:
			return state
	}
}

export default chocolateReducer
