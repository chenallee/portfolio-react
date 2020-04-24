import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {

    return (
        <Navbar variant='dark' bg='' className='fixed-bottom bodyfont mt-auto' style={{ backgroundColor: 'transparent' }}>
            <Container fluid className='d-flex flex-column justify-content-center'>
                <Navbar.Text style={{color: 'rgba(255,255,255)'}}>
                    <h4>
                        Contact me!
                    </h4>
                </Navbar.Text>
                <Navbar.Text>
                    <a href='https://github.com/chenallee' target='_blank' rel="noopener noreferrer" className='mr-3 iconLink'>
                        <FontAwesomeIcon icon={['fab', 'github-square']} size='3x' />
                    </a>
                    <a href='https://linkedin.com/in/lee-chenalloy' target='_blank' rel="noopener noreferrer" className='ml-3 mr-3 iconLink'>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size='3x' />
                    </a>
                    <a href='mailto:lchenalloy@gmail.com' target='_blank' rel="noopener noreferrer" className='ml-3 iconLink'>
                        <FontAwesomeIcon icon='envelope-square' size='3x' />
                    </a>
                </Navbar.Text>



            </Container>
        </Navbar>
    );
}

export default Footer;
