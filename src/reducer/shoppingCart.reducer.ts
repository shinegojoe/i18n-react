import { actionTypes, shoppingCartAction } from '../action/shoppingCard.action'


type ShoppingCartState = {
  count: number
}



const initState: ShoppingCartState = {
  count: 99
}

const addToCard = (state: ShoppingCartState, action: any) => {
  const newState = {...state}
  newState.count += 1
  return newState
}

const removeFromCard = (state: ShoppingCartState, action: any) => {

}

const actionMap = new Map()
actionMap.set(actionTypes.addToCard, addToCard)
actionMap.set(actionTypes.removeFromCart, removeFromCard)

const shoppingCartReducer = (state = initState, action: any) => {
  const fn = actionMap.get(action.type)
  if(fn) {
    return fn(state, action)
  } else {
    return state
  }
}
export default shoppingCartReducer
