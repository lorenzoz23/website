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
              ? { background: 'rgb(233, 30, 99)' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  rgb(233, 30, 99)' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="apr 2020 - present"
          iconStyle={{ background: '#71F981' }}
          icon={<Yoga color="brand" />}
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
              ? { background: 'rgb(33, 150, 243)' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  rgb(33, 150, 243)' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="jan 2020 - present"
          iconStyle={{ background: '#71F981' }}
          icon={<Car color="brand" />}
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
              ? { background: 'rgb(233, 30, 99)' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  rgb(233, 30, 99)' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="nov 2019"
          iconStyle={{ background: '#71F981' }}
          icon={<Language color="brand" />}
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
              ? { background: 'rgb(33, 150, 243)' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  rgb(33, 150, 243)' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="oct 2019"
          iconStyle={{ background: '#71F981' }}
          icon={<System color="brand" />}
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
              ? { background: 'rgb(233, 30, 99)' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  rgb(233, 30, 99)' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="oct - dec 2019"
          iconStyle={{ background: '#71F981' }}
          icon={<Multimedia color="brand" />}
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
              ? { background: 'rgb(33, 150, 243)' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  rgb(33, 150, 243)' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="aug 2019 - present"
          iconStyle={{ background: '#71F981' }}
          icon={<Play color="brand" />}
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
              ? { background: 'rgb(233, 30, 99)' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  rgb(233, 30, 99)' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="jun - aug 2019"
          iconStyle={{ background: '#71F981' }}
          icon={<Swift color="brand" />}
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
              ? { background: 'rgb(33, 150, 243)' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid  rgb(33, 150, 243)' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="may - jun 2019"
          iconStyle={{ background: '#71F981' }}
          icon={<Reactjs color="brand" />}
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
              ? { background: 'rgb(233, 30, 99)' }
              : { background: 'rgb(255, 255, 255)' }
          }
          contentArrowStyle={
            props.mode === 'dark'
              ? { borderRight: '7px solid rgb(233, 30, 99)' }
              : { borderRight: '7px solid  rgb(255, 255, 255)' }
          }
          className="vertical-timeline-element--work"
          date="aug - dec 2018"
          iconStyle={{ background: '#71F981' }}
          icon={<Android color="brand" />}
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
