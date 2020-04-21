import React from 'react';
import {
  Box,
  Carousel,
  RangeInput,
  Heading,
  Image,
  ResponsiveContext,
  Button,
  Collapsible,
  Text,
  Video,
  Layer,
  Markdown
} from 'grommet';
import { FormClose, Gift, Eject } from 'grommet-icons';

const WarZone = () => {
  const [value, setValue] = React.useState(23);
  const [showSidebar, setShowSidebar] = React.useState(false);

  const btnTxt = "i'm feeling like " + value + '% of my total self today!';

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align="center" justify="center" gap="small">
            <Markdown>
              **welcome to my demented playground of UI fun where there's
              nowhere to [go](/) but down!**
            </Markdown>
            <Carousel controls="selectors" margin="small" play={10000}>
              <Image fit="cover" src="website-images/niles.jpg" />
              <Image fit="cover" src="website-images/64slices.png" />
              <Image fit="cover" src="website-images/niles2.jpg" />
            </Carousel>
            <RangeInput
              style={{ padding: 15 }}
              value={value}
              onChange={(event: any) => setValue(event.target.value)}
            />
            <Text textAlign="center">{btnTxt}</Text>
            <Button
              hoverIndicator
              icon={<Gift />}
              margin="small"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </Box>

          {!showSidebar || size !== 'small' ? (
            <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width="large"
                background="sidebar"
                elevation="small"
                align="center"
                justify="center"
              >
                <Video fit="cover">
                  <source
                    key="video"
                    src="assets/yadayada.mp4"
                    type="video/mp4"
                  />
                  <track
                    key="cc"
                    label="English"
                    kind="subtitles"
                    srcLang="en"
                    src="assets/yadayada.mp4"
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
              <Video fit="cover">
                <source
                  key="video"
                  src="assets/yadayada.mp4"
                  type="video/mp4"
                />
                <track
                  key="cc"
                  label="English"
                  kind="subtitles"
                  srcLang="en"
                  src="assets/yadayada.mp4"
                  default
                />
              </Video>
            </Layer>
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default WarZone;
