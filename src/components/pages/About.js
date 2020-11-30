import React from 'react'
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';

function About() {
    return (
      <>
        <Helmet>
          <title>About Us | Ngee Ann Polytechnic</title>
        </Helmet>
        <Container fluid className="header-wrap">
          <Row className="studentlife-header-banner-logo">
              <Container className="studentlife-header-banner-text">
                  <h1>Life @ SoE</h1>
              </Container>
          </Row>
        </Container>
      </>
    )
}

export default About
