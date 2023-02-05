import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    marginTop: '40px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    },
  },
  container: {
    textAlign: 'center',
    paddingTop: '64px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '32px',
    },
  },
  heading: {
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    fontSize: '28px',
    fontWeight: '600px',
    lineHeight: '36px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '32px',
    },
  },
  logoImg: { width: '100%', height: '100%' },
}));
