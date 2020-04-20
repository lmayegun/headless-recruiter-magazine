import {createMuiTheme} from '@material-ui/core/styles';
import {green, yellow, grey} from '@material-ui/core/colors';

export const defaultMuiTheme = ()=>{
  return createMuiTheme({
    palette: {
      primary: grey,
      secondary: green,
    },
    status: {
      danger: 'red',
    },
  })
}
