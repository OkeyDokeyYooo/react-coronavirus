import React, {useState} from 'react'
import {Container, Row, Col} from 'reactstrap'

function Footer() {

    return (
        <footer className="mt-5 footer">
            <Container fluid>
                <Row xs="3" className="border-top justify-content-between p-3">
                    <Col className="p-0" sm="12" md="1">
                        COVID-19
                    </Col>
                    <Col className="p-0 justify-content-end">
                        This site is made by OkeyDokeyYooo Team
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;