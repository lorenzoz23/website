import React from 'react';
import { Box } from 'grommet';
import {
  Reactjs,
  Play,
  Language,
  System,
  Swift,
  Android,
  Car,
  Yoga
} from 'grommet-icons';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Code = () => {
  return (
    <Box
      flex
      direction="column"
      align="center"
      justify="start"
      background="home"
    >
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="apr, 2020 - present"
          iconStyle={{ background: '#71F981' }}
          icon={<Yoga color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">personal website</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>grommet ui, node.js</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="jan, 2020 - present"
          iconStyle={{ background: '#71F981' }}
          icon={<Car color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">
            parkour - a parking sharing system
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            react native mobile application
          </h4>
          <p>senior design project, mern stack, typescript</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="aug, 2019 - present"
          iconStyle={{ background: '#71F981' }}
          icon={<Play color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">
            react music editor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>mern stack, typescript, grommet ui</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="nov, 2019"
          iconStyle={{ background: '#71F981' }}
          icon={<Language color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">web search engine</h3>
          <h4 className="vertical-timeline-element-subtitle">
            java application
          </h4>
          <p>bfs, web graphs, hashmaps</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="oct, 2019"
          iconStyle={{ background: '#71F981' }}
          icon={<System color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">unix-style shell</h3>
          <h4 className="vertical-timeline-element-subtitle">c program</h4>
          <p>
            unix commands, pipe/more filter, forking, i/o redirection,
            background execution
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="jun - aug, 2019"
          iconStyle={{ background: '#71F981' }}
          icon={<Swift color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">
            maintainer tool for ui testing
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            mac desktop application
          </h4>
          <p>swift, xcode, alamofire, github api</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="may - jun, 2019"
          iconStyle={{ background: '#71F981' }}
          icon={<Reactjs color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">issue tracker</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>ant design ui, node.js, c#, .net core</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="aug - dec, 2018"
          iconStyle={{ background: '#71F981' }}
          icon={<Android color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">alarm clock app</h3>
          <h4 className="vertical-timeline-element-subtitle">
            android mobile application
          </h4>
          <p>java, spring boot, mysql</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default Code;
