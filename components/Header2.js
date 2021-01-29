import React, { useState, useEffect } from "react";
import { Card } from 'semantic-ui-react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown,
  Transition
} from 'semantic-ui-react'

const Header2 = () =>{
  return(
    <Segment
      inverted
      textAlign='center'
      style={{minHeight: 620, padding: '1em 0em' }}
      vertical
    >
    <Container text>
      <Header
          as='h1'
          content='got a project?'
          inverted
          style={{
            fontSize:  '7em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop:  '1em',
          }}
        />
      <Header
        as='h2'
        content='email at sanjeev.sah@icloud.com'
        inverted

        style={{
          fontSize:'2em',
          fontWeight: 'normal',
          marginTop:  '0.2em',
        }}
      />
      <Header
        as='h5'
        content='or call at +91 80079 47267'
        inverted

        style={{
          fontSize:'1.5em',
          fontWeight: 'normal',
          marginTop:  '0.5em',
        }}
      />
    </Container>
    </Segment>
  );
}

export default Header2;
