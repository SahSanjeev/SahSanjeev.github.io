import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'semantic-ui-react';
import Education from '../components/Education'

import Layout from '../components/Layout'
import About from '../components/About'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Header1 from '../components/Header1'

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


function App() {


  return (
    <Layout>
    <Header1/>
        <About/>
        <Services/>
        <Education/>
        <Footer/>
    </Layout>
  );
}

export default App;
