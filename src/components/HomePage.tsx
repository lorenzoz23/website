import React, { useEffect } from 'react';
import { Box } from 'grommet';
import { Document, Page, pdfjs } from 'react-pdf';

import resume from '../component_assets/resume.pdf';

const HomePage = () => {
  const [numPages, setNumPages] = React.useState(1);
  const [pageNumber] = React.useState(1);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

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
        noData="aw shucks!"
        onLoadError={console.error}
        onLoadSuccess={() => setNumPages}
        error="Resume on break. Be back in 5."
      >
        <Page pageNumber={pageNumber} height={1000} />
      </Document>
      <Box>
        page {pageNumber} of {numPages}
      </Box>
    </Box>
  );
};

export default HomePage;
