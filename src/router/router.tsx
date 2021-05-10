import { Route } from "react-router-dom"
import Page from '../component/page/page'
// import Project from '../component/project/project'
import Main from '../component/home/main'
import Row from '../component/row/row'

const AppBarRouter = () => {
  return (
    <div>
      {/* <Route exact path='/' component={Home} />
      <Route path='/shop' component={Page1} />
      <Route path='/itemList' component={ItemPage} />
      <Route path='/item' component={Item}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/signUp' component={SignUp}></Route>
      <Route path='/forgetPwd' component={ForgetPassword}></Route> */}
      <Route path='/page' component={Page}></Route>
      <Route path='/project' component={Main}></Route>
      <Route path='/row' component={Row}></Route>




    </div>
  )
}

export { AppBarRouter }