import React, { Component } from "react";
import { Jumbotron, Carousel } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import FCNavbar from "../FunctionalComponent/FCNavbar";
import FCFooter from "../FunctionalComponent/FCFooter";
import Amsterdam from '../images/Amsterdam.jpg';
import Cheese from '../images/Cheese.jpg';
import cheeseCake from '../images/cheeseCake.jpg';
import dulseDeLeche from '../images/dulseDeLeche.jpg';
import snowCookies from '../images/snowCookies.jpg';
import LittleOnUs from '../images/LittleOnUs.png';

import '../CSS/main.css'


class Main extends Component {

  
  render() {
    
    return (
      <div>
        <FCNavbar  count={this.props.total}/>
        <Jumbotron className="background" fluid >
          <div className="mainDiv">
            <div className="mainRight" dir="rtl">
            <img src={LittleOnUs} alt="littleonus"/>
            <hr className="hr"/>
            <p style={{fontSize:20}}>
               אנו סטודנטים להנדסאי תוכנה ברופין שנה ב' מגישים עבודת סוף סמסטר א' שנה ב' בריאקט
                וככל הנראה לאחר עבודה זו אנחנו בדרך להסבת מקצוע לקונדיטורים :)
            </p>
            </div>
            <div className="mainLeft">
            <Carousel style={{marginLeft:40, height:450,width:650,marginBottom:30}}>
                <Carousel.Item interval={4000}>
                  <img height={370} width={50}
                    className="d-flex w-100"
                    src={Amsterdam}
                    alt="Amsterdam"
                  />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img height={370} width={50}
                    className="d-flex w-100"
                    src={Cheese}
                    alt="Cheese"
                  />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img height={370} width={50}
                    className="d-flex w-100"
                    src={cheeseCake}
                    alt="cheeseCake"
                  />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img height={370} width={50}
                    className="d-flex w-100"
                    src={dulseDeLeche}
                    alt="dulseDeLeche"
                  />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img height={370} width={50}
                    className="d-flex w-100"
                    src={snowCookies}
                    alt="snowCookies"
                  />
                </Carousel.Item>
              </Carousel><br/>
              </div>
          </div>       
        </Jumbotron >
      <FCFooter/>
      </div>
    );
  }
}
export default withRouter(Main)