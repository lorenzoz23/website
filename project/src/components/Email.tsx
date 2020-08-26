import React, { useState } from 'react';
import {
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
import { FormClose, Contact, Refresh, Send } from 'grommet-icons';
import firebase from 'firebase/app';
import 'firebase/database';
import { NotificationType } from '../types/NotificationType';
import Notification from './Notification';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_CONFIG_API_KEY,
  authDomain: 'my-website-47a3f.firebaseapp.com',
  databaseURL: 'https://my-website-47a3f.firebaseio.com',
  storageBucket: 'my-website-47a3f.appspot.com'
};
firebase.initializeApp(firebaseConfig);

const defaultFormValues = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const defaultNotificationValues: NotificationType = {
  show: false,
  text: '',
  success: false
};

const Email = (props: any) => {
  const [formValue, setFormValue] = useState(defaultFormValues);
  const [showLayer, setShowLayer] = useState(false);
  const [notificationObject, setShowNotificationObject] = useState(
    defaultNotificationValues
  );
  const emailMessageRef = firebase.database().ref('emailMessage');

  const formChange = (value: any) => {
    setFormValue(value);
    console.log(value);
  };

  const saveEmailMessage = () => {
    const newEmailMessageRef = emailMessageRef.push();
    newEmailMessageRef
      .set({
        name: formValue.name,
        email: formValue.email,
        subject: formValue.subject,
        message: formValue.message
      })
      .then(() => {
        let n: NotificationType = {
          show: true,
          success: true,
          text: 'email successfully sent!'
        };
        setShowNotificationObject(n);
        setTimeout(() => {
          n = {
            success: true,
            show: false,
            text: ''
          };
          setShowNotificationObject(n);
        }, 4000);
      })
      .catch(() => {
        let n: NotificationType = {
          show: true,
          success: false,
          text: 'email failed to send!'
        };
        setShowNotificationObject(n);
        setTimeout(() => {
          n = {
            success: false,
            show: false,
            text: ''
          };
          setShowNotificationObject(n);
        }, 4000);
      });
  };

  const submitEmailForm = () => {
    saveEmailMessage();
    setFormValue(defaultFormValues);
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box>
          <Button
            title="email me!"
            alignSelf="center"
            primary
            focusIndicator={props.mode === 'light' ? true : false}
            color={props.mode === 'light' ? 'brand' : 'accent-1'}
            icon={
              <Contact color={props.mode === 'light' ? 'accent-1' : 'brand'} />
            }
            onClick={() => setShowLayer(!showLayer)}
            label={size !== 'small' ? 'contact' : undefined}
            style={
              size === 'small'
                ? {
                    position: 'fixed',
                    bottom: '20px',
                    right: '15px',
                    zIndex: 99,
                    padding: '15px',
                    display: showLayer ? 'none' : 'inline',
                    borderRadius: 30
                  }
                : undefined
            }
          />
          {showLayer && (
            <Layer
              style={{ borderRadius: size !== 'small' ? 30 : 0 }}
              position="center"
              onClickOutside={() => setShowLayer(!showLayer)}
            >
              <Box
                border={{
                  side: 'all',
                  size: 'large',
                  color: props.mode === 'light' ? 'brand' : 'accent-1',
                  style: 'outset'
                }}
                pad={{ bottom: 'xlarge', top: 'large' }}
                flex
                round={size !== 'small'}
                background={props.mode === 'light' ? 'light-2' : 'home'}
                align="center"
                justify="center"
                overflow="auto"
              >
                <Heading margin="small" textAlign="center">
                  send an email!
                </Heading>
                <Form
                  value={formValue}
                  onChange={(nextValue: any) => formChange(nextValue)}
                  onReset={() => setFormValue(defaultFormValues)}
                  onSubmit={submitEmailForm}
                >
                  <Box direction="row" gap="small" justify="center">
                    <FormField
                      margin={{
                        left: 'medium',
                        right: 'medium',
                        top: 'medium',
                        bottom: 'medium'
                      }}
                      name="name"
                      htmlFor="text-input-id"
                      label="name"
                    >
                      <TextInput id="text-input-id" name="name" size="medium" />
                    </FormField>
                    <FormField
                      margin={{
                        left: 'medium',
                        right: 'medium',
                        top: 'medium',
                        bottom: 'medium'
                      }}
                      name="email"
                      htmlFor="email-input-id"
                      label="email"
                      required
                    >
                      <TextInput
                        id="email-input-id"
                        name="email"
                        size="medium"
                      />
                    </FormField>
                  </Box>
                  <FormField
                    margin={{
                      left: 'medium',
                      right: 'medium',
                      top: 'medium',
                      bottom: 'medium'
                    }}
                    name="subject"
                    htmlFor="subject-input-id"
                    label="subject"
                  >
                    <TextInput
                      id="subject-input-id"
                      name="subject"
                      size="medium"
                    />
                  </FormField>
                  <FormField
                    name="message"
                    htmlFor="message-input-id"
                    required
                    margin={{
                      left: 'medium',
                      right: 'medium',
                      top: 'medium',
                      bottom: 'medium'
                    }}
                  >
                    <TextArea
                      name="message"
                      style={{ fontSize: '18px' }}
                      size="large"
                      focusIndicator
                      id="message-input-id"
                      placeholder="type your message here..."
                    />
                  </FormField>
                  <Box
                    direction="row"
                    justify="between"
                    margin="medium"
                    gap="small"
                  >
                    <Button
                      color={props.mode === 'light' ? 'status-ok' : 'accent-1'}
                      primary
                      type="submit"
                      label={size !== 'small' ? 'send' : undefined}
                      icon={<Send />}
                    />
                    <Button
                      primary
                      type="reset"
                      color="status-warning"
                      label={size !== 'small' ? 'reset' : undefined}
                      icon={<Refresh />}
                    />
                    <Button
                      primary
                      color="status-critical"
                      label={size !== 'small' ? 'cancel' : undefined}
                      icon={<FormClose />}
                      onClick={() => setShowLayer(!showLayer)}
                    />
                  </Box>
                </Form>
                {notificationObject.show && (
                  <Notification
                    notification={notificationObject}
                    onNotificationClose={() => {
                      const n: NotificationType = {
                        show: false,
                        success: false,
                        text: ''
                      };
                      setShowNotificationObject(n);
                    }}
                  />
                )}
              </Box>
            </Layer>
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Email;
