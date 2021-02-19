import React from 'react';
// import profilepic from "/portrait.jpg";

import ReactTypingEffect from 'react-typing-effect';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const Home = () =>{
    const profilepic = process.env.PUBLIC_URL + "/portrait.jpg";
    return(
        // <div className="d-flex flex-column align-items-center">
        <Container className="p-0 d-flex flex-column">
            <Row className="justify-content-center mt-auto">
                <img src={profilepic} className="profilepic"/>
            </Row>
            <Row className="justify-content-center">
                <ReactTypingEffect 
                    text={["Hi, my name is Kha", "Welcome to my personal website"]}
                    speed={100}
                    eraseDelay={1000}
                    eraseSpeed={50}
                    className="typing-effect mt-4"
                    typingDelay={1500}
                />
            </Row>
            <Row className=" social mt-auto mb-4 ">
                <a href="https://github.com/khanguyen74" className="icon-link"><FontAwesomeIcon icon={faGithub} className="social-icon" /></a>
                <a href="https://www.linkedin.com/in/kha-nguyen-724075188/" className="icon-link"><FontAwesomeIcon icon={faLinkedin} className="social-icon" /></a>
            </Row>
        {/* // </div> */}
        </Container>
    )
};

export default Home;