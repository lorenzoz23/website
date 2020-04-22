import React from 'react';
import { Box } from 'grommet';
import { Music, Ticket, VmMaintenance, Reactjs } from 'grommet-icons';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
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
          date="jan 2020 - present"
          iconStyle={{ background: '#8DDDEC' }}
          icon={<VmMaintenance color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">
            data science student worker
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            isu extension and outreach - ames, ia
          </h4>
          <p>maintainer of large codebase, performance tester</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="may - aug 2019"
          iconStyle={{ background: '#8DDDEC' }}
          icon={<Reactjs color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">
            software development intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            buildertrend - omaha, ne
          </h4>
          <p>
            frontend/backend developer of both react web and mac desktop
            applications
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="may 2015 - jun 2019"
          iconStyle={{ background: '#8DDDEC' }}
          icon={<Ticket color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">food/drink server</h3>
          <h4 className="vertical-timeline-element-subtitle">
            flix brewhouse - des moines, ia
          </h4>
          <p>
            box office host, food/drink runner, concession maker, server,
            employee trainer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="mar - jun 2015"
          iconStyle={{ background: '#8DDDEC' }}
          icon={<Music color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">guitar luthier</h3>
          <h4 className="vertical-timeline-element-subtitle">
            ye olde guitar shoppe - des moines, ia
          </h4>
          <p>
            repairer/maintainer of various stringed instruments, customer
            assistance
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default Experience;
