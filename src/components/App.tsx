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
  Anchor
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
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  const [redirect, setRedirect] = React.useState(false);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Router>
            <Box fill background="home">
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
                      <Anchor icon={<Github />} />
                      <Anchor icon={<Linkedin />} />
                      <Anchor icon={<Youtube />} />
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
                        onClick={() => setRedirect(false)}
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
                      <Tab title="projects" onClick={() => setRedirect(false)}>
                        <Redirect to="/projects" />
                      </Tab>
                      <Tab title="music" onClick={() => setRedirect(false)}>
                        <Redirect to="/music" />
                      </Tab>
                      <Tab
                        title="the yada yada"
                        onClick={() => setRedirect(false)}
                      >
                        <Redirect to="/yikes" />
                      </Tab>
                    </Tabs>
                  )}
                </Box>
                <Box pad={{ right: 'small' }} animation="pulse">
                  <Avatar
                    onClick={() => setRedirect(true)}
                    size="xlarge"
                    src="../website-images/64slices.png"
                  />
                </Box>
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                {redirect ? <Redirect to="/" /> : null}
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
