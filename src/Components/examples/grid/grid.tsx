import { Button, Col, Container, Row } from "react-bootstrap";
import "./grid.css";

function Grid(): JSX.Element {
    return (        
			<Container dir="ltr">
                    <Row style={{backgroundColor : "white"}}>
                        <Col> my first column</Col>
                    </Row>
                    <Row style={{backgroundColor : "yellow"}}>
                        <Col> my first column</Col>
                        <Col> my first column</Col>
                    </Row>
                    <Row style={{backgroundColor : "black"}}>
                        <Col> my first column</Col>
                        <Col> my first column</Col>
                        <Col> my first column</Col>
                    </Row>
                    <br/><br/>
                    <Row style={{backgroundColor : "black"}}>
                        <Col> 1 of 3</Col>
                        <Col md="auto"> my first column</Col>
                        <Col xs lg="2"> 3 of 3</Col>
                    </Row>
                    <br/><br/>
                    <Row className="justify-content-md-center" >
                        <Col xs lg="2"> 1 of 3</Col>
                        <Col md="auto"> my first column</Col>
                        <Col xs lg="2"> 3 of 3</Col>
                    </Row>
                    <br/><br/>
                    <Row className="justify-content-md-center">
                        <Col lg="2" style={{backgroundColor : "black"}}>I am small one</Col>
                        <Col lg="4" style={{backgroundColor : "yellow"}}>I am big one</Col>
                        <Col lg="2" style={{backgroundColor : "black"}}>I am small one</Col>
                    </Row>
                    <br/><br/>
                    <Button variant="primary">primary</Button>{' '}
                    <Button variant="secondary">secondary</Button>{' '}
                    <Button variant="success">success</Button>{' '}
                    <Button variant="warning">warning</Button>{' '}
                    <Button variant="danger">danger</Button>{' '}
                    <Button variant="info">info</Button>{' '}
                    <Button variant="light">light</Button>{' '}
                    <Button variant="dark">dark</Button>{' '}
                    <Button variant="link">link</Button>{' '}
                    <br/><br/>
                    <Button variant="outline-primary">primary</Button>{' '}
                    <Button variant="outline-secondary">secondary</Button>{' '}
                    <Button variant="outline-success">success</Button>{' '}
                    <Button variant="outline-warning">warning</Button>{' '}
                    <Button variant="outline-danger">danger</Button>{' '}
                    <Button variant="outline-info">info</Button>{' '}
                    <Button variant="outline-light">light</Button>{' '}
                    <Button variant="outline-dark">dark</Button>{' '}
            </Container>        
    );
}

export default Grid;
