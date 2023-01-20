import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Box, Divider } from '@material-ui/core';
import { getPdfUrls } from '../../Redux/User/Video/actions';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },  
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    },
}));

export const PdfSidebar = () => {
  const pdfUrls = useSelector((state) => state.userVideo.pdfUrls);
  const dispatch = useDispatch();
  const classes = useStyles();
 

  useEffect(() => {
    
    dispatch(getPdfUrls());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              PDFs
            </Typography>
            <Divider />
            <Box m={2} />
            {Array.isArray(pdfUrls) ? pdfUrls.map((pdfUrl, index) => (
              <Typography key={pdfUrl} variant="body1" gutterBottom>
                <a className={classes.link} href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  Resource {index + 1}
                </a>
              </Typography>
            )) : <Typography variant="body1" gutterBottom>No PDFs available</Typography>}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}






