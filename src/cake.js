const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
	return {
		type: BUY_CAKE
	}
}

function buyIcecream() {
	return {
		type: BUY_ICECREAM
	}
}

const initialCakesState = {
	numOfCakes: 10
}

const initialIceCreamsState = {
	numOfIceCreams: 20
}

const cakeReducer = (state = initialCakesState, action) => {
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

const iceCreamReducer = (state = initialIceCreamsState, action) => {
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

const rootReducer = combineReducers({
	cakes: cakeReducer,
	iceCreams: iceCreamReducer
})
const store = createStore(reducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe()

//npm i redux-logger
