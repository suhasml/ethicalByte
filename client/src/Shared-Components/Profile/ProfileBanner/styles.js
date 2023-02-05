import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    backgroundImage:
      'url(https://wallpaper.dog/large/10740535.jpg)',
    width: '100%',
    height: '368px',
    backgroundSize: 'cover',
    marginTop: '-20px',
    [theme.breakpoints.down('sm')]: {
      height: '300px',
    },
  },
  iconDiv: {
    marginTop: '20px',
    border: '1px solid transparent',
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
    },
  },
  updateIconBtn: {
    background: 'white',
    color: 'gray',
    width: theme.spacing(5),
    height: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  updateIcon: {
    color: '#ed1c24',
  },
  avatar: {
    background: '#f06268',
    width: theme.spacing(17),
    height: theme.spacing(17),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  },
  personIcon: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  },
  userName: {
    color: 'white',
    fontSize: '22px',
    fontFamily: 'OpenSans,Arial,sans-serif',
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
}));
