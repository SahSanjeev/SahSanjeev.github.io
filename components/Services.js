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
  Rating
} from 'semantic-ui-react'

const Services = () =>{
  return(
    <Segment style={{ padding: '8em 0em' }} vertical textAlign='center' inverted>
      <Header as='h1' style={{ fontSize: '3em', marginBottom:'2em',fontWeight:'bold' }}>
        My <span style={{fontWeight:'bold'}}>Services</span>
      </Header>

      <Grid container stackable verticalAlign='middle' columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <Card  centered>
              <Image  style={{width: 'auto', height: 'auto'}}  src='https://d57439wlqx3vo.cloudfront.net/iblock/577/57718e3f9374256923aa4382c5bcc673/b73ee98a70e1ecefb77b4996f067a2fa.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Project Management</Card.Header>
                <Card.Meta>
                   <Rating icon='star' defaultRating={5} maxRating={5} />
                </Card.Meta>
                <Card.Description>
                A project manager is one who acts as a glue and keeps things together.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Image size='medium' src='https://www.industrialthinking.com/media/1086/fullconsultancy.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Consultancy</Card.Header>
                <Card.Meta>
                   <Rating icon='star' defaultRating={4} maxRating={5} />
                </Card.Meta>
                <Card.Description>
                Aim to provide Consultancy services in a flexible way with options that meet the individual customer requirements.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Image src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/stockvault-fixing-the-light---.jpeg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Engineering Solutions</Card.Header>
                <Card.Meta>
                  <Rating icon='star' defaultRating={4} maxRating={5} />
                </Card.Meta>
                <Card.Description>
                  Aim to take your vision and necessary requirements, then transform them into here and now products.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Services;
