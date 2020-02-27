import React from 'react'
import {Container, Row, Col} from 'reactstrap'

function Footer() {

    return (
        <footer className="mt-5 footer">
            <Container fluid light>
                <Row xs="3" className="border-top justify-content-between p-3">
                    <Col className="p-0" xs="auto">
                        COVID-19
                    </Col>
                    <Col className="p-0 justify-content-end" xs="auto">
                        This site is made by OkeyDokeyYooo Team
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;