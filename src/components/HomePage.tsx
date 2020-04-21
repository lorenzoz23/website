import React, { useEffect } from 'react';
import { Box, Anchor } from 'grommet';
import { Document, Page, pdfjs } from 'react-pdf';

import resume from '../component_assets/resume.pdf';
import { View } from 'grommet-icons';

const HomePage = () => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  const downloadResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <Box
      pad={{ top: '300px' }}
      flex
      direction="column"
      align="center"
      justify="center"
      background="home"
      gap="small"
    >
      <Document
        file={resume}
        noData="no data?! aw shucks..."
        onLoadError={console.error}
        error="Resume on break. Be back in 5."
      >
        <Page height={900} pageNumber={1} />
      </Document>
      <Anchor
        margin="small"
        icon={<View />}
        reverse
        label="click to open in browser"
        onClick={downloadResume}
      />
    </Box>
  );
};

export default HomePage;
