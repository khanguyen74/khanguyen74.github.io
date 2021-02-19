import React, {useEffect, useState} from 'react';

// import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';


const ProgressBar= ({now, width=100})=>{
    const [value, setValue] = useState(0);

    useEffect(() => {
      setValue(now * width);
    });
    // const value = now
    return (
        <div className="progress-div progress" style={{width: "100%" }}>
            <div style={{width: `${value}%`}} className="progress-bar" >{now*100}% </div>
        </div>
    )


}
const Skills = ()=>{
    return(
        <div className="mt-2 w-100">
            <Row className="px-lg-4">
                <h3 className="resume-section-title">Skills</h3>
            </Row>
            <Row className="skill-container px-0 px-lg-4">
                <h6>C++</h6>
                <ProgressBar now={0.8} />
            </Row>
            <Row className="skill-container px-0 px-lg-4">
                <h6>Java</h6>
                <ProgressBar now={0.7} />
            </Row>
            <Row className="skill-container px-0 px-lg-4" >
                <h6>JavaScript</h6>
                <ProgressBar now={0.7} />
            </Row>
            <Row className="skill-container px-0 px-lg-4">
                <h6>Python</h6>
                <ProgressBar now={0.6} />
            </Row>
            <Row className="skill-container px-0 px-lg-4">
                <h6>HTML</h6>
                <ProgressBar now={0.6} />
            </Row>

            <Row className="skill-container p-0 px-lg-4">
                <h6>CSS</h6>
                <ProgressBar  now={0.6} />
            </Row>
        </div>
    );
};

export default Skills;