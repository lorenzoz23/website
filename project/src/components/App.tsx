import React, { useState } from 'react';
import {
  Box,
  Grommet,
  Heading,
  Menu,
  ResponsiveContext,
  Tabs,
  Tab,
  Nav,
  Anchor,
  Select,
  CheckBox
} from 'grommet';
import { Home, Github, Linkedin, Magic, Menu as MenuIcon } from 'grommet-icons';
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
import Email from './Email';
import Particles from 'react-particles-js';

const themeLight = {
  global: {
    colors: {
      home: '#ECF0F1'
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
      home: '#363E4B'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
};

const App = () => {
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
            <Box fill background="home" pad="small">
              <AppBar>
                {size !== 'small' ? (
                  <Box direction="row" align="center" flex justify="between">
                    <Box direction="row">
                      <Box
                        round
                        pad={{ horizontal: 'medium', vertical: 'small' }}
                        border={{
                          color: 'accent-1',
                          size: 'small',
                          style: 'outset',
                          side: 'all'
                        }}
                      >
                        <Heading textAlign="center" level="2" margin="none">
                          lorenzo zenitsky
                        </Heading>
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
                          <Box align="center" justify="center">
                            <Email mode={visualModeValue} />
                          </Box>
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
                            href="https://www.linkedin.com/in/lorenzoz/"
                          />
                        </Nav>
                      </Box>
                      <Box direction="row" align="center">
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
                      </Box>
                      <Box
                        align="center"
                        alignSelf="center"
                        justify="center"
                        pad={{ left: 'medium' }}
                        border={{ side: 'left', size: 'small' }}
                      >
                        <CheckBox
                          toggle
                          label="dark theme"
                          checked={visualModeValue === 'dark'}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setMode('dark');
                            } else setMode('light');
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Box gap="small" align="center">
                    <Box
                      round
                      pad={{ horizontal: 'medium', vertical: 'small' }}
                      border={{
                        color: 'accent-1',
                        size: 'small',
                        style: 'outset',
                        side: 'all'
                      }}
                    >
                      <Heading
                        style={{ textAlign: 'center' }}
                        level="1"
                        margin="none"
                      >
                        lorenzo zenitsky
                      </Heading>
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
                            <Home
                              color={
                                visualModeValue === 'light'
                                  ? 'brand'
                                  : 'accent-1'
                              }
                            />
                          }
                          href="/"
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
                          href="https://www.linkedin.com/in/lorenzoz/"
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
                          label={<MenuIcon />}
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
                      <Box alignSelf="center" margin="small" width="120px">
                        <Select
                          alignSelf="center"
                          disabled={visualModeValue === 'light' ? [0] : [1]}
                          icon={<Magic size="20px" />}
                          onChange={({ option }) => setMode(option)}
                          size="small"
                          options={['light', 'dark']}
                          placeholder="theme"
                        />
                      </Box>
                    </Box>
                  </Box>
                )}
              </AppBar>
              <Box
                flex
                overflow={{ horizontal: 'hidden' }}
                pad="medium"
                background="transparent"
                style={{ zIndex: 1 }}
              >
                <Switch>
                  <Route
                    path="/projects"
                    render={(props) => (
                      <CodeProjects
                        {...props}
                        mode={visualModeValue}
                        size={size}
                      />
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
                  <Route path="/" render={HomePage} />
                </Switch>
                {size === 'small' && (
                  <Box align="center">
                    <Email mode={visualModeValue} />
                  </Box>
                )}
              </Box>
              <Particles
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0
                }}
                params={{
                  particles: {
                    number: {
                      value: size !== 'small' ? 75 : 25
                    },
                    size: {
                      value: 3
                    },
                    color: {
                      value: visualModeValue === 'light' ? '#363E4B' : undefined
                    },
                    links: {
                      color: visualModeValue === 'light' ? '#363E4B' : undefined
                    }
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: 'repulse'
                      }
                    }
                  }
                }}
              />
            </Box>
          </Router>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
