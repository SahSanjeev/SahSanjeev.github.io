import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'semantic-ui-react';
import Layout from '../components/Layout'
import {Link} from '../routes.js'
import Footer from '../components/Footer'
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
  Step,
} from 'semantic-ui-react';

import{ proj }from '../projectsdetails';

function Projects() {
  const [posts, setPosts] = useState([]);
  const [posts1,setPosts1] = useState([]);
  const [loading, setLoading] = useState(false);

  const render = () => {
    console.log(proj)
    const items = proj.map(address => {
      return{
        image: "/Combi_BD.png",
        header:<Link route={`/projects/${address.id}`}><a>{address.title}</a></Link>,
        extra: address.project_name,
        meta:address.year?address.location + ' ~ ' + address.year:address.location,
        //extra:address.feature1?address.feature1 + address.feature2?address.feature2:"":""
      }
    });

    return <Card.Group inverted  style={{textTransform: 'uppercase' }} itemsPerRow={3} items={items} />;
  }

  return (
    <Layout>
      <Segment inverted
        textAlign='center'
        style={{ minHeight: 620, padding: '5em 0em' }}
        vertical
      >
        <Container>
          <Header as='h2' icon textAlign='center' style={{  paddingBottom: '0em',marginTop:  '3em', }} inverted>
            <Icon name='industry' circular   />
            <Header.Content>Industrial Experience</Header.Content>
          </Header>
           <Header as='h3' style={{ fontSize: '2em' }} inverted>
             Breaking The Grid, Grabs Your Attention
           </Header>
           <p style={{ fontSize: '1.33em' }}>
             Instead of focusing on content creation and hard work, we have learned how to master the
             art of doing nothing by providing massive amounts of whitespace and generic content that
             can seem massive, monolithic and worth your attention.
           </p>
        </Container>
      </Segment>
      <Segment
        textAlign='center'
        style={{ minHeight: 700, padding: '5em 0em' }}
        vertical
      >
        <Container>
          <Step.Group >
              <Step completed>
                <Step.Content>
                  <Step.Title>Strategy</Step.Title>
                  <Step.Description> A vision without a strategy remains an illusion</Step.Description>
                </Step.Content>
              </Step>

              <Step completed>
                <Step.Content>
                  <Step.Title>Design</Step.Title>
                  <Step.Description>Design is intelligence made visible</Step.Description>
                </Step.Content>
              </Step>

              <Step completed>
                <Step.Content>
                  <Step.Title>Technology</Step.Title>
                  <Step.Description>Everything is designed. Few things are designed well</Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              Projects
          </Divider>
          <Grid>
              <Grid.Row>
                <Grid.Column>
                  {
                render()
                  }
                </Grid.Column>
              </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Footer/>
    </Layout>
  );
}

export default Projects;
