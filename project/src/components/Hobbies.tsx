import React, { useState } from 'react';
import {
  Box,
  Heading,
  Paragraph,
  ResponsiveContext,
  Button,
  Collapsible,
  Form,
  FormField,
  TextInput,
  TextArea
} from 'grommet';
import { Music, Ticket, Contact, FormClose } from 'grommet-icons';

import Trello from './Trello';

const Hobbies = (props: any) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [messageValue, setMessageValue] = useState('');

  const resetForm = () => {
    setFormValue({});
    setMessageValue('');
  };

  const formChange = (value: {}) => {
    setFormValue(value);
    console.log(value);
  };
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box direction="row">
          <Box flex align="center" justify="start" background="home">
            <Heading textAlign="center">my interests</Heading>
            <Box
              direction="row"
              gap="medium"
              pad={{ bottom: size !== 'small' ? 'small' : 'large' }}
            >
              <Music color="brand" />
              <Ticket color="brand" />
            </Box>
            <Paragraph size="large" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
            <Heading level={2}>Trello Boards</Heading>
            <Box
              direction={size !== 'small' ? 'row' : 'column'}
              gap={size !== 'small' ? 'large' : '250px'}
              margin={{ bottom: size !== 'small' ? '250px' : '600px' }}
            >
              <Trello id="268G14hT" divLabel="metal-2020" />
              <Trello id="aHi0ZFuA" divLabel="indie-alternative-2020" />
              <Trello id="KKDGm1Bx" divLabel="website" />
            </Box>
            <Box
              round="full"
              style={{ display: showSidebar ? 'none' : 'inline' }}
            >
              <Button
                title="send an email"
                primary
                color={props.mode === 'light' ? 'brand' : 'accent-1'}
                icon={
                  <Contact
                    color={props.mode === 'light' ? 'accent-1' : 'brand'}
                  />
                }
                reverse
                onClick={() => setShowSidebar(!showSidebar)}
                style={{
                  position: 'fixed',
                  bottom: '20px',
                  right: '30px',
                  zIndex: 99,
                  padding: '15px'
                }}
              />
            </Box>
          </Box>
          <Collapsible direction="horizontal" open={showSidebar}>
            <Button
              focusIndicator={false}
              icon={
                <FormClose
                  color={props.mode === 'light' ? 'brand' : 'accent-1'}
                />
              }
              onClick={() => setShowSidebar(!showSidebar)}
            />
            <Box
              flex
              width="large"
              background="light-2"
              elevation={props.mode === 'light' ? 'small' : 'none'}
              align="center"
              justify="center"
              overflow="hidden"
            >
              <Form
                value={formValue}
                onChange={(nextValue: React.SetStateAction<{}>) =>
                  formChange(nextValue)
                }
                onReset={() => resetForm()}
                onSubmit={() => console.log('submitted')}
              >
                <FormField name="name" htmlFor="text-input-id" label="name">
                  <TextInput id="text-input-id" name="name" size="xlarge" />
                </FormField>
                <FormField name="email" htmlFor="email-input-id" label="email">
                  <TextInput
                    id="email-input-id"
                    name="emailText"
                    required
                    size="xlarge"
                  />
                </FormField>
                <FormField name="email" htmlFor="email-input-id" required>
                  <TextArea
                    required
                    focusIndicator
                    size="xlarge"
                    id="message-input-id"
                    placeholder="message"
                    value={messageValue}
                    onChange={(event) => setMessageValue(event.target.value)}
                  />
                </FormField>
                <Box direction="row" gap="medium" justify="between">
                  <Button type="submit" primary label="submit" />
                  <Button type="reset" label="reset" />
                </Box>
              </Form>
            </Box>
          </Collapsible>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Hobbies;
