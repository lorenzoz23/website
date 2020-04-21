import React from 'react';
import {
  Box,
  Grommet,
  Heading,
  Menu,
  ResponsiveContext,
  Tabs,
  Tab,
  Avatar,
  Nav,
  Anchor,
  Clock,
  Text
} from 'grommet';
import { Home, Github, Linkedin, Youtube } from 'grommet-icons';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HomePage from './HomePage';
import WarZone from './Warzone';
import { default as CodeProjects } from './Code';
import Hobbies from './Hobbies';
import Experience from './Experience';

const theme = {
  global: {
    colors: {
      home: '#ECF0F1',
      sidebar: '#8DDDEC'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
};

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="home"
    pad={{
      left: 'medium',
      right: 'medium',
      vertical: 'small'
    }}
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Router>
            <Box fill background="home" pad={{ bottom: 'small' }}>
              <AppBar>
                <Box direction="row">
                  <Box
                    round
                    pad="small"
                    border={{
                      color: '#71F981',
                      size: 'small',
                      style: 'outset',
                      side: 'all'
                    }}
                  >
                    <Heading
                      style={{ textAlign: 'center' }}
                      level="2"
                      margin="none"
                    >
                      lorenzo zenitsky
                    </Heading>
                    <Text textAlign="center">
                      sofware engineer ||{' '}
                      <Anchor href="mailto:lorenzoz@iastate.edu">
                        lorenzoz@iastate.edu
                      </Anchor>
                    </Text>
                    <Nav direction="row" gap="xsmall" justify="center">
                      <Anchor
                        icon={<Github color="plain" />}
                        target="_blank"
                        href="https://github.com/lorenzoz23"
                      />
                      <Anchor
                        icon={<Linkedin color="plain" />}
                        target="_blank"
                        href="https://www.linkedin.com/in/lorenzo-zenitsky-823257171/"
                      />
                      <Anchor
                        icon={<Youtube color="plain" />}
                        target="_blank"
                        href="https://www.youtube.com/user/gdzenitsky"
                      />
                    </Nav>
                  </Box>
                  {size === 'small' ? (
                    <Box
                      border={{
                        color: '#F1948A',
                        size: 'medium',
                        style: 'outset',
                        side: 'all'
                      }}
                    >
                      <Menu
                        dropBackground="#71F981"
                        label={<Home />}
                        items={[
                          {
                            label: (
                              <Link to="/" style={{ textDecoration: 'none' }}>
                                home
                              </Link>
                            ),
                            onClick: () => {}
                          },
                          {
                            label: (
                              <Link
                                to="/experience"
                                style={{ textDecoration: 'none' }}
                              >
                                experience
                              </Link>
                            ),
                            onClick: () => {}
                          },
                          {
                            label: (
                              <Link
                                to="/projects"
                                style={{ textDecoration: 'none' }}
                              >
                                projects
                              </Link>
                            ),
                            onClick: () => {}
                          },
                          {
                            label: (
                              <Link
                                to="/hobbies"
                                style={{ textDecoration: 'none' }}
                              >
                                hobbies
                              </Link>
                            ),
                            onClick: () => {}
                          },
                          {
                            label: (
                              <Link
                                to="/yikes"
                                style={{ textDecoration: 'none' }}
                              >
                                the yada yada
                              </Link>
                            ),
                            onClick: () => {}
                          }
                        ]}
                      />
                    </Box>
                  ) : (
                    <Tabs alignSelf="center" margin="small">
                      <Tab title="home">
                        <Redirect to="/" />
                      </Tab>
                      <Tab title="experience">
                        <Redirect to="/experience" />
                      </Tab>
                      <Tab title="projects">
                        <Redirect to="/projects" />
                      </Tab>
                      <Tab title="hobbies">
                        <Redirect to="/hobbies" />
                      </Tab>
                      <Tab title="the yada yada">
                        <Redirect to="/yikes" />
                      </Tab>
                    </Tabs>
                  )}
                </Box>
                <Box
                  pad={{ right: 'small' }}
                  animation="pulse"
                  alignContent="center"
                  direction="row-reverse"
                >
                  <Avatar
                    border={{
                      color: '#71F981',
                      size: 'medium',
                      style: 'solid'
                    }}
                    round="full"
                    size="xlarge"
                    src="../website-images/64slices.png"
                  />
                  <Clock type="digital" margin="small" />
                </Box>
              </AppBar>
              <Box
                direction="row"
                flex
                overflow={{ horizontal: 'hidden' }}
                pad="medium"
              >
                <Switch>
                  <Route path="/projects">
                    <CodeProjects />
                  </Route>
                  <Route path="/hobbies">
                    <Hobbies />
                  </Route>
                  <Route path="/yikes">
                    <WarZone />
                  </Route>
                  <Route path="/experience">
                    <Experience />
                  </Route>
                  <Route path="/">
                    <HomePage />
                  </Route>
                </Switch>
              </Box>
            </Box>
          </Router>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
