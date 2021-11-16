import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 10,
  },
  grid: {
    marginBottom: 10,
  },
}));