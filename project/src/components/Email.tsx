import React, { useState } from "react";
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
  Heading,
  Text
} from "grommet";
import { FormClose, Contact, Mail, Refresh } from "grommet-icons";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFwTWxy66C-Hyc3aAyM5qRtUrkCRHqpGE",
  authDomain: "my-website-47a3f.firebaseapp.com",
  databaseURL: "https://my-website-47a3f.firebaseio.com",
  projectId: "my-website-47a3f",
  storageBucket: "my-website-47a3f.appspot.com",
  messagingSenderId: "470181838732",
  appId: "1:470181838732:web:9516b0128c438a22bc20a9",
  measurementId: "G-2HT42KGJK5"
};
firebase.initializeApp(firebaseConfig);

const defaultFormValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const defaultNotificationValues = {
  show: false,
  header: "",
  body: ""
};

const Email = (props: any) => {
  const [formValue, setFormValue] = useState(defaultFormValues);
  const [showSidebar, setShowSidebar] = useState(false);
  const [smallHeaderText, setSmallHeaderText] = useState("send an email!");
  const [notificationObject, setShowNotificationObject] = useState(
    defaultNotificationValues
  );
  const emailMessageRef = firebase.database().ref("emailMessage");

  const formChange = (value: any) => {
    setFormValue(value);
    console.log(value);
  };

  const saveEmailMessage = () => {
    const newEmailMessageRef = emailMessageRef.push();
    newEmailMessageRef.set({
      name: formValue.name,
      email: formValue.email,
      subject: formValue.subject,
      message: formValue.message
    });
  };

  const submitEmailForm = (size: string) => {
    saveEmailMessage();
    setFormValue(defaultFormValues);
    if (size === "small") {
      setSmallHeaderText("success: email sent!");
    } else {
      const notification = {
        show: true,
        header: "success!",
        body: "your email has been successfully sent!"
      };
      setShowNotificationObject(notification);
    }
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box direction="row">
          <Button
            title="email"
            primary
            focusIndicator={props.mode === "light" ? true : false}
            color={props.mode === "light" ? "brand" : "accent-1"}
            icon={
              <Contact color={props.mode === "light" ? "accent-1" : "brand"} />
            }
            onClick={() => setShowSidebar(!showSidebar)}
            style={{
              position: "fixed",
              bottom: size !== "small" ? "35px" : "20px",
              right: size !== "small" ? "35px" : "15px",
              zIndex: 99,
              padding: "15px",
              display: showSidebar ? "none" : "inline"
            }}
          />
          {!showSidebar || size === "large" ? (
            <Collapsible direction="horizontal" open={showSidebar}>
              <Button
                focusIndicator={false}
                icon={
                  <FormClose
                    color={props.mode === "light" ? "brand" : "accent-1"}
                  />
                }
                onClick={() => setShowSidebar(!showSidebar)}
              />
              <Box
                flex
                pad={{ bottom: "medium", left: "medium", right: "medium" }}
                width="large"
                background="light-1"
                elevation={props.mode === "light" ? "small" : "none"}
                align="center"
                justify="center"
                overflow="auto"
              >
                <Heading>send an email!</Heading>
                <Form
                  value={formValue}
                  onChange={(nextValue: React.SetStateAction<{}>) =>
                    formChange(nextValue)
                  }
                  onReset={() => setFormValue(defaultFormValues)}
                  onSubmit={() => submitEmailForm(size)}
                >
                  <Box direction="row" gap="small">
                    <FormField name="name" htmlFor="text-input-id" label="name">
                      <TextInput id="text-input-id" name="name" size="large" />
                    </FormField>
                    <FormField
                      name="email"
                      htmlFor="email-input-id"
                      label="email"
                      required
                    >
                      <TextInput
                        id="email-input-id"
                        name="email"
                        size="large"
                      />
                    </FormField>
                  </Box>
                  <FormField
                    name="subject"
                    htmlFor="subject-input-id"
                    label="subject"
                  >
                    <TextInput
                      id="subject-input-id"
                      name="subject"
                      size="large"
                    />
                  </FormField>
                  <FormField name="message" htmlFor="message-input-id" required>
                    <TextArea
                      name="message"
                      resize="horizontal"
                      focusIndicator
                      size="large"
                      id="message-input-id"
                      placeholder="type your message here..."
                    />
                  </FormField>
                  <Box direction="row" gap="medium" justify="between">
                    <Button
                      type="submit"
                      primary
                      label="send"
                      icon={<Mail />}
                      reverse
                    />
                    <Button
                      type="reset"
                      label="reset"
                      reverse
                      icon={<Refresh />}
                    />
                  </Box>
                </Form>
                {notificationObject.show && (
                  <Layer
                    position="center"
                    onClickOutside={() =>
                      setShowNotificationObject(defaultNotificationValues)
                    }
                  >
                    <Box justify="center" align="center" pad="medium">
                      <Heading level="2">{notificationObject.header}</Heading>
                      <Box gap="medium">
                        <Text>{notificationObject.body}</Text>
                        <Button
                          title="close"
                          alignSelf="center"
                          size="small"
                          icon={<FormClose />}
                          primary
                          onClick={() => {
                            setShowNotificationObject(
                              defaultNotificationValues
                            );
                            setShowSidebar(false);
                          }}
                        />
                      </Box>
                    </Box>
                  </Layer>
                )}
              </Box>
            </Collapsible>
          ) : (
            <Layer
              position="center"
              onClickOutside={() => setShowSidebar(!showSidebar)}
            >
              <Box
                margin="small"
                pad={{ bottom: "xlarge", top: "large" }}
                flex
                background={props.mode === "light" ? "light-2" : "home"}
                align="center"
                justify="center"
                overflow="auto"
              >
                <Heading margin="small" textAlign="center">
                  {smallHeaderText}
                </Heading>
                <Form
                  value={formValue}
                  onChange={(nextValue: React.SetStateAction<{}>) =>
                    formChange(nextValue)
                  }
                  onReset={() => setFormValue(defaultFormValues)}
                  onSubmit={() => submitEmailForm(size)}
                >
                  <Box direction="row" gap="small">
                    <FormField
                      margin={{
                        left: "medium",
                        right: "medium",
                        top: "medium",
                        bottom: "medium"
                      }}
                      name="name"
                      htmlFor="text-input-id"
                      label="name"
                    >
                      <TextInput id="text-input-id" name="name" size="medium" />
                    </FormField>
                    <FormField
                      margin={{
                        left: "medium",
                        right: "medium",
                        top: "medium",
                        bottom: "medium"
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
                      left: "medium",
                      right: "medium",
                      top: "medium",
                      bottom: "medium"
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
                      left: "medium",
                      right: "medium",
                      top: "medium",
                      bottom: "medium"
                    }}
                  >
                    <TextArea
                      name="message"
                      style={{ fontSize: "18px" }}
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
                      primary
                      type="submit"
                      color="status-ok"
                      size="small"
                      icon={<Mail />}
                      reverse
                    />
                    <Button
                      primary
                      type="reset"
                      color="status-warning"
                      size="small"
                      icon={<Refresh />}
                      reverse
                    />
                    <Button
                      primary
                      color="status-critical"
                      size="small"
                      icon={<FormClose />}
                      reverse
                      onClick={() => setShowSidebar(!showSidebar)}
                    />
                  </Box>
                </Form>
                {notificationObject.show && (
                  <Layer
                    position="center"
                    onClickOutside={() =>
                      setShowNotificationObject(defaultNotificationValues)
                    }
                  >
                    <Box justify="center" align="center" pad="medium">
                      <Heading level="2">{notificationObject.header}</Heading>
                      <Box gap="medium">
                        <Text>{notificationObject.body}</Text>
                        <Button
                          title="close"
                          alignSelf="center"
                          size="small"
                          icon={<FormClose />}
                          primary
                          onClick={() => {
                            setShowNotificationObject(
                              defaultNotificationValues
                            );
                            setShowSidebar(false);
                          }}
                        />
                      </Box>
                    </Box>
                  </Layer>
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
