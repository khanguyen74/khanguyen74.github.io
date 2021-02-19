import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Skills from './Skills'
// import School from './School';
import Education from './Education';

const Resume = () =>{
    return(
        <Container fluid className="px-md-5">
            <div className="d-flex flex-lg-row flex-column mt-4">
                <Col className="px-4">
                    <Skills />
                    <hr className="d-block d-lg-none mt-5"/>
                </Col>
                <Col className="px-4">
                    <Education />
                </Col>
            </div>
        </Container>
    )
};

export default Resume;