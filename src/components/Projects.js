import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const LanguageBox = ({language})=>(
        <div key={language} className="language-box">
            {language}
        </div>
    );

const ProjectItem = (props) =>{
    const {title, image, languages, description, link} = props.project;
    return(
        <Card className="mt-5 mb-3">
            <div className="d-flex flex-column flex-sm-row "
            //  style={{height: "300px"}}
             >
                <div className="col col-sm-4 px-0" style={{height: "100%"}}>
                    <img className="project-image" src={image}/>
                </div>
                <Col lg={8} className="justify-content-center">
                    <Card.Body className="pl-md-0 d-flex flex-column h-100">
                        <h4 className="project-title">
                            {title}
                        </h4>
                        <Card.Title className="project-description">
                            {description}
                        </Card.Title>
                        <Col className="d-flex flex-column justify-content-end">
                            <Row>
                                <Card.Text className="font-style-regular">
                                    Languages used:
                                </Card.Text>
                            </Row>
                            <Row className="mt-2">
                                {languages.map(language =><LanguageBox language = {language} />)}
                            </Row>
                            <Row className="mt-3">
                                <Button className="project-link" href={link} variant="dark" > Link </Button>
                            </Row>
                        </Col>
                    </Card.Body>
                </Col>
            </div>
        </Card>
    )
}

const Projects = () =>{
    const projectList={
        cpuMemory:{
            title: "CPU and Memory Simulation",
            image: process.env.PUBLIC_URL + "/smiley_face.png",
            languages: ["C++"],
            description: "The program simulates a simple computer system consisting of a CPU and Memory. The CPU and Memory will be simulated by separate processes that communicate. Memory will contain one program that the CPU will execute and then the simulation will end.",
            link: "https://github.com/khanguyen74/CPU-Memory-Simulation"
        },
        sortingAlgorithms:{
            title: "Sorting Algorithm Analysis",
            image: process.env.PUBLIC_URL + "/sorting_algorithm_analysis.png",
            languages: ['Java'],
            description: "This program runs multiple sorting algorithms and compares performance factors including their running time, number of comparisons and number of swaps, etc... It shows the algorithm which has the best running time.",
            link: "https://github.com/khanguyen74/Sorting-Algorithms-Analysis"
        }
    };
    return(
        <div className="d-flex flex-column px-md-5 container-lg mt-3">
            <ProjectItem project={projectList.cpuMemory} />
            <ProjectItem project={projectList.sortingAlgorithms} />
        </div>
    )
};

export default Projects;