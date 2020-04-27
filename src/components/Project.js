import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Project(props) {

    return (
        <>
            <Card>
                <Card.Title>
                    <h4>{props.title}</h4>
                </Card.Title>
                <Card.Body className='projectDeets'>

                        <Card.Img src={`./assets/img/${props.img}`} alt={props.title} thumbnail fluid rounded></Card.Img>
                            {props.livelink ?
                                <Card.Link href={`${props.livelink}`}><FontAwesomeIcon icon='eye' size='2x' />View Live</Card.Link> : <></>
                            }

                            {props.codelink ?
                                <Card.Link href={`${props.codelink}`}><FontAwesomeIcon icon='code' size='2x' />View Code</Card.Link> : <></>
                            }

                        <Card.Text>{props.desc}</Card.Text>
                        <Card.Text>Made with: {props.technologies.join(', ')}</Card.Text>

                </Card.Body>
            </Card>

        </>
    );
}

export default Project;