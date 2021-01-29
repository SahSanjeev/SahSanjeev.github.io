import React from 'react';
import Header from './Header'
import Head from 'next/head';
import { Container } from 'semantic-ui-react'
import{ init } from 'emailjs-com';

const Layout = (props) => {
  init("user_fUMunBF0G59MNn9hTOePp");
  return (
  <Container fluid>
    <Head>
      <link
         rel="stylesheet"
         href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
       />
     </Head>
     <Header/>
      <div>
      {props.children}
      </div>
  </Container>
  );
}

export default Layout;
