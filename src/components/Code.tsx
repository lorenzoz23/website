import React from 'react';
import { Box, Button } from 'grommet';
import { Code as CodeIcon } from 'grommet-icons';

const Code = () => {
  return (
    <Box
      flex
      direction="column"
      align="center"
      justify="center"
      background="home"
    >
      under construction
      <Button icon={<CodeIcon />} margin="small" />
    </Box>
  );
};

export default Code;
