import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link ,withRouter} from 'react-router-dom';
import '../CSS/navbar.css';
import Logo from '../images/CakeArtlogo.png';
import CartImg from '../images/Cart.png';
import specialTitle from '../images/specialTitle.png';
import ContactUs from '../images/ContactUs.png';
import Products from '../images/Products.png';
import Cakes from '../images/Cakes.png';
import Cookies from '../images/Cookies.png';


class FCNavbar extends Component {

  render() {
    return (
      
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg" >
        <Nav>
          <Link size="lg" to="/ShoppingCart"><img src={CartImg} alt="cart" style={{ width: 50, height: 50 }} /></Link>
          <p style={{backgroundColor:'red',height: 25,width: 25,borderRadius: 30}}>{this.props.count}</p>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/ContactUs" style={{ fontSize:25 ,marginLeft: 20, marginTop: 7, marginRight:40}}><img src={ContactUs} width={250} alt="צור קשר"></img></Link>
            <Link to="/Special" style={{ fontSize:25 ,marginLeft: 200, marginTop: 7, marginRight: 250}}><img src={specialTitle} width={250} alt="מיוחדים"></img></Link>
            <NavDropdown
              className="mr-auto"
              title={<img src={Products} alt="מוצרים" width={240}></img>}
              id="collasible-nav-dropdown" dir="rtl" style={{fontSize:25}}>
              <Link  to="/Cookies"><img src={Cookies} alt="cookies" width={240}/></Link><br/>
              <NavDropdown.Divider />
              <Link to="/Cakes"><img src={Cakes} alt="cakes" width={240}/></Link>
            </NavDropdown>
          </Nav>
          <Navbar.Brand style={{ marginLeft: 150 }} href="#home">
            <img className="logo" src={Logo} alt="logo" onClick={this.props.backHome} />
            </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>

    </div>
    )

  }

}

export default withRouter(FCNavbar)