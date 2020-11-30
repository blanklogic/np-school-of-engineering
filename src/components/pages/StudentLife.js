import React from 'react'
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import rangerslogo from '../../images/rangers-logo.svg';
import fopbanner from '../../images/freshmen-orientation-programme.svg';

function StudentLife() {
    let admissions = "https://www.np.edu.sg/admissions/Pages/default.aspx";
    return (
        <>
            <Helmet>
                <title>Student Life @ SoE | Ngee Ann Polytechnic</title>
            </Helmet>
            <Container fluid className="header-wrap">
                <Row className="studentlife-header-banner-logo">
                    <Container className="studentlife-header-banner-text">
                        <h1>Life @ SoE</h1>
                    </Container>
                </Row>
                <Row className="student-life-body">
                    <Col xs={12} md={12} className="explore">
                        <Col xs={12} md={6} className="explore-circle-container">
                            <div className="circle top-notch-facilities-circle"></div>
                            <div className="circle overseas-experience-circle"></div>
                            <div className="circle orientation-programme-circle"></div>
                        </Col>
                        <Col xs={12} md={6} className="explore-container">
                            <h2>Explore</h2>
                            <ul className="explore-container-group">
                                <li className="explore-container-item">
                                    <h3 className="explore-item-title">Orientation Programmes</h3>
                                    <p className="explore-item-content">
                                        Begin your <a href={admissions} target="_blank" rel="noopener noreferrer"><span className="highlight">#XTRAORDINARY</span></a> Journey At NP
                                    </p>
                                </li>
                                <hr/>
                                <li className="explore-container-item">
                                    <h3 className="explore-item-title">Overseas Experiences</h3>
                                    <p className="explore-item-content">
                                        Overseas trips and site visits to learn from engineering greats.
                                    </p>
                                </li>
                                <hr/>
                                <li className="explore-container-item">
                                    <h3 className="explore-item-title">Top-Notch Facilities</h3>
                                    <p className="explore-item-content">
                                        Aerospace Hub, Innovation Labs, Production Studios and More.
                                    </p>
                                </li>
                                <hr/>
                            </ul>
                        </Col>
                    </Col>
                    <Col xs={12} md={12} className="fop">
                        <Col xs={12} md={6} className="fop-image">
                            <img src={fopbanner} alt='freshmen orientation programme'/>
                        </Col>
                        <Col xs={12} md={6} className="fop-container">
                            <h2>Freshmen Orientation Programme</h2>
                            <p>Feel refreshed and welcome with our Freshmen Orientation Programme</p>
                            <p>Meet new people from the various engineering courses with seniors that will guide you along the way.</p>
                            <p>Be ready to start your polytechnic journey with Freshmen Orientation Programme</p>
                        </Col>
                    </Col>
                    <Col xs={12} md={12} className="go-beyond">
                        <Col xs={12} md={6} className="go-beyond-circle-container">
                            <div className="circle youth-expedition-project-circle"></div>
                            <div className="circle immersion-programmes-circle"></div>
                            <div className="circle study-trips-circle"></div>
                        </Col>
                        <Col xs={12} md={6} className="go-beyond-container">
                            <h2>Go Beyond</h2>
                            <ul className="go-beyond-container-group">
                                <li className="go-beyond-container-item">
                                    <h3 className="go-beyond-item-title">Study Trips</h3>
                                    <p className="go-beyond-item-content">
                                        Gain exposure to industries related to your disciplines.
                                    </p>
                                    <hr/>
                                </li>
                                <li className="go-beyond-container-item">
                                    <h3 className="go-beyond-item-title">Immersion Programmes</h3>
                                    <p className="go-beyond-item-content">
                                        Gain greater appreciation of different cultures.
                                    </p>
                                    <hr/>
                                </li>
                                <li className="go-beyond-container-item">
                                    <h3 className="go-beyond-item-title">Expeditions</h3>
                                    <p className="go-beyond-item-content">
                                        Serve the community and develop solutions.
                                    </p>
                                    <hr/>
                                </li>
                            </ul>
                        </Col>
                    </Col>
                    <Col xs={12} md={12} className="rangers">
                        <Col xs={12} md={6} className="rangers-circle-container">
                            <div className="circle rangers-circle"></div>
                            <img src={rangerslogo} alt='soe rangers logo'/>
                        </Col>
                        <Col xs={12} md={6} className="rangers-container">
                            <h2>Be Part of A Bigger Family</h2>
                            <h3>
                                <span className="highlightr">UNITY</span> |
                            </h3>
                            <h3>
                                <span className="highlightr">PROFESSIONALISM</span> |
                            </h3>
                            <h3>
                                <span className="highlightr">ENTHUSIASM</span>
                            </h3>
                            <br/>
                            <p>
                                Are you enthusiastic and want to work with other professional ambassadors?
                            </p>
                            <p>
                                Want to be part of a bigger family of like-minded students?
                            </p>
                            <p>
                                Join us today and Share the engineering experience through <span className="highlightr">OUTREACH EVENTS</span> and <span className="highlightr">LEADERSHIP</span>
                            </p>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default StudentLife
