import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {

    return (
        <Navbar variant='dark' bg='' className='footer bodyfont' style={{ backgroundColor: 'transparent' }}>
            <Container fluid className='d-flex flex-column justify-content-center'>
            <Navbar.Text className='toTop'>
                    <a href='#' className='iconLink' onClick={() => {
                        window.scrollTo({
                            top: -2,
                            behavior: 'smooth'
                        })
                    }}>
                    <FontAwesomeIcon icon='angle-up' size='3x'  />
                    </a>
                </Navbar.Text>
                <Navbar.Text >
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
