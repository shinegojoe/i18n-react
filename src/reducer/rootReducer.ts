import { combineReducers } from 'redux'
import shoppingCartReducer from './shoppingCart.reducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  login: loginReducer
})

export default rootReducer