import React from 'react';
import { Box, Heading, Paragraph, Avatar, ResponsiveContext } from 'grommet';

import Resume from './Resume';
import Email from './Email';

const HomePage = (props: any) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          flex
          direction="row"
          align="start"
          justify="around"
          background="home"
          overflow={{ horizontal: 'hidden' }}
        >
          {size === 'large' ? (
            <Box>
              <Avatar
                border={{
                  color: 'brand',
                  size: 'small',
                  style: 'solid'
                }}
                round="full"
                src="/website-images/site-512.png"
                size="200px"
                alignSelf="start"
              />
              <Box pad={{ right: '60px' }}>
                <Heading textAlign="end">welcome!</Heading>
              </Box>
              <Paragraph
                size="large"
                textAlign="start"
                margin={{ bottom: 'small' }}
              >
                My name is Lorenzo. I am a software developer (degree says
                engineer, but I'm not so sure about that one) with a love for
                all things frontend. I tend to gravitate towards the more
                outwardly artistic corners of software because I believe myself
                to naturally be more creative-minded than technical. Before I
                decided to try my hand in software engineering, I originally
                planned on further pursuing my love of music until I thought
                it'd probably be more beneficial to add just one more skill to
                my, admittedly small, yet focused repertoire. Now, four years
                into my degree with just one semester left to go, I find myself
                growing more into my one as a developer, focusing on projects
                that allow me to satisfy my creative outlet.
              </Paragraph>
              <Paragraph size="large" textAlign="end" margin={{ top: 'small' }}>
                Above, you will find all of my experiences in industry, all the
                various projects I've had my hands in, and all the things that
                make me... well, me. Have a gander and be sure to tell me what
                you think (email button in lower right)!
              </Paragraph>
            </Box>
          ) : (
            <Box align="center">
              <Avatar
                margin={{ top: 'medium' }}
                border={{
                  color: 'brand',
                  size: 'small',
                  style: 'solid'
                }}
                round="full"
                src="/website-images/site-512.png"
                size={size === 'medium' ? '200px' : '125px'}
                alignSelf="center"
              />
              <Heading textAlign="center">welcome!</Heading>
              <Box direction="row">
                <Paragraph
                  size="large"
                  textAlign="center"
                  fill
                  margin={{ bottom: 'small', right: 'large', left: 'large' }}
                >
                  My name is Lorenzo. I am a software developer (degree says
                  engineer, but I'm not so sure about that one) with a love for
                  all things frontend. I tend to gravitate towards the more
                  outwardly artistic corners of software because I believe
                  myself to naturally be more creative-minded than technical.
                  Before I decided to try my hand in software engineering, I
                  originally planned on further pursuing my love of music until
                  I thought it'd probably be more beneficial to add just one
                  more skill to my, admittedly small, yet focused repertoire.
                  Now, four years into my degree with just one semester left to
                  go, I find myself growing more into my one as a developer,
                  focusing on projects that allow me to satisfy my creative
                  outlet.
                </Paragraph>
              </Box>
              <Paragraph
                size="large"
                textAlign="center"
                margin={{ bottom: 'medium', top: 'small' }}
              >
                Above, you will find all of my experiences in industry, all the
                various projects I've had my hands in, and all the things that
                make me... well, me. Have a gander and be sure to tell me what
                you think (email button in lower right)!
              </Paragraph>
              <Resume />
            </Box>
          )}
          {size === 'large' ? (
            <Box>
              <Resume />
            </Box>
          ) : null}
          <Email mode={props.mode} home={true} />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default HomePage;
