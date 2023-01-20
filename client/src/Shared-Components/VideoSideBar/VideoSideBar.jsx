import React, { useEffect , useState } from 'react';
import {
  Drawer,
  CssBaseline,
  List,
  Grid,
  ListItem,
  Divider,
} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import axios from 'axios';
import { CheckCircleOutline as CheckCircleOutlineIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useStyles from './styles';
import {
  getVideos,
  getVideoUrl,
  getCourseName,
  getVideoTitle,
  getVideoId,
  getPdfUrls
} from '../../Redux/User/Video/actions';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';


export const VideoSideBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const videosArr = useSelector((state) => state.userVideo.videos);
  const courseName = useSelector((state) => state.userVideo.courseName);
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(Array(videosArr.length).fill(false));


  useDocumentTitle(`${courseName}`);

  useEffect(() => {
    dispatch(getVideos(id)).then(() => dispatch(getCourseName(id)));
  }, []);
  

  const handleVideoMetaData = (index) => {
    // eslint-disable-next-line camelcase
    const { video_url, title, _id, pdf_urls } = videosArr[index];
    dispatch(getVideoUrl(video_url));
    dispatch(getVideoTitle(title));
    dispatch(getVideoId(_id));
    dispatch(getPdfUrls(pdf_urls));
    setCount(count + 1);
    setClicked(clicked.map((item, i) => i === index ? true : item));
    axios.post('/api/save-count', {
        count
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    }); 
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <div className={classes.courseName}>
          <h2>{courseName}</h2>
        </div>
        <Divider />
        <List>
          {videosArr.map((el, index) => (
            <ListItem
              button
              key={el.title}
              onClick={() => handleVideoMetaData(index, count, setCount)}
            >
              <Grid container spacing={1}>
                <Grid item lg={2}>
                  <PlayCircleOutlineIcon style={{ color: 'black' }} />
                </Grid>
                <Grid item lg={10}>
                  <strong id='videoclick'>Video:</strong>
                  &nbsp; {el.title}
                  {clicked[index] && <CheckCircleOutlineIcon style={{color:'green'}} />}
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
      </main> */}
    </div>
  );
};
