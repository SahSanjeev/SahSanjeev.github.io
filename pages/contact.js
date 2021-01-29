import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'semantic-ui-react';
import Education from '../components/Education'

import Layout from '../components/Layout'
import About from '../components/About'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Header2 from '../components/Header2'


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

function Contact() {


  return (
    <Layout>
      <Header2/>
      <About/>
      <Footer/>
    </Layout>
  );
}

export default Contact;
