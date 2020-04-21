import React from 'react';
import { Box, Heading, Paragraph, Text, Avatar } from 'grommet';

import Resume from './Resume';

const HomePage = () => {
  return (
    <Box flex direction="row" align="start" justify="around" background="home">
      <Box>
        <Avatar
          border={{
            color: 'brand',
            size: 'small',
            style: 'solid'
          }}
          round="full"
          elevation="medium"
          src="/website-images/site-512.png"
          size="200px"
          alignSelf="start"
        />
        <Heading textAlign="center">about me</Heading>
        <Paragraph size="large" textAlign="end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Text size="medium" textAlign="end">
          - mr. under-construction
        </Text>
        <Heading textAlign="center">about me</Heading>
        <Avatar
          border={{
            color: 'brand',
            size: 'small',
            style: 'solid'
          }}
          round="full"
          elevation="medium"
          src="/website-images/site-512.png"
          size="200px"
          alignSelf="end"
        />
      </Box>
      <Box>
        <Resume />
      </Box>
    </Box>
  );
};

export default HomePage;
