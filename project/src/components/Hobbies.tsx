import React from 'react';
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet';
import { Music, Ticket } from 'grommet-icons';

import Trello from './Trello';

const Hobbies = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box flex align="center" justify="start" background="home">
          <Heading textAlign="center">my interests</Heading>
          <Box
            direction="row"
            gap="medium"
            pad={{ bottom: size !== 'small' ? 'small' : 'large' }}
          >
            <Music color="brand" />
            <Ticket color="brand" />
          </Box>
          <Paragraph size="large" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <Heading level={2}>Trello Boards</Heading>
          <Box
            direction={size !== 'small' ? 'row' : 'column'}
            gap={size !== 'small' ? 'large' : '250px'}
            margin={{ bottom: size !== 'small' ? '250px' : '600px' }}
          >
            <Trello id="268G14hT" divLabel="metal-2020" />
            <Trello id="aHi0ZFuA" divLabel="indie-alternative-2020" />
            <Trello id="KKDGm1Bx" divLabel="website" />
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Hobbies;
