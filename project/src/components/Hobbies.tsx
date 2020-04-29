import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { Music, Ticket } from 'grommet-icons';

import Trello from './Trello';

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
      <Box direction="row" gap="medium" pad={{ bottom: 'small' }}>
        <Music color="brand" />
        <Ticket color="brand" />
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
      <Box direction="row" justify="center" pad={{ top: 'small' }}>
        <Box>
          <Heading level={4} alignSelf="center">
            check out my metal reviews!
          </Heading>
          <Trello id="268G14hT" btnLabel="metal" divLabel="metal-2020" />
        </Box>
        <Box>
          <Heading level={4} alignSelf="center">
            check out my indie reviews!
          </Heading>
          <Trello
            id="aHi0ZFuA"
            btnLabel="indie/alternative"
            divLabel="indie-alternative-2020"
          />
        </Box>
        <Box>
          <Heading level={4} alignSelf="center">
            check out the scrum board for my website!
          </Heading>
          <Trello id="KKDGm1Bx" btnLabel="website" divLabel="website" />
        </Box>
      </Box>
    </Box>
  );
};

export default Hobbies;
