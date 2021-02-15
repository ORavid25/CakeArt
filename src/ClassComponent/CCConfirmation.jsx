import React, { Component } from "react";
import { Jumbotron, Container,} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../CSS/navbar.css";
import FCFooter from "../FunctionalComponent/FCFooter";
import FCNavbar from "../FunctionalComponent/FCNavbar";
import OrderConfirm from "../images/OrderConfirm.png";
import HomeReturn from "../images/HomeReturn.png";


class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FCNavbar />
        <Jumbotron className="background" fluid>
          <Container>
            <div dir="rtl" style={{ backgroundColor: "#f7cad0" , fontSize: 12}}>
              <img src={OrderConfirm} alt="confirm"/>
              {this.props.user.map((r, index) => (
                <p key={index} className="confirm">  
                 תודה על שהזמנת דרכנו {r.FirstName} {r.LastName} <br></br>
                  <p>ניצור קשר כאשר ההזמנה תיהיה מוכנה !</p>
                  <img src={HomeReturn} alt="home" onClick={this.props.home}/>
                  <br/><br/>
                </p>
              ))}
            </div>
          </Container>
        </Jumbotron>
        <FCFooter />
      </div>
    );
  }
}
export default withRouter(Confirmation);
