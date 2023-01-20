// a pdf sidebar which fetches pdfs stored in firebase storage and displays them as links:
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Box, Divider } from '@material-ui/core';
import { storage } from '../../utils/firebase';

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
    const videoId = useSelector((state) => state.userVideo.videoId);
    const [pdfs, setPdfs] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const getPdfs = async () => {
            const pdfsRef = storage.ref(videoId).child('pdfs');
            const pdfsList = await pdfsRef.listAll();
            pdfsList.items.forEach(async (pdfRef) => {
                const pdfUrl = await pdfRef.getDownloadURL();
                setPdfs((prevPdfs) => [...prevPdfs, pdfUrl]);
            });
        };
        getPdfs();
    }, [videoId]);

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
              {pdfs.map((pdf) => (
                <a href={pdf} download> 
                  <Typography variant="h6" gutterBottom>
                    {pdf}
                  </Typography>
                </a>
                ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
}