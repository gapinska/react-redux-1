import { createStore } from 'redux'
import cakeReducer from './cakes/cakesActions'

const store = createStore(cakeReducer)

export default store
