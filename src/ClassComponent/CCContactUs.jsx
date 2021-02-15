import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Form, Button,InputGroup,FormControl } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import FCFooter from "../FunctionalComponent/FCFooter";
import FCNavbar from "../FunctionalComponent/FCNavbar";
import "../CSS/main.css";
import OurContact from '../images/OurContact.png';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }
  render() {
    return (
      <div>
        <FCNavbar backHome={this.props.home} count={this.props.total} />
        <Jumbotron fluid className="background">
        <img src={OurContact} alt="contactlogo"/>
          <Container className="contactDiv">
            <div className="speech" dir="rtl">
              <h2>אנחנו כאן, בכל שאלה ועניין</h2>
              <h2>ימי הפעילות שלנו הם:</h2>
              <h3>ימים א ,ב ,ה בין השעות 9:00 עד 18:00</h3>
            </div>
            <div className="contact" dir="rtl">
              <h2>מוזמנים להשאיר הודעה ונחזור אליכם בהקדם !</h2>
              <hr />
              <Form >
                <Form.Group as={Row}>
                  <Col sm={5}>
                    <Form.Control type="name" placeholder="שם פרטי" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Col sm={5}>
                    <Form.Control type="name" placeholder="שם משפחה" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={5}>
                    <Form.Control type="phone" placeholder="טלפון" />
                  </Col>
                </Form.Group>
                <InputGroup>
                  <FormControl as="textarea" placeholder="על מה תרצו לדבר איתנו?" />
                </InputGroup>
                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <br/><br/>
                    <Button type="submit">שלח</Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Container>
        </Jumbotron>
        <FCFooter />
      </div>
    );
  }
}
export default withRouter(ContactUs);
