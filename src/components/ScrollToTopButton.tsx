import React from 'react';
import { Box, Button } from 'grommet';
import { LinkUp } from 'grommet-icons'; // other icon options: Up, LinkUp, FormUp, CaretUp

const ScrollToTopButton = (props: any) => {
  return (
    <Box
      justify="end"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '30px',
        zIndex: 99,
        padding: '15px',
        display: props.scrollVisibility
      }}
    >
      <Button
        primary={false}
        icon={<LinkUp color="brand" />}
        onClick={props.scrollToTop}
      />
    </Box>
  );
};

export default ScrollToTopButton;
