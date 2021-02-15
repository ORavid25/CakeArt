import React, { Component } from "react";
import { Jumbotron, Container, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import FCNavbar from "../FunctionalComponent/FCNavbar";
import FCFooter from "../FunctionalComponent/FCFooter";
import Minus from '../images/Minus.png';
import Plus from '../images/Plus.png';
import Trash from '../images/trash.png';
import Pay from '../images/Pay.png';
import OurShoppingCart from '../images/OurShoppingCart.png';



class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handelUper = (id) => {
    this.props.UperCart(id);
  }
  handelDowner = (id) => {
    this.props.DownerCart(id);
   
  }

  addTo = (id) => {
    this.props.addInCart(id);
 
  }
  

  render() {
    console.log(this.props.sum);
    return (
      <div>
        <FCNavbar count={this.props.total} backHome={this.props.home}/>
        <Jumbotron fluid className="background" >
          <Container>
            <img src={OurShoppingCart} alt="shoppingCartlogo"/>
              <div className="shoppingcartDiv">
                <Container className="products">
                  
                {this.props.cart.map((i, index) => <div dir="rtl" className="product" key={index}>
                  
                <Card>
                    <Card.Body>
                      <Card.Title>{i.name}</Card.Title>
                      <img src={i.src} alt="cards" width='150' height='100' /><br/>
                      <Card.Text>
                      מחיר ליחידה: {i.price} <br/>
                          כמות: {i.quantity }  <br/>
                          לתשלום: {i.quantity * i.price} <br/>
                        <p key={index}>
                        <img src={Minus} alt="-" style={{width:30}} onClick={()=>this.handelDowner(i.id)}/>
                        <input className="input" type="text" value={i.quantity}></input>
                        <img src={Plus} alt="-" style={{width:30}} onClick={() => this.handelUper(i.id)}/>
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <img src={Trash} alt="" style={{width:40}} onClick={() => this.props.delete(index)}/> 
                    </Card.Footer>
                  </Card>
                </div>)}
                </Container>
                <p style={{backgroundColor:'#d8e2dc' ,marginLeft:450, marginRight:450,borderRadius:50,fontSize:25}}>{this.props.sum}  :סה"כ לתשלום </p>
                <img src={Pay} alt="pay" width={250} onClick={this.props.PaymentPage}/>

              </div>
          </Container>
        </Jumbotron>
        <FCFooter />
      </div>
    );
  }
}
export default withRouter(ShoppingCart);

