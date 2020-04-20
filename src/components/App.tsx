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
  Clock
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
import { default as MusicProjects } from './Music';

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
                    <Nav direction="row" gap="xsmall" justify="center">
                      <Anchor
                        icon={<Github />}
                        target="_blank"
                        href="https://github.com/lorenzoz23"
                      />
                      <Anchor
                        icon={<Linkedin />}
                        target="_blank"
                        href="https://www.linkedin.com/in/lorenzo-zenitsky-823257171/"
                      />
                      <Anchor
                        icon={<Youtube />}
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
                                to="/music"
                                style={{ textDecoration: 'none' }}
                              >
                                music
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
                      <Tab title="projects">
                        <Redirect to="/projects" />
                      </Tab>
                      <Tab title="music">
                        <Redirect to="/music" />
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
                    size="xlarge"
                    src="../website-images/64slices.png"
                    onClick={() => {}}
                  />
                  <Clock type="digital" margin="small" />
                </Box>
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Switch>
                  <Route path="/projects">
                    <CodeProjects />
                  </Route>
                  <Route path="/music">
                    <MusicProjects />
                  </Route>
                  <Route path="/yikes">
                    <WarZone />
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
