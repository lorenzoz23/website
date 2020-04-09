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
  ResponsiveContext,
  Video,
  Menu,
  RangeInput
} from 'grommet';
import { FormClose, Gift } from 'grommet-icons';

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
  const [showSidebar, setShowSidebar] = useState(false);
  const [value, setValue] = React.useState(10);

  const btnTxt = "i'm feeling like " + value + '% of my total self today!';
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill background="home">
            <AppBar>
              <Menu
                dropBackground="#71F981"
                label={
                  <Heading level="3" margin="none">
                    my website
                  </Heading>
                }
                items={[
                  { label: 'projects' },
                  { label: 'music' },
                  { label: 'other' }
                ]}
              />
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
