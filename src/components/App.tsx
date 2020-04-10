import React from 'react';
import {
  Box,
  Grommet,
  Heading,
  Menu,
  ResponsiveContext,
  Tabs,
  Tab
} from 'grommet';
import { Home } from 'grommet-icons';
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
    elevation: {
      dark: {
        medium: '0px 6px 8px rgba(46, 204, 113, .40)'
      }
    },
    colors: {
      home: '#ECF0F1',
      body: '#FCF3CF',
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
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App(props: any) {
  const [redirect, setRedirect] = React.useState(false);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Router>
            <Box fill background="body">
              <AppBar>
                <Box
                  round
                  onClick={() => setRedirect(true)}
                  pad="small"
                  border={{
                    color: '#71F981',
                    size: 'small',
                    style: 'outset',
                    side: 'all'
                  }}
                >
                  <Heading level="2" margin="none">
                    lorenzo zenitsky
                  </Heading>
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
                  <Tabs>
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
              </AppBar>
              <Box
                direction="row"
                flex
                overflow={{ horizontal: 'hidden' }}
                border={{
                  color: '#F1948A ',
                  size: 'large',
                  style: 'outset',
                  side: 'all'
                }}
              >
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
