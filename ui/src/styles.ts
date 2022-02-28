import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    margin: 'auto',
    width: 500,
    marginTop: 96,
  },
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiSnackbar-root': {
      top: 88,
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid lightgrey',
    borderRadius: 4,
    marginTop: 16,
    padding: 32,
    width: 300,
    height: 300,
  },
  textField: {
    marginBottom: 16,
  },
  button: {
    width: 140,
    marginTop: 32,
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
  },
});

export default useStyles;
