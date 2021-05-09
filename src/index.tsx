
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import theme from './context/themeContext'
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducer from './reducer/rootReducer'
// import thunk from 'redux-thunk'


// import reportWebVitals from './reportWebVitals';
// #E74219
// #000000
// #E9E9E9
// #9D4D98
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#E74219',
      main: '#000000',
      dark: '#000000',
      contrastText: '#fafafa',
    },
    secondary: {
      light: '#E9E9E9',
      main: '#E9E9E9',
      dark: '#E9E9E9',
      contrastText: '#E9E9E9',
    },
  },
});

// const store = createStore(rootReducer, applyMiddleware(thunk))
const store = createStore(rootReducer)


ReactDOM.render(
  <React.Fragment>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </ThemeProvider> 
    </CssBaseline>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
