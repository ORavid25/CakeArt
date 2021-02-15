import React, { Component } from "react";
import { Jumbotron, Container, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import FCFooter from "../FunctionalComponent/FCFooter";
import FCNavbar from "../FunctionalComponent/FCNavbar";
import Minus from "../images/Minus.png";
import Plus from "../images/Plus.png";
import AddTo from '../images/AddTo.png';
import OurCookies from '../images/OurCookies.png';


class Cookeis extends Component {
  constructor(props) {
    super(props);
  }
  handelUper = (id) => {
    this.props.Uper(id, this.props.which);
  }
  handelDowner = (id) => {
    this.props.Downer(id, this.props.which);
  }
  addTo = (id) => {
    this.props.send(id, this.props.which);
  }
  render() {
    return (
      <div>
        <FCNavbar count={this.props.total} backHome={this.props.home} />
        <Jumbotron fluid className="background" >
          <Container>
            <img src={OurCookies} alt="cookies"/>
            <div className="products">
              {this.props.cakes.map((cookie, index) => {
                return (
                  <Card>
                    <Card.Body>
                      <Card.Title>{cookie.name}</Card.Title>
                      <img src={cookie.src} alt="cookie" width='150' height='100' /><br/><br/>
                      <Card.Text>
                        מחיר ליחידה: {cookie.price}
                        <p key={index}>
                          <img src={Plus} alt="+" style={{width:30}} onClick={() => this.handelUper(cookie.id)}/>
                          <input className="input" type="text" value={cookie.quantity}></input>                         
                          <img src={Minus} alt="-" style={{width:30}} onClick={()=>this.handelDowner(cookie.id)}/>
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                     <img src={AddTo} alt="add to cart" width={200} onClick={() => this.addTo(cookie.id)}/>
                    </Card.Footer>
                  </Card>
                )
              })}
            </div>
          </Container>
        </Jumbotron>
        <FCFooter />
      </div>
    );
  }
}
export default withRouter(Cookeis);
