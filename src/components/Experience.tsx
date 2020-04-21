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
          date="2019 - present"
          iconStyle={{ background: '#8DDDEC' }}
          icon={<VmMaintenance color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">
            data science student worker
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            isu extension and outreach
          </h4>
          <p>maintainer of large codebase, performance tester</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={{ background: '#8DDDEC' }}
          icon={<Reactjs color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">
            software development intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">buildertrend</h4>
          <p>
            frontend/backend developer of both react web and mac desktop
            applications
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2019"
          iconStyle={{ background: '#8DDDEC' }}
          icon={<Ticket color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">food/drink server</h3>
          <h4 className="vertical-timeline-element-subtitle">flix brewhouse</h4>
          <p>
            box office host, food/drink runner, concession maker, server,
            employee trainer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015"
          iconStyle={{ background: '#8DDDEC' }}
          icon={<Music color="brand" />}
        >
          <h3 className="vertical-timeline-element-title">guitar luthier</h3>
          <h4 className="vertical-timeline-element-subtitle">
            ye olde guitar shoppe
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
