import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakesActions'
import iceCreamReducer from './iceCreams/iceCreamsActions'
import chocolateReducer from './chocolate/chocolate'
import userReducer from './user/user'

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
	chocolate: chocolateReducer,
	user: userReducer
})

export default rootReducer
