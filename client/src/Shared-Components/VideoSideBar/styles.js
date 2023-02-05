import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    color: '#464646',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  courseName: {
    marginTop: '35px',
    fontWeight: 700,
    padding: '6px 15px',
    margin: 0,
    fontSize: '14px',
    lineHeight: '20px',
    color: 'rgba(0,0,0,.87)',
    fontFamily: 'OpenSans,Arial,sans-serif',
  },
  videoTitle: {
    fontSize: '12px',
  },
}));
