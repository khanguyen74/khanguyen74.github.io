import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import School from './School';
const Education = () =>{
    return(
        <div className="mt-2">
            <h3 className="resume-section-title">Education</h3>
            <Row style={{margin: "-15px 0"}}>
                <School gpa="4.0/4.0" degree="Bachelar's Degree of Science in Computer Science" 
                    schoolName="University of Texas at Dallas"
                    startDate="August 2019" endDate="May 2021"
                    location="Richardson, TX, USA"/>
            </Row>
            <Row style={{margin: 0}}>
                <School gpa="4.0/4.0"degree="Associate Degree in Computer Science" 
                    schoolName="Richland College"
                    startDate="August 2016" endDate="May 2019"
                    location="Dallas, TX, USA"/>

            </Row>
        </div>
    )
};

export default Education;