import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginTop: '40px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    },
  },
  paper: {
    padding: '10px 20px 30px 20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 10px 30px 10px',
    },
  },
  heading: {
    fontFamily: 'OpenSans,Arial,sans-serif',
    fontSize: '32px',
    lineHeight: '36px',
    fontWeight: 400,
    color: '#333',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '28px',
    },
  },
  button: {
    background: '#0056D2',
    padding: 17,
    width: '150px',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      width: '100px',
    },
  },
  grid: {
    marginBottom: '30px',
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
      marginTop: '10px',
    },
  },
  intro: {
    fontFamily: 'OpenSans-Light,Arial,sans-serif',
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 500,
    color: '#333',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  introPara: {
    marginTop: '8px',
    marginBottom: '10px',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: 'OpenSans,Arial,sans-serif',
    color: '#333',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
  inputGrid: {
    marginTop: '30px',
    width: '1090px',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
      width: '100%',
    },
  },
  label: {
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '150px',
    },
  },
  value: {
    width: '700px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  labelText: {
    color: 'black',
    fontFamily: 'OpenSans,Arial,sans-serif',
    fontWeight: 700,
    fontSize: '14px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  avatar: {
    background: '#55c1e6',
    width: theme.spacing(16),
    height: theme.spacing(15),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(13),
      height: theme.spacing(12),
    },
  },
  personIcon: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  photoBtn: {
    background: '#0056D2',
    fontWeight: 'bold',
    marginLeft: '15px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  },
  selectTag: {
    textAlign: 'left',
  },
  chooseFileBtn: {
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '5px',
    },
  },
}));
