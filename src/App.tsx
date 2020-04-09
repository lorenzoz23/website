import React, { useState } from 'react';
import {
  Box,
  Button,
  Carousel,
  Clock,
  Collapsible,
  Grommet,
  Heading,
  Image,
  Layer,
  Menu,
  RangeInput,
  ResponsiveContext,
  Video
} from 'grommet';
import { FormClose, Gift, Projects, Music, Code, Home } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#3865C1',
      home: '#52B8FF',
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
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [menuLabel, setMenuLabel] = React.useState('home');
  const iconArr = [
    <Home size="medium" />,
    <Code size="medium" />,
    <Music size="medium" />,
    <Projects size="medium" />
  ];

  const btnTxt = "i'm feeling like " + value + '% of my total self today!';
  const menuTitle = (
    <Heading level="2" margin="none">
      {menuLabel}
    </Heading>
  );
  const icon =
    menuLabel == 'projects'
      ? iconArr[1]
      : menuLabel == 'music'
      ? iconArr[2]
      : menuLabel == 'other'
      ? iconArr[3]
      : iconArr[0];
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill background="home">
            <AppBar>
              <Menu
                dropBackground="#71F981"
                label={icon}
                items={[
                  {
                    label: 'home',
                    onClick: () => setMenuLabel('home')
                  },
                  {
                    label: 'projects',
                    onClick: () => setMenuLabel('projects')
                  },
                  {
                    label: 'music',
                    onClick: () => setMenuLabel('music')
                  },
                  {
                    label: 'other',
                    onClick: () => setMenuLabel('other')
                  }
                ]}
              />
              {menuTitle}
              <Button
                hoverIndicator
                icon={<Gift />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align="center" justify="center">
                <Clock type="digital" />
                <Carousel controls="selectors" margin="medium" play={10000}>
                  <Image fit="cover" src="website-images/niles.jpg" />
                  <Image fit="cover" src="website-images/64slices.png" />
                  <Image fit="cover" src="website-images/niles2.jpg" />
                </Carousel>
                <RangeInput
                  style={{ padding: 15 }}
                  value={value}
                  onChange={(event: any) => setValue(event.target.value)}
                />
                <Heading level="4" margin="none">
                  {btnTxt}
                </Heading>
              </Box>
              {!showSidebar || size !== 'small' ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="sidebar"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    <Video fit="cover">
                      <source
                        key="video"
                        src="assets/bday.mp4"
                        type="video/mp4"
                      />
                      <track
                        key="cc"
                        label="English"
                        kind="subtitles"
                        srcLang="en"
                        src="assets/bday.mp4"
                        default
                      />
                    </Video>
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="sidebar"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="sidebar"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
