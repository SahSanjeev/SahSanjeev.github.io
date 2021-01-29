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
} from 'semantic-ui-react';

const About = () =>{
  return(
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as='h3' style={{ fontSize: '3em' }}>
              About Me
            </Header>
            <p style={{ fontSize: '1.5em' }}>
              I am majorly involved in  project initiation, planning, executing, monitoring, control & closing of equipment and
services solutions for PET, Can, Glass  packaging beverage, home and personal care products.
            </p>
           <p style={{ fontSize: '1.3em', fontWeight: 'bold'}}>
             I have 25 years project/ engineering experience in FMCG across Asia, Africa, and Europe with multicultural background.
           </p>
            <Button color='black' >Download CV</Button>
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
              <Image   src='/abc.png'  />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default About;
