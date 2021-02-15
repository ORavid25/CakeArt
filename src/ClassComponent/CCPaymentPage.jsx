import React, { Component } from 'react'
import {Jumbotron,Container,Form,Col} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import FCFooter from '../FunctionalComponent/FCFooter';
import FCNavbar from "../FunctionalComponent/FCNavbar";
import Paying from '../images/Paying.png';
import OurPayment from '../images/OurPayment.png';


class PaymentPage extends Component {
    constructor(props) {
        super(props);
        this.state={
          FirstName:'',
          LastName:'',
          Mail:'',
          City:'',
          Adresse:'',
          NumberCredit:'',
          YearExpiryDate:'',
          MonthExpiryDate:'',
          CVV:'',
          Orderday:'',
          Ordertime:'',
          item:[],
          rendom:0
        }

        this.regex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) //לוולידציה של האיימיל

      }

      InsertedFirstName=(e)=>{
       this.setState({FirstName:e.target.value})
      }
      InsertedLastName=(e)=>{
        this.setState({LastName:e.target.value})
      }
      InsertedMail=(e)=>{
        this.setState({Mail:e.target.value})
      }
      InsertedCity=(e)=>{
        this.setState({City:e.target.value})
       }
      InsertedAdresse=(e)=>{
        this.setState({Adresse:e.target.value})
      }
      InsertedNumberCredit=(e)=>{
        this.setState({NumberCredit:e.target.value})
      }
      InsertedYearExpiryDate=(e)=>{
      
        this.setState({YearExpiryDate:e.target.value})
      }
      InsertedMonthExpiryDate=(e)=>{
      
        this.setState({MonthExpiryDate:e.target.value})
      }
      InsertedCVV=(e)=>{
        this.setState({CVV:e.target.value})
      }
      InsertedOrdertime=(e)=>{
        this.setState({Ordertime:e.target.value})
      }
      InsertedOrderday=(e)=>{
        this.setState({Orderday:e.target.value})
      }
      handleSubmit =() => {
        if(this.state.FirstName===''||this.state.LastName===''||this.state.Ccv===''||
        this.state.YearExpiryDate===''||this.state.MonthExpiryDate===''||this.state.City===''||
        this.state.Adresse===''||this.state.Adresse===''){
           alert("One of your fields is probably empty ")  
           this.props.history.push({
            pathname: "/PaymentPage"})
        }
        //בדיקת רגולר קספרשן על האיימיל
        if (!this.regex.test(this.state.Mail)) {
          alert("Invalid Email , try again !")  
          this.props.history.push({
            pathname: "/PaymentPage"})
         }
        else{
        let name={FirstName:this.state.FirstName,LastName:this.state.LastName, Ordertime:this.state.Ordertime,Orderday:this.state.Orderday}
        this.props.sendNameUser(name)
        let obj = {FirstName:this.state.FirstName,LastName:this.state.LastName, Ordertime:this.state.Ordertime,Orderday:this.state.Orderday,
        Mail:this.state.Mail,Adresse:this.state.Adresse,City:this.state.City,NumberCreditthis:this.state.NumberCredit,
        CVV:this.state.CVV,YearExpiryDate:this.state.YearExpiryDate,MonthExpiryDatethis:this.state.MonthExpiryDate}
        this.props.sendUserToManage(obj)
        this.props.history.push({
            pathname:"/Confirmation"
        })
        }
      }
  
      render() {
        return (
          <div>
           <FCNavbar backHome={this.props.home} count={this.props.total}/>
            <Jumbotron fluid className="background" >
              <Container>
                <img src={OurPayment} alt="paymentlogo"/>
               <div style={{backgroundColor:'#f7cad0',marginLeft:150,padding:50,marginRight:150}}>
               <Form style={{marginLeft:20,marginRight:20}}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail" style={{fontSize:25}}>
      <Form.Label>שם משפחה</Form.Label>
      <Form.Control type="text" placeholder="הכנס שם משפחה" style={{textAlign:'right'}} name="LastName" value={this.state.LastName}  onChange={this.InsertedLastName}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword" style={{fontSize:25}}>
      <Form.Label>שם פרטי</Form.Label>
      <Form.Control type="text" placeholder="הכנס שם פרטי" style={{textAlign:'right'}} name="FirstName" value={this.state.FirstName}  onChange={this.InsertedFirstName}/>
    </Form.Group>
    
  </Form.Row>
  <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>אימייל</Form.Label>
      <Form.Control type="email" placeholder="הכנס כתובת מייל" style={{textAlign:'right'}} name="Mail" value={this.state.Mail}  onChange={this.InsertedMail}/>
    </Form.Group>

  <Form.Group as={Col} controlId="formGridCity" style={{fontSize:25}}>
      <Form.Label>עיר</Form.Label>
      <Form.Control type="text" placeholder="הכנס עיר מגורים" style={{textAlign:'right'}} name="City" value={this.state.City}  onChange={this.InsertedCity}/>
    </Form.Group>

  <Form.Group controlId="formGridAddress1" style={{fontSize:25}}>
    <Form.Label>כתובת</Form.Label>
    <Form.Control type="text" placeholder="הכנס כתובת" style={{textAlign:'right'}} name="Adresse" value={this.state.Adresse}  onChange={this.InsertedAdresse}/>
  </Form.Group>

   <Form.Row>
   <Form.Group as={Col} controlId="formGridZip" style={{marginLeft:10,marginRight:10,fontSize:25}}>
      <Form.Label>שעת הגעת ההזמנה</Form.Label>
      <Form.Control as="select" style={{textAlign:'right'}}  name="Ordertime" value={this.state.Ordertime}  onChange={this.InsertedOrdertime} >
      <option>XX:XX</option>
      <option>9:00</option>
      <option>9:30</option>
      <option>10:00</option>
      <option>10:30</option>
      <option>11:00</option>
      <option>11:30</option>
      <option>12:00</option>
      <option>12:30</option>
      <option>13:00</option>
      <option>13:30</option>
      <option>14:00</option>
      <option>14:30</option>
      <option>15:00</option>
      <option>15:30</option>
      <option>16:00</option>
      <option>16:30</option>
      <option>17:00</option>
      <option>17:30</option>
      <option>18:00</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip" style={{marginLeft:10,marginRight:10,fontSize:25}}>
      <Form.Label>בחירת יום להזמנה</Form.Label>
      <Form.Control as="select" style={{textAlign:'right'}} name="Orderday" value={this.state.Orderday}  onChange={this.InsertedOrderday} >
      <option>X</option>
      <option>א</option>
      <option>ב</option>
      <option>ה</option>
      </Form.Control>
    </Form.Group>
   </Form.Row>
  <Form.Row>
  
    <Form.Group as={Col} controlId="formGridState" style={{marginLeft:-25,fontSize:25}}>
      <Form.Label>CVV</Form.Label>
      <Form.Control type="text" placeholder="שלוש ספרות בגב הכרטיס" style={{textAlign:'right'}} name="CVV" value={this.state.CVV}  onChange={this.InsertedCVV}>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip" style={{marginLeft:10,marginRight:10,fontSize:25}}>
      <Form.Label>חודש</Form.Label>
      <Form.Control as="select" style={{textAlign:'right'}} name="MonthExpiryDate" value={this.state.MonthExpiryDate}  onChange={this.InsertedMonthExpiryDate} >
      <option>00</option>
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option>05</option>
      <option>06</option>
      <option>07</option>
      <option>08</option>
      <option>09</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip" style={{marginLeft:10,marginRight:10,fontSize:25}}>
      <Form.Label>שנת תוקף</Form.Label>
      <Form.Control as="select" style={{textAlign:'right'}} name="YearExpiryDate" value={this.state.YearExpiryDate}  onChange={this.InsertedYearExpiryDate} >
      <option>XXXX</option>
      <option>2021</option>
      <option>2022</option>
      <option>2023</option>
      <option>2024</option>
      <option>2025</option>
      <option>2026</option>
      <option>2027</option>
      <option>2028</option>
      <option>2029</option>
      <option>2030</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState" style={{marginRight:-25,fontSize:25}}>
      <Form.Label>מספר אשראי</Form.Label>
      <Form.Control type="text" placeholder="הכנס מספר כרטיס" name="NumberCredit" value={this.state.NumberCredit}  onChange={this.InsertedNumberCredit} >
      </Form.Control>
    </Form.Group>
  </Form.Row>
  <Form.Row style={{marginLeft:50}}>
    <img src={Paying} alt="pay" onClick={this.handleSubmit}/>
    <p style={{backgroundColor:'#d8e2dc',marginLeft:80 , borderRadius:10, marginTop:30,marginBottom:15,fontSize:25}}>סה"כ לתשלום :{this.props.sum}</p>
  </Form.Row>
</Form>
               </div>          
              </Container>
            </Jumbotron >
           <FCFooter/>
          </div>
        );
      }
}
export default withRouter(PaymentPage)
