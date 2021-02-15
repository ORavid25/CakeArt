import React, { Component } from 'react'
import { Card, Jumbotron, Container } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import FCFooter from '../FunctionalComponent/FCFooter';
import FCNavbar from '../FunctionalComponent/FCNavbar';
import Minus from '../images/Minus.png';
import Plus from '../images/Plus.png';
import AddTo from '../images/AddTo.png';
import OurSpecial from '../images/OurSpecial.png';




class Special extends Component {
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
        <FCNavbar count={this.props.total} backHome={this.props.home}/>
        <Jumbotron fluid className="background" >
          <Container>
            <img src={OurSpecial} alt="special"/>
            <div className="products">
              {this.props.cakes.map((speical, index) => {
                return (
                  <Card>
                    <Card.Body>
                      <Card.Title>{speical.name}</Card.Title>
                      <img src={speical.src} alt="special" width='150' height='100' /><br/><br/>
                      <Card.Text>
                        
                        מחיר ליחידה: {speical.price}
                        <p key={index}>
                            <img src={Plus} alt="+" style={{width:30}} onClick={() => this.handelUper(speical.id)}/>
                            <input className="input" type="text" value={speical.quantity}></input>
                            <img src={Minus} alt="-" style={{width:30}} onClick={() => this.handelDowner(speical.id)}/>
                        </p>

                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <img src={AddTo} alt="add to cart" width={200} onClick={() => this.addTo(speical.id)}/>
                    </Card.Footer>
                  </Card>
                )
              })}
            </div>
          </Container>
        </Jumbotron >
        <FCFooter />
      </div>
    )
  }
}
export default withRouter(Special)
