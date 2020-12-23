import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakesActions'
import iceCreamReducer from './iceCreams/iceCreamsActions'
import chocolateReducer from './chocolate/chocolate'

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
	chocolate: chocolateReducer
})

export default rootReducer
