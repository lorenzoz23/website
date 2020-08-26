import React, { useEffect } from 'react';
import { Box } from 'grommet';
import { Music, Ticket, VmMaintenance, Reactjs } from 'grommet-icons';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = (props: any) => {
  useEffect(() => {
    document.title = 'experience | lorenzo zenitsky';
  }, []);
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
          contentStyle={
            props.mode === 'dark'
              ? { background: '#00739D' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  #00739D' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="jan 2020 - present"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#8DDDEC' }
          }
          icon={
            <VmMaintenance
              color={props.mode === 'dark' ? 'accent-1' : 'brand'}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            data science student worker
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            isu extension and outreach - ames, ia
          </h4>
          <p>maintainer of large codebase, performance tester</p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            php | mysql | html | css | javascript
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={
            props.mode === 'dark'
              ? { background: '#A2423D' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  #A2423D' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="may - aug 2019"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#8DDDEC' }
          }
          icon={
            <Reactjs color={props.mode === 'dark' ? 'accent-1' : 'brand'} />
          }
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
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            react | typescript | .net core | c# | sql server | ant design |
            xcode | swift | alamofire | github api
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={
            props.mode === 'dark'
              ? { background: '#00739D' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  #00739D' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="may 2015 - jun 2019"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#8DDDEC' }
          }
          icon={<Ticket color={props.mode === 'dark' ? 'accent-1' : 'brand'} />}
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
          contentStyle={
            props.mode === 'dark'
              ? { background: '#A2423D' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  #A2423D' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="mar - jun 2015"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#8DDDEC' }
          }
          icon={<Music color={props.mode === 'dark' ? 'accent-1' : 'brand'} />}
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
