import React from 'react';
import styled from 'styled-components';
import { VidPlayer } from '../../Shared-Components/VideoPlayer/VidPlayer';
import { VideoSideBar } from '../../Shared-Components/VideoSideBar/VideoSideBar';
import Navbar from '../../Shared-Components/Navbar/Navbar';
import { PdfSidebar } from '../../Shared-Components/PdfSidebar/PdfSidebar';


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;
`;

export const CourseMaterial = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Navbar />
      <Grid>
        <VideoSideBar />
        <VidPlayer />
        <PdfSidebar />
      </Grid>
    </div>
  );
};
