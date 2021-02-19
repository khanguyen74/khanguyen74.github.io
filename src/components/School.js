import React from 'react';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const School = (props) =>{
    return (
        <Card className="school-card mt-5">
            <Card.Header className="school mb-2">{props.schoolName}</Card.Header>
            <Card.Body className="py-2 px-3 d-flex flex-column">
                <Card.Title className="degree">{props.degree}</Card.Title>
                <Row className="d-flex mb-3 mt-1 px-3 justify-content-between">
                    <div className ="date-location-box d-flex align-items-center" >
                        <FontAwesomeIcon icon={faCalendar}/>
                        <div className ="ml-2 school-card-text">
                            {props.startDate} - {props.endDate}
                        </div>
                    </div>
                    <div className =" date-location-box d-flex align-items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        <div className ="ml-2 school-card-text">
                            {props.location}
                        </div>
                    </div>
                </Row>
                <Card.Text className="mb-3 school-card-text">GPA: {props.gpa}</Card.Text>

            </Card.Body>
        </Card>
    )
};

export default School;
