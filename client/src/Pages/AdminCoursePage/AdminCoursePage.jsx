/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { TextField, Container, Button, Modal, Grid, FormLabel } from '@material-ui/core';
import styled from 'styled-components';
import firebase from 'firebase';
import { fetchAllVideosParticularCourse } from '../../Redux/Admin/Course/actions';
import { addVideoToCourse } from '../../Redux/Admin/Video/actions';
import VideoComponent from './VideoComponent';
import useStyles from './coursePageStyles';

const storage = firebase.storage();

const shortid = require('shortid');




const ModalCont = styled.div`
  background-color: azure;
  width: 70%;
  display: grid;
  place-items: center;
  margin: auto;
  margin-top: 150px;
  padding: 20px 10px;
  border-radius: 7px;
  padding-bottom: 0;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 20px;
  & > .MuiFormControl-root {
    width: 90%;
  }
`;

const AdminCoursePage = () => {
  const params = useParams();
  const [courseId, setCourseId] = useState('');
  const classes = useStyles();

  const [courseTitle, setCourseTitle] = useState('');

  const videos = useSelector((state) => state.course.videos);
  const [videoIds, setVideoIds] = useState([]);

  const dispatch = useDispatch();
  const initialVideoData = {
    title: '',
    video_url: '',
    description: '',
    week: '',
  };
  const [newVideoData, setNewVideoData] = useState(initialVideoData);

  const [open, setOpen] = React.useState(false);

  const handleNewVideoFormChange = (e) => {
    const { name, value } = e.target;

    setNewVideoData({
      ...newVideoData,
      [name]: value,
    });
  };

  const fetchVideoIdsArray = () => {
    return axios
      .get(`http://localhost:5000/course/${courseId}/videoids`)
      .then(({ data }) => {
        setVideoIds(data.data.video_ids);
      });
  };

// const [numberOfPdfs, setNumberOfPdfs] = useState(1);
const [pdfs, setPdfs] = useState([]);

const handlePdfUpload = (e) => {
  setPdfs([...pdfs, e.target.files[0]]);
}

  
  const handleClose = () => {
    setOpen(false);
  };

  const [pdfCount, setPdfCount] = useState(1);
  const handlePdfCountChange = (e) => {
      setPdfCount(e.target.value);
  }


  const handleAddVideo = async () => {
    const payload = {
      ...newVideoData,
      week: Number(newVideoData.week),
      course_id: courseId,
    };

    // Create a storage reference from our storage service
    const storageRef = storage.ref();

    const pdfUrls = [];

    for (let i = 0; i < pdfs.length; i+=1) {
        const pdfId = shortid.generate();
        const pdfRef = storageRef.child(`pdfs/${pdfId}`);
        const uploadPdfTask = pdfRef.put(pdfs[i]);
        uploadPdfTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
            },
            (error) => {
                console.log(error);
            },
            async () => {
                const pdfUrl = await uploadPdfTask.snapshot.ref.getDownloadURL();
                pdfUrls.push(pdfUrl);
                // check if all PDFs have been uploaded before proceeding
                if (pdfUrls.length === pdfs.length) {
                    payload.pdf_urls = pdfUrls;
                    dispatch(addVideoToCourse(payload))
                        .then((res) => {
                            alert('Video Added Successfully');
                            const newVideoId = res.data.data._id;
                            videoIds.push(newVideoId);
                            axios
                                .patch(`http://localhost:5000/course/${courseId}`, {
                                    video_ids: videoIds,
                                })
                                .then(() => {
                                    fetchVideoIdsArray();
                                    handleClose();
                                });
                        });
                };
            }
        );
    }
  };
           




  const handleOpen = () => {
    setOpen(true);
  };

 

  useEffect(() => {
    setCourseId(params.id);
  }, [params]);

  useEffect(() => {
    if (courseId !== '') {
      dispatch(fetchAllVideosParticularCourse(courseId));

      fetchVideoIdsArray();
    }
  }, [courseId]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/course/${courseId}`)
      .then((res) => setCourseTitle(res.data.data.course_name));
  }, [courseId]);

 


  return (
    <Container className={classes.root} maxWidth="xl">
      <h1 className={classes.heading}>{courseTitle}</h1>

      <div>
        <Grid container justify="space-between" className={classes.btnGrid}>
          <Button
            variant="contained"
            onClick={handleOpen}
            color="primary"
            className={classes.btn}
          >
            <h2>Add Video</h2>
          </Button>
          <Button
            variant="contained"
            component={Link}
            color="primary"
            to={`/admin/course/${courseId}/students`}
            className={classes.btn}
          >
            <h2>See Students</h2>
          </Button>
        </Grid>
        <Grid container spacing={2} className={classes.videoGrid}>
          {videos.length > 0 ? (
            videos.map((video) => (
              <Grid item lg={6}>
                <VideoComponent key={video._id} video={video} />
              </Grid>
            ))
          ) : (
            <h2>No Videos Found. Add One</h2>
          )}
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalCont>
            <h1>Modal</h1>
            <FormBox>
              <TextField
                onChange={handleNewVideoFormChange}
                label="Video Title"
                variant="outlined"
                name="title"
              />
              <TextField
                onChange={handleNewVideoFormChange}
                label="Video Description"
                variant="outlined"
                name="description"
              />
              <TextField
                onChange={handleNewVideoFormChange}
                label="Video Url"
                variant="outlined"
                name="video_url"
              />
              <TextField
                onChange={handleNewVideoFormChange}
                label="Week Number"
                variant="outlined"
                name="week"
              />
              {/* add a field to store pdfs */     }
              <FormLabel component="legend">Upload PDF</FormLabel>
              <FormLabel component="legend">Number of PDFs</FormLabel>
              <select onChange={handlePdfCountChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                {/* Add more options for larger number of PDFs */}
              </select>
              {Array.from({length: pdfCount}, (_, i) => (
                <div key={i}>
                  <FormLabel component="legend">Upload PDF {i + 1}</FormLabel>
                  <input
                    type="file"
                    onChange={handlePdfUpload}
                  />
                </div>
          ))}


              <Button variant="primary" onClick={handleAddVideo}>
                <h2>Add Video to the Course</h2>
              </Button>
            </FormBox>
          </ModalCont>
        </Modal>
      </div>
    </Container>
  );
};

export default AdminCoursePage;
