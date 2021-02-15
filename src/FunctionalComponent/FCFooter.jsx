import React from "react";
import { Container , Col, Row, Image} from "react-bootstrap";
import {  Link } from 'react-router-dom';
import "../CSS/footer.css";
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import Whatsapp from '../images/whatsapp.png'

export default function FCFooter() {

  return (
    <div>
      <Container className="footer" dir="rtl" fluid style={{marginTop:-45}}>
        <div className="hours">
          <p>ימי פעילות:</p>
          <p>ימים א,ב,ה בין השעות 9:00 עד 18:00</p>
        </div>

        <div className="phone"><br/>
          <p>טלפון להזמנות:04-6255555 </p>
        </div>
        <div className="icons">
          <Row>
            <Col xs={6} md={4}><br/>          
            <Link to={{ pathname: "https://he-il.facebook.com/%D7%94%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%A9%D7%9C%D7%99-248637108557637/" }} target="_blank"> 
             <Image src={Facebook} style={{width:50, height:50}} rounded /></Link>
            </Col>
            <Col xs={6} md={4}><br/>
            <Link to={{ pathname: "https://www.d.co.il/Article10447/" }} target="_blank"> 
             <Image src={Instagram} style={{width:50, height:50}} rounded /></Link>
            </Col>
            <Col xs={6} md={4}><br/>
            <Link to={{ pathname: "https://web.whatsapp.com/" }} target="_blank"> 
             <Image src={Whatsapp} style={{width:50, height:50}} rounded /></Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
