import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import colors from './colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
