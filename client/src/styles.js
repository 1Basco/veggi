import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    background: '#FBE7C6',
    borderRadius: 25,
    width: '97%',
    margin: '30px auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#A0E7E5',
    fontSize: '3rem',
    fontWeight: 'bold',
    fontFamily: `'Mohave', sans-serif,`
  },
}));