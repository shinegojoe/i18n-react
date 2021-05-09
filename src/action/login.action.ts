
interface IAction {
  type: string
  payload?: any
}

const base = 'login'
const actionTypes = {
  checkLogin: `${base}/checkLogin`
}

class LoginAction  {
  checkLogin(): IAction {
    return {
      type: actionTypes.checkLogin,
    }
  }
}

const loginAction = new LoginAction()
export { loginAction, actionTypes }