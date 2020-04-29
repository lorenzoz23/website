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
  Yoga,
  Multimedia
} from 'grommet-icons';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Code = (props: any) => {
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
              ? { background: '#A2423D' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  #A2423D' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="apr 2020 - present"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={<Yoga color={props.mode === 'dark' ? 'accent-1' : 'brand'} />}
        >
          <h3 className="vertical-timeline-element-title">personal website</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>
            my online portfolio; developed with typescript, grommet ui, and
            node.js
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
          date="jan 2020 - present"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={<Car color={props.mode === 'dark' ? 'accent-1' : 'brand'} />}
        >
          <h3 className="vertical-timeline-element-title">
            parkour - a residential parking sharing system
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            react native mobile application
          </h4>
          <p>
            senior design project that allows users to find parking spaces or
            host parking spaces; developed using the mern stack, typescript, and
            redux
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
          date="nov 2019"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={
            <Language color={props.mode === 'dark' ? 'accent-1' : 'brand'} />
          }
        >
          <h3 className="vertical-timeline-element-title">web search engine</h3>
          <h4 className="vertical-timeline-element-subtitle">
            java application
          </h4>
          <p>
            a rudimentary implementation of a search engine that crawls the web,
            downloads contents of web pages, and constructs web graph; developed
            using bfs, directed graphs, and hashmaps
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
          date="oct 2019"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={<System color={props.mode === 'dark' ? 'accent-1' : 'brand'} />}
        >
          <h3 className="vertical-timeline-element-title">unix-style shell</h3>
          <h4 className="vertical-timeline-element-subtitle">c program</h4>
          <p>
            a simple shell implementation which features support for unix
            commands, pipe/more filter, forking, i/o redirection, and background
            execution
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
          date="oct - dec 2019"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={
            <Multimedia color={props.mode === 'dark' ? 'accent-1' : 'brand'} />
          }
        >
          <h3 className="vertical-timeline-element-title">collections</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>
            web app to help users keep track of their film collection to better
            avoid repeat purchases; developed using ant design ui and the mern
            stack
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
          date="aug 2019 - present"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={<Play color={props.mode === 'dark' ? 'accent-1' : 'brand'} />}
        >
          <h3 className="vertical-timeline-element-title">music editor</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>
            passion project with a friend, similar in nature to guitar pro but
            with a social twist; developed using mern stack, typescript, grommet
            ui
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
          date="jun - aug 2019"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={<Swift color={props.mode === 'dark' ? 'accent-1' : 'brand'} />}
        >
          <h3 className="vertical-timeline-element-title">
            maintainer tool for ui testing
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            mac desktop application
          </h4>
          <p>
            used to better support buildtrend mobile developers in maintaining
            their JSON mock data for ui testing; developed with swift, xcode,
            alamofire, and github api
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
          date="may - jun 2019"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={
            <Reactjs color={props.mode === 'dark' ? 'accent-1' : 'brand'} />
          }
        >
          <h3 className="vertical-timeline-element-title">issue tracker</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>
            web app to help users of buildertrend's software easily identify and
            register software issues; developed using ant design ui, node.js,
            c#, and .net core
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
              ? { borderRight: '7px solid #A2423D' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="aug - dec 2018"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={
            <Android color={props.mode === 'dark' ? 'accent-1' : 'brand'} />
          }
        >
          <h3 className="vertical-timeline-element-title">
            alarmitron - alarm clock app
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            android mobile application
          </h4>
          <p>
            a simple android alarm clock app built with three friends over one
            semester; developed using java, spring boot, and mysql
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default Code;
