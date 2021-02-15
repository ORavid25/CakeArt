import React, { Component } from "react";
import { Jumbotron, Container, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import FCFooter from "../FunctionalComponent/FCFooter";
import FCNavbar from "../FunctionalComponent/FCNavbar";
import Minus from '../images/Minus.png';
import Plus from '../images/Plus.png';
import AddTo from '../images/AddTo.png';
import OurCakes from '../images/OurCakes.png';


class Cakes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <Container >
            <img src={OurCakes} alt="logo"/>
            <div className="products">
              {this.props.cakes.map((cake, index) => {
                return (
                  <Card>
                    <Card.Body>
                      <Card.Title>{cake.name}</Card.Title>
                      <img src={cake.src} alt="cake" width='150' height='100' /><br/><br/>
                      <Card.Text>
                        מחיר ליחידה : {cake.price}
                        <p key={index}>
                          <img src={Plus} alt="+" style={{width:30}} onClick={() => this.handelUper(cake.id)}/>
                          <input className="input" type="text" value={cake.quantity}></input>
                          <img src={Minus} alt="-" style={{width:30}} onClick={()=>this.handelDowner(cake.id)}/>
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <img src={AddTo} alt="cart" width={200} onClick={() => this.addTo(cake.id)}/>
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
export default withRouter(Cakes);
