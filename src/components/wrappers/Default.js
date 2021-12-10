import React, {useState, useRef, useEffect} from 'react';
import { Navbar,Alignment,Button } from "@blueprintjs/core";
import {Container,Row,Col} from 'react-bootstrap';

const WrapperDefault = props => {
  const { children,title} = props;




  return (
    <Container>
        <Row>
            <Col>
                <Navbar>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>Sample App (Seats.io)</Navbar.Heading>
                        <Navbar.Divider />
                    </Navbar.Group>
                </Navbar>
            </Col>
        </Row>
        <Row>
            <Col>  {title}</Col>
        </Row>
        <Row>
            <Col>  {children}</Col>
        </Row>
    </Container>
  );
};



export default WrapperDefault;
