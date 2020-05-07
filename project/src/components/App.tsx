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
import {
  Home,
  Github,
  Linkedin,
  Youtube,
  Magic,
  Multimedia
} from 'grommet-icons';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HomePage from './HomePage';
import { default as CodeProjects } from './Code';
import Hobbies from './Hobbies';
import Experience from './Experience';
import AppBar from './AppBar';

const themeLight = {
  global: {
    colors: {
      home: '#ECF0F1',
      sidebar: '#accent-3'
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
      home: '#363E4B',
      //home: '#3F5173',
      sidebar: '#8DDDEC',
      accent1: '#8DDDEC'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
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
            <Box
              fill
              background="home"
              pad={{ bottom: size !== 'small' ? 'small' : 'medium' }}
            >
              <AppBar>
                {size !== 'small' ? (
                  <Box direction="row" align="center" flex justify="between">
                    <Box direction="row">
                      <Box
                        round
                        pad="small"
                        border={{
                          color: 'accent-1',
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
                          <Anchor
                            title="home"
                            href="/"
                            color={
                              visualModeValue === 'dark' ? 'light-1' : 'dark-1'
                            }
                          >
                            lorenzo zenitsky
                          </Anchor>
                        </Heading>
                        <Text textAlign="center">
                          software engineer |{' '}
                          <Anchor href="mailto:lorenzoz@iastate.edu">
                            lorenzoz@iastate.edu
                          </Anchor>
                        </Text>
                        <Nav direction="row" gap="xsmall" justify="center">
                          <Anchor
                            title="GitHub"
                            icon={
                              <Github
                                color={
                                  visualModeValue === 'light'
                                    ? 'plain'
                                    : 'dark-3'
                                }
                              />
                            }
                            target="_blank"
                            href="https://github.com/lorenzoz23"
                          />
                          <Anchor
                            title="LinkedIn"
                            icon={
                              <Linkedin
                                color={
                                  visualModeValue === 'light'
                                    ? 'plain'
                                    : '#00BBFF'
                                }
                              />
                            }
                            target="_blank"
                            href="https://www.linkedin.com/in/lorenzo-zenitsky-823257171/"
                          />
                          <Anchor
                            title="YouTube"
                            icon={<Youtube color="plain" />}
                            target="_blank"
                            href="https://www.youtube.com/user/gdzenitsky"
                          />
                          <Anchor
                            title="letterboxd"
                            icon={
                              <Multimedia
                                color={
                                  visualModeValue === 'light'
                                    ? 'plain'
                                    : 'dark-3'
                                }
                              />
                            }
                            target="_blank"
                            href="https://letterboxd.com/lorenzoz/"
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
                      animation={{ type: 'pulse', duration: 500 }}
                      direction="row-reverse"
                    >
                      <Anchor href="/" title="home">
                        <Avatar
                          border={{
                            color: 'accent-1',
                            size: 'small',
                            style: 'solid'
                          }}
                          round="full"
                          size="xlarge"
                          src="../website-images/64slices.png"
                        />
                      </Anchor>
                      <Clock type="digital" margin="small" />
                    </Box>
                  </Box>
                ) : (
                  <Box gap="small" align="center">
                    <Box
                      round
                      pad="small"
                      border={{
                        color: 'accent-1',
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
                        <Anchor
                          href="/"
                          color={
                            visualModeValue === 'dark' ? 'light-1' : 'dark-1'
                          }
                        >
                          lorenzo zenitsky
                        </Anchor>
                      </Heading>
                      <Text textAlign="center">
                        software engineer |{' '}
                        <Anchor href="mailto:lorenzoz@iastate.edu">
                          lorenzoz@iastate.edu
                        </Anchor>
                      </Text>
                      <Nav direction="row" gap="xsmall" justify="center">
                        <Anchor
                          icon={
                            <Github
                              color={
                                visualModeValue === 'light' ? 'plain' : 'dark-3'
                              }
                            />
                          }
                          target="_blank"
                          href="https://github.com/lorenzoz23"
                        />
                        <Anchor
                          icon={
                            <Linkedin
                              color={
                                visualModeValue === 'light'
                                  ? 'plain'
                                  : '#00BBFF'
                              }
                            />
                          }
                          target="_blank"
                          href="https://www.linkedin.com/in/lorenzo-zenitsky-823257171/"
                        />
                        <Anchor
                          icon={<Youtube color="plain" />}
                          target="_blank"
                          href="https://www.youtube.com/user/gdzenitsky"
                        />
                        <Anchor
                          title="letterboxd"
                          icon={
                            <Multimedia
                              color={
                                visualModeValue === 'light' ? 'plain' : 'dark-3'
                              }
                            />
                          }
                          target="_blank"
                          href="https://letterboxd.com/lorenzoz/"
                        />
                      </Nav>
                    </Box>
                    <Box direction="row">
                      <Box alignSelf="center">
                        <Menu
                          dropAlign={{
                            top: 'bottom'
                          }}
                          dropBackground="accent-1"
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
                            }
                          ]}
                        />
                      </Box>
                      <Box alignSelf="center" margin="small" width="xsmall">
                        <Select
                          disabled={visualModeValue === 'light' ? [0] : [1]}
                          icon={<Magic size="20px" />}
                          onChange={({ option }) => setMode(option)}
                          size="small"
                          options={['light', 'dark']}
                          placeholder="mode"
                        />
                      </Box>
                    </Box>
                  </Box>
                )}
              </AppBar>
              <Box flex overflow={{ horizontal: 'hidden' }} pad="medium">
                <Switch>
                  <Route
                    path="/projects"
                    render={(props) => (
                      <CodeProjects {...props} mode={visualModeValue} />
                    )}
                  />
                  <Route
                    path="/hobbies"
                    render={(props) => (
                      <Hobbies {...props} mode={visualModeValue} />
                    )}
                  />
                  <Route
                    path="/experience"
                    render={(props) => (
                      <Experience {...props} mode={visualModeValue} />
                    )}
                  />
                  <Route path="/" component={HomePage} />
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
