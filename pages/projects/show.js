import React, { useState, useEffect,Component } from "react";
import axios from "axios";
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout'
import Header3 from '../../components/Header3'
import About from '../../components/About'
import Footer from '../../components/Footer'
import{ proj }from '../../projectsdetails';
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
  Item,
  Label
} from 'semantic-ui-react'

class Show extends Component{

  static async getInitialProps(props){
    const res =proj[props.query.address-1];
    return typeof res==="undefined"?{}:res;
  }

  render(){
    // image: "/Combi_BD.png",
    // header:<Link route={`/projects/${address.id}`}><a>{address.title}</a></Link>,
    // extra: address.project_name,
    // meta:address.year?address.location + ' ~ ' + address.year:address.location,
    // //extra:address.feature1?address.feature1 + address.feature2?address.feature2:"":""
    return(

      <Layout>
        <Header3  title={this.props.title}/>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '4em' ,marginBottom:'0.5em'}}>
                  Details
                </Header>
                 <Item.Group >
                  <Item>
                    <Item.Image size='tiny' src='/project.png' />
                      <Item.Content verticalAlign='middle'>
                        <Item.Header ><span style={{ fontSize: '2em',lineHeight: 1 }}>{this.props.title}</span></Item.Header>
                        <Item.Meta>
                          <span style={{ fontSize: '1.5em' }} className='price'>{this.props.year?this.props.location + ' ~ ' + this.props.year:this.props.location}</span>
                        </Item.Meta>
                        <Item.Description  style={{ fontSize: '1.33em' }}>{this.props.description}</Item.Description>
                        <Item.Extra style={{ marginTop: '1em' }}>
                          <Label style={{ fontSize: '1em' }}>
                            Project Name
                            <Label.Detail style={{ fontSize: '0.9em' }}>{this.props.project_name}</Label.Detail>
                          </Label>
                          <Label style={{ fontSize: '1em' }}>
                            Feature1
                            <Label.Detail style={{ fontSize: '0.9em' }}>{this.props.feature1?this.props.feature1:"N/A"}</Label.Detail>
                          </Label>
                          <Label style={{ fontSize: '1em' }}>
                            Feature2
                            <Label.Detail style={{ fontSize: '0.9em' }}>{this.props.feature2?this.props.feature2:"N/A"}</Label.Detail>
                          </Label>
                        </Item.Extra>
                      </Item.Content>
                  </Item>
                </Item.Group>
              </Grid.Column>
              <Grid.Column floated='right' width={7}>
                  <Image   src='/abc.png'  />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Footer/>
      </Layout>
    );
  }
}

export default Show;
