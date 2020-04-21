import React, { useEffect } from 'react';
import { Box, Anchor } from 'grommet';
import { Document, Page, pdfjs } from 'react-pdf';

import resumePdf from '../component_assets/resume.pdf';
import { View } from 'grommet-icons';

const Resume = () => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  const downloadResume = () => {
    window.open(resumePdf, '_blank');
  };

  return (
    <Box
      //pad={{ top: '325px' }}
      flex
      direction="column"
      align="center"
      justify="center"
      background="home"
      gap="small"
    >
      <Document
        file={resumePdf}
        noData="no data?! aw shucks..."
        onLoadError={console.error}
        error="Resume on break. Be back in 5."
      >
        <Page height={950} pageNumber={1} />
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

export default Resume;
