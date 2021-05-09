// import { ReactNode, FC, ComponentType } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import style from '../sass/appBar.module.sass'
import { withRouter } from "react-router-dom";
import { IPropHistory } from '../router/IRouter'
// import loginHandler from '../component/login/loginHandler'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'


const ButtonAppBar = (props: IPropHistory)=> {
  console.log('props', props)
  // loginHandler(props)
  
  const pageHandler = (page: string) => {
    console.log('pageqqq', page)
    props.history.push({
      pathname: `/${page}`
    })
  }
  
  return (
    <div className={style.appBar}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <div className={style.navContainer}>
            <Button color="inherit" onClick={()=>{
              pageHandler('shop')
            }}>shop</Button>
            <Button color="inherit" onClick={()=> {
              pageHandler('itemList')
            }}>item</Button>
            <Button color="inherit" onClick={()=> {
              pageHandler('login')
            }}>Login</Button>

            <IconButton>
              <Badge
                // overlap="circle"
                // anchorOrigin={{
                //   vertical: 'bottom',
                //   horizontal: 'right',
                // }}
                badgeContent={8}
                color="error">
                <AddShoppingCartIcon color="secondary"></AddShoppingCartIcon>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar)