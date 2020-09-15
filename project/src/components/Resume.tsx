import React, { useEffect, useRef } from 'react';
import { Box, Anchor, ResponsiveContext } from 'grommet';
import { Document, Page, pdfjs } from 'react-pdf';

import resumePdf from '../component_assets/resume.pdf';
import { View } from 'grommet-icons';

const Resume = () => {
  const isMounted = useRef(true);

  useEffect(() => {
    document.title = 'lorenzo zenitsky | isu senior in software engineering';
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const downloadResume = () => {
    window.open(resumePdf, '_blank');
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          flex
          direction="column"
          align="center"
          justify="center"
          background="transparent"
          style={{ zIndex: 1 }}
        >
          {size !== 'small' ? (
            <Document
              file={resumePdf}
              noData="no data?! aw shucks..."
              onLoadError={console.error}
              error="Resume on break. Be back in 5."
            >
              <Page height={950} pageNumber={1} />
            </Document>
          ) : null}
          {size !== 'small' ? (
            <Anchor
              alignSelf="center"
              margin="small"
              icon={<View />}
              reverse
              label="click to open in browser"
              onClick={downloadResume}
            />
          ) : (
            <Anchor
              alignSelf="center"
              margin="small"
              label="click to open resume"
              onClick={downloadResume}
            />
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Resume;
