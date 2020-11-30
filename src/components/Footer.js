import React from 'react';
import './Footer.css';
import logo from '../images/np_logo.svg';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  let map="https://www.google.com/maps/place/Ngee+Ann+Polytechnic/@1.332948,103.7753263,17z/data=!4m5!3m4!1s0x31da107d8eb4e359:0x75d2e7ffdeeb0c43!8m2!3d1.3328719!4d103.7752157",
  tel="tel:+6564666555",
  tel2="tel:+6564607888",
  npemail="mailto:asknp@np.edu.sg",
  soeemail="mailto:soe@np.edu.sg",
  covidemail="mailto:AskCovid@np.edu.sg",
  soeweb="https://www.np.edu.sg/soe/Pages/default.aspx",
  fb="https://www.facebook.com/ngeeannpoly",
  ig="https://www.instagram.com/ngeeannpoly/?hl=en",
  tw="https://twitter.com/ngeeannNP",
  yt="https://www.youtube.com/user/NgeeAnnPolytechnic",
  ln="https://www.linkedin.com/school/ngee-ann-polytechnic/",
  npweb="https://www.np.edu.sg/Pages/default.aspx";

  return (
    <Container fluid className="soe-footer">
      <Row className="soe-footer-top">
          <Col xs={12} sm={12} md={4} lg={6} className="soe-footer-logo">
            <a href={npweb} target="_blank" rel="noopener noreferrer"><img src={logo} alt="Ngee Ann Polytechnic" className="sitelogo"/></a>
          </Col>
          <Col xs={12} sm={12} lg={6} md={8} className="soe-footer-social">
              <ul className="soe-social-group">
                <li className="soe-social-item"><a href={ig} target="_blank" rel="noopener noreferrer" title="Instagram" className="instagram"><i class="fab fa-instagram" aria-hidden="true"/></a></li>
                <li className="soe-social-item"><a href={yt} target="_blank" rel="noopener noreferrer" title="Youtube" className="youtube"><i class="fab fa-youtube" aria-hidden="true"/></a></li>
                <li className="soe-social-item"><a href={fb} target="_blank" rel="noopener noreferrer" title="Facebook" className="facebook"><i class="fab fa-facebook" aria-hidden="true"/></a></li>
                <li className="soe-social-item"><a href={tw} target="_blank" rel="noopener noreferrer" title="Twitter" className="twitter"><i class="fab fa-twitter" aria-hidden="true"/></a></li>
                <li className="soe-social-item"><a href={ln} target="_blank" rel="noopener noreferrer" title="Linkedin" className="linkedin"><i class="fab fa-linkedin" aria-hidden="true"/></a></li>
              </ul>
          </Col>
      </Row>
      <Row className="soe-footer-body">
        <Row className="soe-footer-body-container">
          <Col xs={12} sm={12} md={4} className="soe-footer-body-items">
            <Container className="soe-footer-contact-us">
              <Container className="soe-footer-title">
                <p>Contact Us</p>
              </Container>
              <Container className="soe-footer-contact-us-content">
                <ul className="contact-us-group">
                  <li className="contact-us-item">
                    <Row>
                      <Col xs={1}>
                        <i class="fas fa-map-marker-alt" aria-hidden="true"/>
                      </Col>
                      <Col xs={11}>
                        <a href={map}>535 Clementi Road</a>
                      </Col>
                    </Row>
                  </li>
                  <li className="contact-us-item">
                    <Row>
                      <Col xs={1}>
                        <i class="fas fa-phone" aria-hidden="true"/>
                      </Col>
                      <Col xs={11}>
                        <a href={tel}>6466 6555</a>
                      </Col>
                    </Row>
                  </li>
                  <li className="contact-us-item">
                    <Row>
                      <Col xs={1}>
                        <i class="fas fa-envelope" aria-hidden="true"/>
                      </Col>
                      <Col xs={11}>
                        <a href={npemail}>asknp@np.edu.sg</a>
                      </Col>
                    </Row>
                  </li>
                  <li className="contact-us-item">
                    <Row>
                      <Col xs={1}>
                        <i class="fas fa-envelope" aria-hidden="true"/>
                      </Col>
                      <Col xs={11}>
                        <a href={soeemail}>soe@np.edu.sg</a>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </Container>
              <Container className="soe-footer-title" id="covid-19">
                <p>Covid-19 Enquiries</p>
              </Container>
              <Container className="soe-footer-contact-us-content">
                <ul className="contact-us-group">
                  <li className="contact-us-item">
                    <Row>
                      <Col xs={1}>
                        <i class="fas fa-phone" aria-hidden="true"/>
                      </Col>
                      <Col xs={11}>
                        <a href={tel2}>6460 7888</a>
                      </Col>
                    </Row>
                  </li>
                  <li className="contact-us-item">
                    <Row>
                      <Col xs={1}>
                        <i class="fas fa-envelope" aria-hidden="true"/>
                      </Col>
                      <Col xs={11}>
                        <a href={covidemail}>AskCovid@np.edu.sg</a>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </Container>
            </Container>
          </Col>
          <Col xs={12} sm={12} md={4} className="soe-footer-body-items">
            <Container className="soe-footer-subscribe">
              <Container className="soe-footer-title">
                <p>Subscribe</p>
              </Container>
              <Container className="soe-footer-subscribe-content">
                <p>Subscription Bar to be added</p>
              </Container>
            </Container>
          </Col>
          <Col xs={12} sm={12} md={4} className="soe-footer-body-items">
            <Row className="soe-footer-search">
              <Row className="soe-search">
                <Container className="search-item">
                  <input className="footer-search-box" id="footerSearch" type="text" placeholder="Search"/>
                  <i className="fas fa-search btn-search" aria-hidden="true"/>
                </Container>
              </Row>
            </Row>
          </Col>
        </Row>
      </Row>
      <Row className="soe-footer-bottom">
        <Row className="soe-footer-bottom-container">
          <Col md={6} as="ul" className="footer-bot-group">
            <li className="footer-bot-item">
              <a href="/sitemap" title="Sitemap">Sitemap</a>
            </li>
            <li className="footer-bot-item">
              <a href="/" title="Terms of Use">Terms of Use</a>
            </li>
            <li className="footer-bot-item">
              <a href="/" title="Privacy Statement">Privacy Statement</a>
            </li>
            <li className="footer-bot-item">
              <a href="/" title="Rate this Service">Rate this Service</a>
            </li>
            <li className="footer-bot-item">
              <a href="/" >Report Vulnerability</a>
            </li>
          </Col>
          <Col md={6} as="ul" className="footer-bot-group">
            <li className="footer-bot-item">
              Made with <i class="fas fa-heart" /> by Jaymeson Koh, Nakagawa Miho, and Kugan Elamaran. Supervised by Raymond Lam S K, Lecturer, <a href={soeweb}>Ngee Ann Polytechnic, School of Engineering</a>
            </li>
            <li className="footer-bot-item">
              Last updated 26 November 2020
            </li>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Footer;