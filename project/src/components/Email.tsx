import React, { useState } from 'react';
import {
  Collapsible,
  Button,
  Box,
  Form,
  FormField,
  TextInput,
  TextArea,
  ResponsiveContext,
  Layer,
  Heading
} from 'grommet';
import { FormClose, Contact, MailOption } from 'grommet-icons';

const Email = (props: any) => {
  const [formValue, setFormValue] = useState({});
  const [messageValue, setMessageValue] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);

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
          <Button
            title="send an email"
            primary
            color={props.mode === 'light' ? 'brand' : 'accent-1'}
            icon={
              <Contact color={props.mode === 'light' ? 'accent-1' : 'brand'} />
            }
            onClick={() => setShowSidebar(!showSidebar)}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '30px',
              zIndex: 99,
              padding: '15px',
              display: showSidebar ? 'none' : 'inline'
            }}
          />
          {!showSidebar || size === 'large' ? (
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
                <Heading>send an email!</Heading>
                <Box>
                  <MailOption
                    color={props.mode === 'light' ? 'brand' : 'accent-1'}
                  />
                </Box>
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
                  <FormField
                    name="email"
                    htmlFor="email-input-id"
                    label="email"
                  >
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
                    <Button type="submit" primary label="send" />
                    <Button type="reset" label="reset" />
                  </Box>
                </Form>
              </Box>
            </Collapsible>
          ) : (
            <Layer
              position="center"
              onClickOutside={() => setShowSidebar(!showSidebar)}
            >
              <Box
                margin="medium"
                flex
                background="light-2"
                align="center"
                justify="center"
                overflow="auto"
              >
                <Heading>send an email!</Heading>
                <Box>
                  <MailOption
                    color={props.mode === 'light' ? 'brand' : 'accent-1'}
                  />
                </Box>

                <Form
                  value={formValue}
                  onChange={(nextValue: React.SetStateAction<{}>) =>
                    formChange(nextValue)
                  }
                  onReset={() => resetForm()}
                  onSubmit={() => console.log('submitted')}
                >
                  <FormField
                    margin={{
                      left: '48px',
                      right: '48px',
                      top: 'small',
                      bottom: 'small'
                    }}
                    name="name"
                    htmlFor="text-input-id"
                    label="name"
                  >
                    <TextInput id="text-input-id" name="name" />
                  </FormField>
                  <FormField
                    margin={{
                      left: '48px',
                      right: '48px',
                      top: 'small',
                      bottom: 'small'
                    }}
                    name="email"
                    htmlFor="email-input-id"
                    label="email"
                  >
                    <TextInput id="email-input-id" name="emailText" required />
                  </FormField>
                  <FormField
                    name="email"
                    htmlFor="email-input-id"
                    required
                    margin={{
                      left: '48px',
                      right: '48px',
                      top: 'small',
                      bottom: 'small'
                    }}
                  >
                    <TextArea
                      required
                      focusIndicator
                      id="message-input-id"
                      placeholder="message"
                      value={messageValue}
                      onChange={(event) => setMessageValue(event.target.value)}
                    />
                  </FormField>
                  <Box direction="row" justify="between" margin="medium">
                    <Button
                      type="submit"
                      color="status-ok"
                      label="send"
                      size="small"
                    />
                    <Button
                      type="reset"
                      label="reset"
                      color="status-warning"
                      size="small"
                    />
                    <Button
                      color="status-critical"
                      label="cancel"
                      size="small"
                      onClick={() => setShowSidebar(!showSidebar)}
                    />
                  </Box>
                </Form>
              </Box>
            </Layer>
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Email;
