import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    paddingTop: '64px',
    paddingBottom: '64px',
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '32px',
      paddingBottom: '32px',
    },
  },
  heading: {
    fontWeight: '600',
    color: 'rgb(31,31,31)',
    marginBottom: '65px',
    lineHeight: '34px',
    fontSize: '44px',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
      lineHeight: '40px',
      marginBottom: '40px',
    },
  },
  spanHead: {
    display: 'block',
    fontWeight: '600',
    color: 'rgb(31,31,31)',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    fontSize: '20px',
    lineHeight: '28px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  spanSub: {
    display: 'block',
    fontSize: '20px',
    fontWeight: 'normal',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
}));
