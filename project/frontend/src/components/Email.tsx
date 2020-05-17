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

  const formChange = (value: any) => {
    setFormValue(value);
    console.log(value);
  };

  const submitEmailForm = (size: string) => {
    console.log("submitted");
    setFormValue(defaultFormValues);

    fetch("/send", {
      method: "POST",
      body: JSON.stringify(formValue),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status === "success") {
          if (size === "large") {
            setShowSidebar(!showSidebar);
            const obj = {
              show: true,
              header: "success!",
              body: "your email has just been sent"
            };
            setShowNotificationObject(obj);
          } else {
            setSmallHeaderText("email sent!");
          }
        } else if (resp.status === "fail") {
          if (size === "large") {
            setShowSidebar(!showSidebar);
            const obj = {
              show: true,
              header: "error!",
              body: "your email failed to send"
            };
            setShowNotificationObject(obj);
          } else {
            setSmallHeaderText("failed to send email!");
          }
        }
      });
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
                          onClick={() =>
                            setShowNotificationObject(defaultNotificationValues)
                          }
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
                <Heading>{smallHeaderText}</Heading>
                <Form
                  value={formValue}
                  onChange={(nextValue: any) => formChange(nextValue)}
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
              </Box>
            </Layer>
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Email;
