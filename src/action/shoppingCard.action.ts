
interface IAction {
  type: string
  payload: any
}

class CartModel {
  x: string
  constructor() {
    this.x = 'xxx'
  }
  qq() {

  }
}



const base = 'shoppingCart'

const actionTypes = {
  addToCard: `${base}/addToCard`,
  removeFromCart: `${base}/removeFromCart`
}

class ShoppingCartAction  {
  addToCart(): IAction {
    return {
      type: actionTypes.addToCard,
      payload: new CartModel()
    }
  }

  removeFromCart(index: number): IAction {
    return {
      type: actionTypes.removeFromCart,
      payload: {}
    }
  }
}

const shoppingCartAction = new ShoppingCartAction()
export { shoppingCartAction, actionTypes, CartModel }