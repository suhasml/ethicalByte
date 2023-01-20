import axios from 'axios';
import {
  GET_COURSENAME_FAILURE,
  GET_COURSENAME_REQ,
  GET_COURSENAME_SUCCESS,
  GET_VIDEOS_FAILURE,
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_SUCCESS,
  GET_VIDEO_URL,
  GET_VIDEO_TITLE,
  GET_VIDEO_ID,
  GET_PDF_FAILURE,
  GET_PDF_REQUEST,
  GET_PDF_SUCCESS
} from './actionTypes';

export const getVideosRequest = () => {
  return {
    type: GET_VIDEOS_REQUEST,
  };
};

export const getVideosSuccess = (payload) => {
  return {
    type: GET_VIDEOS_SUCCESS,
    payload,
  };
};

export const getVideosFailure = () => {
  return {
    type: GET_VIDEOS_FAILURE,
  };
};

export const getVideoUrl = (payload) => {
  return {
    type: GET_VIDEO_URL,
    payload,
  };
};

export const getVideoTitle = (payload) => {
  return {
    type: GET_VIDEO_TITLE,
    payload,
  };
};

export const getVideoId = (payload) => {
  return {
    type: GET_VIDEO_ID,
    payload,
  };
};

export const getCourseNameRequest = () => {
  return {
    type: GET_COURSENAME_REQ,
  };
};

export const getCourseNameSuccess = (payload) => {
  return {
    type: GET_COURSENAME_SUCCESS,
    payload,
  };
};

export const getCourseNameFailure = () => {
  return {
    type: GET_COURSENAME_FAILURE,
  };
};

export const getVideos = (courseId) => (dispatch) => {
  dispatch(getVideosRequest());

  return axios
    .get(`http://localhost:5000/video/${courseId}/videos`)
    .then((res) => dispatch(getVideosSuccess(res.data.data)))
    .catch((err) => {
      dispatch(getVideosFailure());
      console.log(err);
    });
};

export const getCourseName = (courseId) => (dispatch) => {
  dispatch(getCourseNameRequest());

  return axios
    .get(`http://localhost:5000/course/${courseId}`)
    .then((res) => dispatch(getCourseNameSuccess(res.data.data)))
    .catch((err) => {
      dispatch(getCourseNameFailure());
      console.log(err);
    });
};


export const getPdfRequest = () => {
  return {
    type: GET_PDF_REQUEST,
  };
};

export const getPdfSuccess = (payload) => {
  return {
    type: GET_PDF_SUCCESS,
    payload,
  };
};

export const getPdfFailure = () => {
  return {
    type: GET_PDF_FAILURE,
  };
};

export const getPdf = (videoId) => (dispatch) => {
  dispatch(getPdfRequest());

  return axios
    .get(`http://localhost:5000/pdf/${videoId}`)
    .then((res) => dispatch(getPdfSuccess(res.data.data)))
    .catch((err) => {
      dispatch(getPdfFailure());
      console.log(err);
    });
};