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
  Feed
} from 'semantic-ui-react'

const Education = () => {
  var tags = [
              {tag1:"PMP"},
              {tag1:"PET ASEPTIC" },

              {tag1:"HSE"},
              {tag1:"PACKAGING "},
              {tag1:"SOAP,DETERGENT PROCESS PACKAGING" },
              {tag1:"Six Sigma and Lean Management".toUpperCase()},
              {tag1:"PET,CAN,GLASS LINE FOR CARBONATED BEVERAGE"},
              {tag1:"PET COMPLETE LINE INSTALLATION COMMISSIONING"},
              {tag1:"PROJECT EXECUTION" },
              {tag1:"TEA PROCESS PACKAGING" },
              {tag1:"FMCG BEVERAGE"},
              {tag1:"EDIBLE LINE PROCESS"},
              {tag1:"PACKAGING LINE" },
              {tag1:"PLANT UTILITY" },
              {tag1:"SPARE PARTS"} ,
              {tag1:"SUPPLY CHAIN" },

            ];
    var tags1 = [
              {tag2:"SAP B1"},
              {tag2:"CMMS"},
              {tag2:'BMS'},
              {tag2:'PM Tools'},
              {tag2:'Engineering Solution System'},
              {tag2:'Microsoft Office Tools'},
              {tag2:'Remote Access Tool'},
              {tag2:'MS Project'},
              {tag2:'EIT Efficiency Improvement Tool'},
              {tag2:'WMS Warehouse Management System-span System'},
              {tag2:'FMS Field Management System Planning Software'},
              {tag2:'SINCRO Engineering Solution System'},

            ];
      var tags2 = [
              {tag2:'English'},
              {tag2:'Hindi'},
              {tag2:'Arabic'},
              {tag2:'Marathi'}
            ];

  const render = () => {
    const items = tags.map(address => {
      return{
        description:address.tag1,
        fluid:true
      }
    });
    return <Card.Group style={{ fontSize: '0.77em',fontWeight:'bold'}} fluid itemsPerRow={4} items={items} />;
  }
  const render1 = () => {
    const items = tags1.map(address => {
      return{
        description:address.tag2,
        fluid:true
      }
    });
    return <Card.Group style={{ fontSize: '0.77em',fontWeight:'bold'}} fluid itemsPerRow={4} items={items} />;
  }
  const render2 = () => {
    const items = tags2.map(address => {
      return{
        description:address.tag2,
        fluid:true
      }
    });
    return <Card.Group style={{ fontSize: '0.77em',fontWeight:'bold'}} fluid itemsPerRow={4} items={items} />;
  }
  return(
    <Segment style={{ padding: '8em 0em' }} vertical  textAlign='center'>
      <Container>
        <Header as='h1' style={{ fontSize: '3em', marginBottom:'2em',fontWeight:'bold' }}>
          My Resume
        </Header>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          Work Experience
        </Divider>
        <Grid container stackable verticalAlign='middle'>

          <Grid.Row>

          <Divider vertical><Icon  name='certificate' /></Divider>
            <Grid.Column width={7}>
              <Feed>
               <Feed.Event>
                 <Feed.Label>
                   <Icon name='pencil' />
                 </Feed.Label>
                 <Feed.Content>
                   <Feed.Date>October 2014 - present</Feed.Date>
                   <Feed.Summary>
                     SIDEL
                   </Feed.Summary>
                   <Feed.Extra text>
                    Project Manager Services Asia Middle East Africa zone
                    <br/>
                    Dubai, UAE & Pune India
                  </Feed.Extra>
                 </Feed.Content>
               </Feed.Event>
             </Feed>
             <Feed>
              <Feed.Event>
                <Feed.Label>
                  <Icon name='pencil' />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date>April 2011 - Sep 2014</Feed.Date>
                  <Feed.Summary>
                    Ahmad Tea
                  </Feed.Summary>
                  <Feed.Extra text>
                   Plant Manager
                   <br/>
                   RAK Free Zone, UAE
                 </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            </Feed>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <Icon name='pencil' />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date>Sep 2008 - Mar 2011</Feed.Date>
                  <Feed.Summary>
                    Aujan Coca-Cola Beverages Company
                  </Feed.Summary>
                  <Feed.Extra text>
                   Packaging & Process Manager
                   <br/>
                   Dubai UAE
                 </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            </Feed>
            </Grid.Column>

            <Grid.Column floated='right' width={7}>

                <Feed>
                 <Feed.Event>
                   <Feed.Label>
                     <Icon name='pencil' />
                   </Feed.Label>
                   <Feed.Content>
                     <Feed.Date>Sep 2001 - Jul 2008</Feed.Date>
                     <Feed.Summary>
                       Arma Food Industries Arma Soap and Detergents Group
                     </Feed.Summary>
                     <Feed.Extra text>
                      Chief Engineer
                      <br/>
                      Cairo Egypt
                    </Feed.Extra>
                   </Feed.Content>
                 </Feed.Event>
               </Feed>
               <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <Icon name='pencil' />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Date>Dec 1995 - Aug 2001</Feed.Date>
                    <Feed.Summary>
                      Hindustan Coca-Cola Beverages Pvt Ltd
                    </Feed.Summary>
                    <Feed.Extra text>
                     Maintenance Manager
                     <br/>
                     Pirungut Pune & GOBLEJ Ahmedabad India
                   </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
              <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <Icon name='pencil' />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Date>Jul 1993 - Nov 1995</Feed.Date>
                    <Feed.Summary>
                      Hindustan gas & Industries
                    </Feed.Summary>
                    <Feed.Extra text>
                     Maintenance Engineer
                     <br/>
                     Halol Gujurat India
                   </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
              <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <Icon name='pencil' />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Date>Jun 1991 - Jun 1993</Feed.Date>
                    <Feed.Summary>
                      Electrotherm India Limited
                    </Feed.Summary>
                    <Feed.Extra text>
                     Servicing & commissioning engineer
                     <br/>
                     GIDC VATVA Ahmedabad India
                   </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ marginTop: '6em',marginBottom:'3em', textTransform: 'uppercase' }}
        >
          SKILLS
        </Divider>
        <Grid container stackable>
          <Grid.Row>
            <Divider vertical><Icon  name='certificate' /></Divider>
            <Grid.Column width={7}>
              <Divider
                as='h4'
                className='header'
                horizontal
                style={{ fontSize: '0.77em',marginBottom:'3em', textTransform: 'uppercase' }}
              >
                  Project Management/Engineering Management
              </Divider>
              {render()}
            </Grid.Column>
            <Grid.Column floated='right' width={7}>
              <Divider
                as='h4'
                className='header'
                horizontal
                style={{ fontSize: '0.77em',marginBottom:'3em', textTransform: 'uppercase' }}
              >
                  Softwares & Tools
              </Divider>
              {render1()}
              <Divider
                as='h4'
                className='header'
                horizontal
                style={{ fontSize: '0.77em',marginBottom:'1em', textTransform: 'uppercase' }}
              >
                  Languages
              </Divider>
              {render2()}
            </Grid.Column>
          </Grid.Row>

        </Grid>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ marginTop: '6em',marginBottom:'3em', textTransform: 'uppercase' }}
        >
         Education
         </Divider>
        <Grid container stackable verticalAlign='middle'>

          <Grid.Row>

          <Divider vertical><Icon  name='certificate' /></Divider>
            <Grid.Column width={7}>
              <Feed>
               <Feed.Event>
                 <Feed.Label>
                   <Icon name='pencil' />
                 </Feed.Label>
                 <Feed.Content>
                   <Feed.Date>2017 - 2023</Feed.Date>
                   <Feed.Summary>
                     PMP 2099172
                   </Feed.Summary>
                   <Feed.Extra text>
                   Project Management Institute
                   <br/>
                   Dubai UAE
                  </Feed.Extra>
                 </Feed.Content>
               </Feed.Event>
             </Feed>
             <Feed>
              <Feed.Event>
                <Feed.Label>
                  <Icon name='pencil' />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date>2009 - 2011</Feed.Date>
                  <Feed.Summary>
                    MBA, Operation Management
                  </Feed.Summary>
                  <Feed.Extra text>
                   SMU
                   <br/>
                   Dubai UAE
                 </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            </Feed>
            </Grid.Column>

            <Grid.Column floated='right' width={7}>

                <Feed>
                 <Feed.Event>
                   <Feed.Label>
                     <Icon name='pencil' />
                   </Feed.Label>
                   <Feed.Content>
                     <Feed.Date>1987 - 1991</Feed.Date>
                     <Feed.Summary>
                       B.E Electronics
                     </Feed.Summary>
                     <Feed.Extra text>
                      Savitribai Phule Pune University
                      <br/>
                      Pune
                    </Feed.Extra>
                   </Feed.Content>
                 </Feed.Event>
               </Feed>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Education;
