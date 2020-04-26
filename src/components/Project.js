import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Project(props) {

    return (
        <>
            <Row className='title'>
                <h4>{props.title}</h4>
            </Row>
            <Row className='projectDeets'>
                <Col sm={12} md={5}>
                    <Image src={`./assets/img/${props.img}`} alt={props.title} thumbnail fluid rounded></Image>
                </Col>
                <Col sm={12} md={7}>
                    <div className='projLinks'>
                        {props.livelink ?
                            <a href={`${props.livelink}`}><FontAwesomeIcon icon='eye' size='2x' />View Live</a> : <></>
                        }

                        {props.codelink ?
                            <a href={`${props.codelink}`}><FontAwesomeIcon icon='code' size='2x' />View Code</a> : <></>
                        }
                    </div>

                    <p>{props.desc}</p>
                    <div>Made with:
                    </div>
                    <ul>
                            {props.technologies.map((tech) => { return (<li>{tech}</li>) })}
                        </ul>
                </Col>
            </Row>
        </>
    );
}

export default Project;