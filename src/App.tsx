// import './App.css';
import AppBar from './component/appBar'
import { AppBarRouter } from './router/router'
import { useSelector, useDispatch } from "react-redux"
import { loginAction } from './action/login.action'
import { useEffect } from 'react'
import Project from './component/project/project'


function App() {

  
  return (
    <div>
      {/* <Project></Project> */}
      {/* <AppBar></AppBar> */}
      <AppBarRouter></AppBarRouter>
    </div>
  );
}

export default App;
