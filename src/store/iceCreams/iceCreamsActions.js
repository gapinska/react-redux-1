const BUY_ICECREAM = 'BUY_ICECREAM'

export const buyIceCream = () => {
	return {
		type: BUY_ICECREAM
	}
}

const initialState = {
	numOfIceCreams: 10
}

const iceCreamReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1
			}
		default:
			return state
	}
}

export default iceCreamReducer
