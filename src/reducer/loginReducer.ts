import { actionTypes, loginAction } from '../action/login.action'


type LoginState = {
  isLogin: number
}



const initState: LoginState = {
  isLogin: 100
}




const checkLogin = (state: LoginState, action: any) => {
  state.isLogin = state.isLogin + 1
  // const data = localStorage.getItem('myData')
  // console.log('data', data)
  // state.isLogin = state.isLogin + 1

  return state
}

const actionMap = new Map()
actionMap.set(actionTypes.checkLogin, checkLogin)

const loginReducer = (state = initState, action: any) => {
  const fn = actionMap.get(action.type)
  if(fn) {
    return fn(state, action)
  } else {
    return state
  }
}
export default loginReducer