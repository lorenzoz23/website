import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { Music, Ticket } from 'grommet-icons';

const Hobbies = () => {
  return (
    <Box
      flex
      direction="column"
      align="center"
      justify="start"
      background="home"
    >
      <Heading textAlign="center">my interests</Heading>
      <Box direction="row" gap="medium">
        <Music />
        <Ticket />
      </Box>
      <Paragraph size="large" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </Box>
  );
};

export default Hobbies;
