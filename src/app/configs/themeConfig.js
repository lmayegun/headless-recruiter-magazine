import {createMuiTheme} from '@material-ui/core/styles';
import {green, yellow, blue} from '@material-ui/core/colors';
import {colorDark, colorSec} from '@localpkg/app-colors'

export const defaultMuiTheme = ()=>{
  return createMuiTheme({
    palette: {
      primary: colorDark,
      secondary: colorSec,
    },
    typography:{
      fontFamily: ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      body1:{
        fontFamily : ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      },
      h1:{
        fontFamily : ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      },
      h2:{
        fontFamily : ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      },
      h3:{
        fontFamily : ['Kommissar Cond Web','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
        fontSize: '1.7em',
      },
      h4:{
        fontFamily : ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      },
      h5:{
        fontFamily : ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      },
      h6:{
        fontFamily : ['Kommissar Cond Web','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      }
    },
    status: {
      danger: 'red',
    },
  })
}
