import React, { useState } from 'react';
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
  Text,
  Select
} from 'grommet';
import { Home, Github, Linkedin, Youtube, Magic } from 'grommet-icons';
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
import AppBar from './AppBar';

const themeLight = {
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

const themeDark = {
  global: {
    colors: {
      home: '#3F5173',
      sidebar: '#8DDDEC'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  },
  select: {
    background: '#71F981'
  }
};

function App() {
  const getInitialState = () => {
    const mode = localStorage.getItem('visualModeValue') || 'light';

    return mode;
  };

  const [visualModeValue, setVisualModeValue] = useState(getInitialState);

  const setMode = (mode: string) => {
    localStorage.setItem('visualModeValue', mode);
    setVisualModeValue(mode);
  };

  return (
    <Grommet theme={visualModeValue === 'light' ? themeLight : themeDark} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Router>
            <Box fill background="home" pad={{ bottom: 'small' }}>
              <AppBar>
                {size !== 'small' ? (
                  <Box direction="row" align="center" flex justify="between">
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
                          software engineer ||{' '}
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
                      <Box direction={size === 'medium' ? 'column' : 'row'}>
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
                        <Box alignSelf="center">
                          <Select
                            disabled={visualModeValue === 'light' ? [0] : [1]}
                            icon={<Magic />}
                            onChange={({ option }) => setMode(option)}
                            size="small"
                            options={['light', 'dark']}
                            placeholder="choose your visual style"
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      pad={{ right: 'small' }}
                      animation="pulse"
                      //alignContent="center"
                      direction="row-reverse"
                    >
                      <Avatar
                        border={{
                          color: '#71F981',
                          size: 'small',
                          style: 'solid'
                        }}
                        round="full"
                        size="xlarge"
                        src="../website-images/64slices.png"
                      />
                      <Clock type="digital" margin="small" />
                    </Box>
                  </Box>
                ) : (
                  <Box gap="small" align="center">
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
                        software engineer ||{' '}
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
                    <Box direction="row">
                      <Box
                        elevation="medium"
                        border={{
                          color: '#F1948A',
                          size: 'medium',
                          style: 'outset',
                          side: 'all'
                        }}
                      >
                        <Menu
                          dropAlign={{
                            top: 'bottom'
                          }}
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
                      <Box alignSelf="center" margin="small">
                        <Select
                          disabled={visualModeValue === 'light' ? [0] : [1]}
                          icon={<Magic />}
                          onChange={({ option }) => setMode(option)}
                          size="small"
                          options={['light', 'dark']}
                          placeholder="choose your visual style"
                        />
                      </Box>
                    </Box>
                  </Box>
                )}
              </AppBar>
              <Box
                //direction="row"
                flex
                overflow={{ horizontal: 'hidden' }}
                pad="medium"
              >
                <Switch>
                  <Route path="/projects">
                    <CodeProjects mode={visualModeValue} />
                  </Route>
                  <Route path="/hobbies">
                    <Hobbies />
                  </Route>
                  <Route path="/yikes">
                    <WarZone />
                  </Route>
                  <Route path="/experience">
                    <Experience mode={visualModeValue} />
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
