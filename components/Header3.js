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

const Header3 = ({title}) =>{
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
        content='Overview'
        inverted
        style={{
          fontSize:  '5em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop:  '1.5em',
          textTransform: 'uppercase',
        }}
      />
      <Header
        as='h2'
        content={title}
        inverted
        style={{
          fontSize:'3em',
          fontWeight: 'normal',
          textTransform: 'uppercase',
          marginTop:  '0.2em',
        }}
      />
      <Header
        as='h5'
        content='AND DETAILS ARE BELOW'
        inverted

        style={{
          fontSize:'1em',
          fontWeight: 'normal',
          marginTop:  '0.5em',
        }}
      />
      <Icon size='big' name="angle double down"/>
    </Container>
    </Segment>
  );
}

export default Header3;
