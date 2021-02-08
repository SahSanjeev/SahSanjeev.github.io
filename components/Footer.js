import React, { useState, useEffect } from "react";

import { Card } from 'semantic-ui-react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown,
  Form,
  Message
} from 'semantic-ui-react'
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import EmailValidator from 'email-validator';
import { isValidPhoneNumber } from 'react-phone-number-input'

const Footer = () =>{
  init("${{secret.MAIL_ID}}");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);
  const [validEmail, validateEmail] = useState(true);
  const [validPhone, validatePhone] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

  const receiverEmail = "harshbansal32000@gmail.com";
  const templateId = "template_cxrbvag";
  const user = "user_fUMunBF0G59MNn9hTOePp";

    sendFeedback({
      templateId,
      email,
      receiverEmail,
      name,
      message,
      user,
    })

    setFormSubmitted(true)
  }

  const sendFeedback = ({
    templateId,
    senderEmail,
    receiverEmail,
    name,
    message,
    user,
  }) => {
    setLoading(true);
    setErrorMessage('');
    emailjs
      .send(
        "default_service",
        templateId,
        {
          name,
          receiverEmail,
          message,
        },
        user
      )
      .then(res => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true)
        }
      })
      .catch(err => {console.error("Error: ", err);
              setErrorMessage(err);
        })
        setLoading(false);
        setName('');
        setPhone('');
        setMessage('');
        setEmail('')
        setSuccess(true);
  }

  return(
    <Segment inverted vertical style={{ paddingTop: '5em', paddingTop: '2em'}} >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={9} >
              <Header inverted as='h1' content='Get In Touch' />
              <Form inverted onSubmit={handleSubmit} error={!!errorMessage} >
                  <Form.Input
                      fluid label='Your Name'
                      placeholder='Sanjeev Sah'
                      onChange={ e => {setName(e.target.value)}}
                      required
                      value={name} />
                  <Form.Input
                      fluid label='Email'
                      placeholder='sanjeev.sah@icloud.com'
                      required
                      onChange={e => {
                           setEmail(e.target.value);
                           validateEmail(EmailValidator.validate(e.target.value));
                       }}
                       error={validEmail ? false : {
                           content: 'Please enter a valid email address.',
                           pointing: 'below'
                       }}
                      value={email} />
                  <Form.Input
                      fluid label='Phone'
                      placeholder='+91 xxx-xxx-xxxx'
                      onChange={e => {
                        setPhone(e.target.value);
                        validatePhone(isValidPhoneNumber(e.target.value) === true);
                      }}
                      error={validPhone ? false : {
                          content: 'Please enter a valid Phone Number',
                          pointing: 'below'
                      }}
                      required
                      value={phone} />
                  <Form.TextArea
                      fluid label='Message'
                      placeholder='Write a Message...'
                      onChange={e => {setMessage(e.target.value)}}
                      required
                      value={message} />
                <Message error header="Oops!" content={errorMessage} />
                <Button loading={loading} type='submit' disabled = {!validEmail || !validPhone} >Send Message</Button>
                {success?"Message Sent":""}
              </Form>
            </Grid.Column>
            <Grid.Column width={6} floated='right' style={{ paddingLeft: '3em ' }}>
              <Header as='h1' inverted>
                My Contact Details
              </Header>
              <List size='big' style={{ padding: '1em 1em' ,}}>
                
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>Nyati Iris, Pune, Maharashtra 411028</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='mail' />
                  <List.Content>
                    <a href='mailto:sanjeev.sah@icloud.com'>sanjeev.sah@icloud.com</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkedin' />
                  <List.Content>
                    <a href='https://www.linkedin.com/in/sanjeev10'>Sanjeev Sah</a>
                  </List.Content>
                </List.Item>
              </List>
              <Divider
                as='h4'
                className='header'
                horizontal
                inverted
                style={{ marginTop: '3em ', textTransform: 'uppercase' }}
              >
              Reach out
            </Divider>
              <Segment inverted textAlign='center'>
                <a href='https://www.linkedin.com/in/sanjeev10'><Icon name='linkedin' size='big' style={{marginLeft: '0.5em' }} /></a>
                <a href='mailto:sanjeev.sah@icloud.com'><Icon name='mail' size='big'  style={{marginLeft: '0.5em'}} /></a>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header
          as='h2'
          content='Copyright © 2021 All rights reserved'
          inverted
          textAlign='center'
          style={{
            fontSize:'1em',
            fontWeight: 'normal',
            marginTop:  '2.2em',
          }}
        />

        </Container>
      </Segment>
  );
}

export default Footer;
