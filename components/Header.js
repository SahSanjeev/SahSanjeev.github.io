import React,{Component} from 'react'
import  { useState, useEffect } from "react";
import {Link} from '../routes.js'
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


class Header1 extends Component{

  state = {
    currentPage:''
  }



  render(){
    const { currentPage } = this.state
    console.log(currentPage);
    return(
      <div>
        <Segment
          inverted
          textAlign='center'
          style={{ padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Menu
              inverted="false"
              pointing='false'
              secondary='false'
              size='large'
            >
              <Link route='/'>
                <Menu.Item  name='Home' active={currentPage === 'Home'} >
                  Home
                </Menu.Item>
              </Link>
              <Link route='/projects' >
                <Menu.Item  name='Projects'  active={currentPage === 'Projects'}   >
                  Projects
                </Menu.Item>
              </Link>
              <Link route='/contact' >
                <Menu.Item  name='Contact' active={currentPage === 'Contact'} >
                  Contact
                </Menu.Item>
              </Link>
              <Menu.Item position='right'>
                <a href='http://www.semantic-ui.com'><Icon  name='github' size='big' style={{ paddingTop: '0.2em' }}/></a>
                <a href='http://www.semantic-ui.com'><Icon name='linkedin' size='big' style={{ paddingTop: '0.2em',marginLeft: '0.5em' }} /></a>
                <a href='mailto:jack@semantic-ui.com'><Icon name='mail' size='big' style={{ paddingTop: '0.2em' ,marginLeft: '0.5em'}} /></a>
              </Menu.Item>
            </Menu>
          </Container>

      </Segment>
      </div>
  );
}
}

export default Header1;
