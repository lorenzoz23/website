import React, { useEffect } from 'react';
import { Box, Button } from 'grommet';
import {
  Reactjs,
  Play,
  Language,
  System,
  Swift,
  Android,
  Car,
  Yoga,
  Multimedia,
  Ticket,
  Github,
  AidOption,
  Globe,
  Star,
  Spotify
} from 'grommet-icons';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Code = (props: any) => {
  useEffect(() => {
    document.title = 'projects | lorenzo zenitsky';
  }, []);
  return (
    <Box
      flex
      direction="column"
      align="center"
      justify="start"
      background="transparent"
    >
      <VerticalTimeline>
        <VerticalTimelineElement
          position="right"
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
          date="aug 2020 - present"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={<Star color={props.mode === 'dark' ? 'accent-1' : 'brand'} />}
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">film raters</h3>
          <h4 className="vertical-timeline-element-subtitle">
            vue web application
          </h4>
          <p>
            a simple, yet hopefully addictive game where users earn points and a
            spot on the leaderboards by guessing the IMDb rating of random films
            purely based off their name, plot, and poster
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            vue | typescript | vuetify | google firebase | TMDb api | netlify
          </p>
          <Box
            direction={props.size !== 'small' ? 'row' : 'column'}
            gap="small"
            pad={{ top: 'small' }}
          >
            <Button
              label="view website"
              primary
              href="https://filmraters.netlify.app/#/"
              target="_blank"
              icon={<Globe />}
            />
            <Button
              label="view source code"
              href="https://github.com/lorenzoz23/imdb-rating-game"
              target="_blank"
              icon={<Github />}
              reverse
            />
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="left"
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
          date="jul 2020 - present"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={
            <Spotify color={props.mode === 'dark' ? 'accent-1' : 'brand'} />
          }
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">moodqueue</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>
            a peer development project that allows premium spotify users to
            update their queues and non-premium users to create playlists based
            upon the type of music they're currently in the mood for
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            react | typescript | next.js | grommet ui | spotify web api | react
            hooks | circle-ci | heroku | jest | enzyme | chai | storybook |
            sentry analytics
          </p>
          <Box
            direction={props.size !== 'small' ? 'row' : 'column'}
            gap="small"
            pad={{ top: 'small' }}
          >
            <Button
              label="view website"
              primary
              href="https://moodqueue-stage.herokuapp.com/"
              target="_blank"
              icon={<Globe />}
            />
            <Button
              label="view source code"
              href="https://github.com/scott-street/moodqueue"
              target="_blank"
              icon={<Github />}
              reverse
            />
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
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
          date="may 2020 - jun 2020"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={
            <AidOption color={props.mode === 'dark' ? 'accent-1' : 'brand'} />
          }
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">idyllic paws</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react native mobile application
          </h4>
          <p>
            my loving attempt to provide my mom with a mobile app for her
            veterinary business that mirrors the information found on her
            website but also provides her clients with the ability to send
            forms, view priviledged information for emergencies, and schedule
            appointment reminders
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            react native | typescript | javascript | native base ui | react
            navigation
          </p>
          <Box align="start">
            <Button
              primary
              margin={{ top: 'small' }}
              label="view source code"
              href="https://github.com/lorenzoz23/idyllic-paws"
              target="_blank"
              icon={<Github />}
            />
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="left"
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
          date="may 2020 - present"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={<Ticket color={props.mode === 'dark' ? 'accent-1' : 'brand'} />}
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">cinelot</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>
            a reimagining of an old passion project of mine that was previously
            attempted as a senior-year college project - cinelot allows users to
            keep track of, update, and query their physical film collection on
            the go for both convenience and to avoid the pain of
            double-purchasing
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            react | typescript | javascript | google firebase | TMDb api |
            grommet ui | responsive | netlify
          </p>
          <Box
            direction={props.size !== 'small' ? 'row' : 'column'}
            gap="small"
            pad={{ top: 'small' }}
          >
            <Button
              label="visit website"
              primary
              href="https://cinelot.netlify.app/"
              target="_blank"
              icon={<Globe />}
            />
            <Button
              label="view source code"
              href="https://github.com/lorenzoz23/collections-react-web"
              target="_blank"
              icon={<Github />}
              reverse
            />
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
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
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">personal website</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>
            my online portfolio including my work experiences, past and current
            projects, and personal hobbies
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            react | typescript | javascript | grommet ui | react particles |
            trello api | responsive | google firebase | netlify
          </p>
          <Box
            direction={props.size !== 'small' ? 'row' : 'column'}
            gap="small"
            pad={{ top: 'small' }}
          >
            <Button
              label="visit website"
              primary
              href="/"
              target="_blank"
              icon={<Globe />}
            />
            <Button
              label="view source code"
              href="https://github.com/lorenzoz23/website"
              target="_blank"
              icon={<Github />}
              reverse
            />
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="left"
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
          date="jan - nov 2020"
          iconStyle={
            props.mode === 'dark'
              ? { background: '#7D4CDB' }
              : { background: '#6FFFB0' }
          }
          icon={<Car color={props.mode === 'dark' ? 'accent-1' : 'brand'} />}
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">
            parkour - a residential parking sharing system
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            react native mobile application
          </h4>
          <p>
            senior design project that allows users to find and pay for
            residential parking spaces or host their own for profit
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            mern stack | react native | typescript | redux | node | stripe api |
            google maps api
          </p>
          <Box align="start">
            <Button
              primary
              margin={{ top: 'small' }}
              label="view source code"
              href="https://github.com/lorenzoz23/Parkour"
              target="_blank"
              icon={<Github />}
            />
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
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
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">web search engine</h3>
          <h4 className="vertical-timeline-element-subtitle">
            java application
          </h4>
          <p>
            a rudimentary implementation of a search engine that crawls the web,
            downloads contents of web pages, constructs web graph to determine
            the importance of each web page, and builds an inverted index based
            on web page contents
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            java | jsoup | bfs | directed graphs | inverted index | hashmaps
          </p>
          <Box align="start">
            <Button
              primary
              margin={{ top: 'small' }}
              label="view source code"
              href="https://github.com/lorenzoz23/web-crawler-311"
              target="_blank"
              icon={<Github />}
            />
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="left"
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
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">unix-style shell</h3>
          <h4 className="vertical-timeline-element-subtitle">c program</h4>
          <p>
            a simple shell implementation which features support for multiple
            unix commands, pipe/more filter, forking, i/o redirection, and
            background execution
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            c | unix | linux console
          </p>
          <Box align="start">
            <Button
              primary
              margin={{ top: 'small' }}
              label="view source code"
              href="https://github.com/lorenzoz23/SIMPLE-UNIX"
              target="_blank"
              icon={<Github />}
            />
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
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
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">collections</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>
            a web app that allows its users to keep track of the films they own
            in any physical format - they may have the power to search and
            filter through their collection with tags associated with each film
            to make it easier to determine if they own a title or not to better
            prevent any future duplicate purchasing of physical titles
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            mern stack | typescript | javascript | ant design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="left"
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
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">music editor</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>
            passion project with a friend - a collaborative web-based music
            editing app (think google docs meets guitar pro) where users can tab
            out their music solo or collaborate with friends in groups to create
            something unique
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            mern stack | typescript | javascript | grommet
          </p>
          <Box align="start">
            <Button
              primary
              margin={{ top: 'small' }}
              label="view source code"
              href="https://github.com/gist-gist/gist"
              target="_blank"
              icon={<Github />}
            />
          </Box>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
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
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">
            maintainer tool for ui testing
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            mac desktop application
          </h4>
          <p>
            commissioned for buildertrend's mobile developers to provide them
            with a better means of storing and maintaining their json mock data
            used for ui testing through collaborative files stored on a shared
            github repository
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            xcode | swift | alamofire | github api
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="left"
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
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">issue tracker</h3>
          <h4 className="vertical-timeline-element-subtitle">
            react web application
          </h4>
          <p>
            web app to help buildertrend customers easily identify and register
            software issues by posting issues that go straight to the developers
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            react | typescript | ant design | .net core | c# | node.js
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
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
          style={{ zIndex: 1 }}
        >
          <h3 className="vertical-timeline-element-title">
            alarmitron - alarm clock app
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            android mobile application
          </h4>
          <p>
            a simple android alarm clock app built with three friends over one
            semester
          </p>
          <p style={{ color: props.mode === 'light' ? '#6f6f6f' : '#FFFFAC' }}>
            android studio | java | mysql | spring boot
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default Code;
