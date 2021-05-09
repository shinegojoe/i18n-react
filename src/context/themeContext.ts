import { createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#E74219',
      main: '#000000',
      dark: '#000000',
      contrastText: '#fafafa',
    },
    secondary: {
      light: '#9D4D98',
      main: '#9D4D98',
      dark: '#9D4D98',
      contrastText: '#9D4D98',
    },
  },
})

export default theme