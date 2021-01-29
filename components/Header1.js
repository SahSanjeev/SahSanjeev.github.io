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
} from 'semantic-ui-react'

const Header1 = () =>{
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
        content='Hello, Im'
        inverted
        style={{
          fontSize:  '2em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop:  '6em',
        }}
      />
      <Header
        as='h2'
        content='Sanjeev Sah'
        inverted

        style={{
          fontSize:'4em',
          fontWeight: 'normal',
          marginTop:  '0.2em',
        }}
      />
      <Header
        as='h5'
        content='AND THIS IS MY RESUME'
        inverted

        style={{
          fontSize:'1em',
          fontWeight: 'normal',
          marginTop:  '0.5em',
        }}
      />
    </Container>
    </Segment>
  );
}

export default Header1;
