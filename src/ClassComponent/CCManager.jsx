import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Main from "./CCMain";
import Cookeis from "./CCcookeis";
import Cakes from "./CCCakes";
import Special from "./CCSpecial";
import ContactUs from "./CCContactUs";
import ShoppingCart from "./CCShoppingCart";
import PaymentPage from "./CCPaymentPage";
import Confirmation from './CCConfirmation';
import Amsterdam from '../images/Amsterdam.jpg';
import snowCookeis from '../images/snowCookies.jpg';
import alphahores from '../images/alphahores.jfif';
import nutella from '../images/nutellaCookies.png';
import lemon from '../images/lemonPai.png';
import mose from '../images/moseCake.png';
import birthday from '../images/birthdayCake.jfif';
import cheese from '../images/cheeseCake.jpg';
import dulse from '../images/dulseDeLeche.jpg';
import wedding from '../images/wedding.jfif';
import black from '../images/black.jpg';
import love from '../images/love.jpg';

class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: [ 
                 {id:1, name: "עוגיית אמסטרדם", price: 15, quantity: 0,src: Amsterdam ,count:0},
                 {id:2, name: "עוגיית נוטלה", price: 7, quantity: 0, src: nutella ,count:0 },
                 {id:3, name: "אלפחורס", price: 3, quantity: 0, src: alphahores ,count:0 },
                 {id:4, name: "עוגיית שלג", price: 5, quantity: 0, src: snowCookeis ,count:0 }],
      cakes: [
                 {id:5, name: "עוגת שוקולד ", price: 70, quantity: 0, src: birthday ,count:0},
                 {id:6, name: "עוגת גבינה", price: 100, quantity: 0, src: cheese ,count:0 },
                 {id:7, name: "פאי לימון", price: 85, quantity: 0, src: lemon ,count:0 },
                 {id:8, name: "עוגת מוס שוקולד", price: 75, quantity: 0, src: mose ,count:0 }],
      special: [
                 {id:9, name: "עוגת אהבה", price: 120, quantity: 0, src: love ,count:0},
                 {id:10, name: "שוקולד המיוחדת", price: 170, quantity: 0 , src: black ,count:0},
                 {id:11, name: "עוגת חתונה", price: 350, quantity: 0 , src: wedding ,count:0},
                 {id:12, name: "עוגת ריבת חלב", price: 110, quantity: 0 , src: dulse,count:0}],
      cart:[], 
      sum:0,
      count:0,
      totalCard:0, 
      users:[],
      userName:[]
    };
  }
  // הורדת כמות המוצרים שאנו רוצים להוריד ממוצר כל שהוא על פי מחלקה
  Downer = (id,which) => {
    let item,quantity;
    if(which===0){
      item=this.state.cakes.find(item=>item.id===id)
      quantity= --item.quantity;
      if(quantity<0) 
      {
         return item.quantity=0 ;
      }
      if(item.count>=1){
        alert('אחרי ההוספה לא ניתן לשנות את הכמות הנבחרת אלייך לגשת לעגלת הקניות ולבצע זאת שם')
        quantity=++item.quantity
        this.setState({quantity})
        return
      }
      this.setState({quantity}) 
    }
     if(which===1){
      item=this.state.cookies.find(item=>item.id===id)
      quantity= --item.quantity;
      if(quantity<0) 
      {
         return item.quantity=0 ;
      }
      if(item.count>=1){
        alert('אחרי ההוספה לא ניתן לשנות את הכמות הנבחרת אלייך לגשת לעגלת הקניות ולבצע זאת שם')
        quantity=++item.quantity
        this.setState({quantity})
        return
      }
      this.setState({quantity}) 
    }
     if(which===2){
      item=this.state.special.find(item=>item.id===id)
      quantity= --item.quantity;
      if(quantity<0) 
      {
         return item.quantity=0 ;
      }
      if(item.count>=1){
        alert('אחרי ההוספה לא ניתן לשנות את הכמות הנבחרת אלייך לגשת לעגלת הקניות ולבצע זאת שם')
        quantity=++item.quantity
        this.setState({quantity})
        return
      }
      this.setState({quantity}) 
    }
    
   
    }
// העלאת כמות מוצר מסוים לעגלת הקניות על פי מחלקה
  Uper = (id,which) => {
    let item,quantity;
    if(which===0){
      item=this.state.cakes.find(item=>item.id===id)
      quantity=item.quantity++
      if(item.count>=1 ){
        alert('אחרי ההוספה לא ניתן לשנות את הכמות הנבחרת אלייך לגשת לעגלת הקניות ולבצע זאת שם' )
        quantity=--item.quantity
        this.setState({quantity})
        return
      }
      this.setState({quantity}) 
    }
     if(which===1){
      item=this.state.cookies.find(item=>item.id===id)
      quantity=item.quantity++
      if(item.count>=1){
        alert('אחרי ההוספה לא ניתן לשנות את הכמות הנבחרת אלייך לגשת לעגלת הקניות ולבצע זאת שם')
        quantity=--item.quantity
        this.setState({quantity})
        return
      }
      this.setState({quantity}) 
    }
    if(which===2){
      item=this.state.special.find(item=>item.id===id)
      quantity=item.quantity++
      if(item.count>=1){
        alert('אחרי ההוספה לא ניתן לשנות את הכמות הנבחרת אלייך לגשת לעגלת הקניות ולבצע זאת שם')
        quantity=--item.quantity
        this.setState({quantity})
        return
      }
      this.setState({quantity}) 
    }
       
  }

  // הוספת המוצר שנבחר + כמות +ומחיר מצטבר למוצר על פי הכמות לעגלת הקניות
  addToCart=(id,which)=>{
    let item,count=0
    let arr=this.state.cart;
    if(which===0){
      item=this.state.cakes.find(item=>item.id===id)  
      if(item.count>=1 && item.quantity>0){
        alert('מצטערים אבל אתה לא יכול ללחוץ שוב על הוספה רק דרך עגלת הקניות המשך קנייה מהנה')  
        return 
      }
      if(item.quantity<=0){
      return 
      }
      let price = item.price * item.quantity +this.state.sum
      this.setState({sum:price});
      arr=[...arr,item]
      count=++item.count
      this.setState({count})
    }
    if(which===1){
      item=this.state.cookies.find(item=>item.id===id)
      if(item.count>=1 && item.quantity>0){
        alert('מצטערים אבל אתה לא יכול ללחוץ שוב על הוספה רק דרך עגלת הקניות המשך קנייה מהנה')
        return
      }
      if(item.quantity<=0){
        return 
        }
      let price = item.price * item.quantity +this.state.sum
      this.setState({sum:price});
      arr=[...arr,item]
      count=++item.count
      this.setState({count})
    }
    if(which===2){
      item=this.state.special.find(item=>item.id===id)
      if(item.count>=1 && item.quantity>0){
        alert('מצטערים אבל אתה לא יכול ללחוץ שוב על הוספה רק דרך עגלת הקניות המשך קנייה מהנה')
        return
      }
      if(item.quantity<=0){
        return 
        }
      let price = item.price * item.quantity +this.state.sum
      this.setState({sum:price});
      arr=[...arr,item]
      count=++item.count
      this.setState({count})
    }
    let total=this.state.totalCard+item.quantity
    this.setState({cart:arr})   
    this.setState({totalCard:total})
  }

// חזרה לדף הבית
  BackHome=()=>{
    this.props.history.push({
      pathname: "./"
  })
  }

  // המידע שיקלט מהפרטים של הלקוח 
  getUserFromRege = (user) => {
    let arr = [...this.state.users,user]
    this.setState({ users:arr })
}

// פונקציה שתציג את השם ושם משפחה לאחר התשלום 
userName=(name)=>{
  let arr = [...this.state.userName,name]
  this.setState({ userName:arr })
}

// מחיקת מוצר מסוים מעגלת הקניות
removeFromCart = (index) => {
  let item = this.state.cart[index]
  let price = this.state.sum - (this.state.cart[index].price*this.state.cart[index].quantity)
  let arr = this.state.cart.filter((item, i) => i !== index);
  this.setState({ cart: arr, sum: price });
  let total=this.state.totalCard-item.quantity
  this.setState({totalCard:total})
}

//פונקציות + ו - לעגלת הקניות
DownerCart = (id) => {
    let item=this.state.cart.find(item=>item.id===id)
    let quantity= --item.quantity;
    if(quantity<1) 
    {
       return item.quantity=1 ;
    }
  this.setState({quantity})
  let total=this.state.totalCard-1
     this.setState({totalCard:total}) 
     let price =  this.state.sum-item.price 
     this.setState({sum:price});
  }

UperCart = (id) => {
     let item=this.state.cart.find(item=>item.id===id)
     let quantity=++item.quantity
     this.setState({quantity})  
     let total=this.state.totalCard+1
     this.setState({totalCard:total}) 
     let price = this.state.sum+item.price 
     this.setState({sum:price});
}

// הוספת כמות מוצר מסוים בתוך עגלת הקניות
addInCart=(id)=>{
    let sumt=0
    let arr=this.state.cart; 
    let item=this.state.cakes.find(item=>item.id===id)
    let price = item.price * item.quantity +this.state.sum  
    this.setState({sum:price});
    arr=[...arr,item]
    let count= sumt+1;
    this.setState({count:count})
    let total=this.state.totalCard+item.quantity
    this.setState({cart:arr})   
    this.setState({totalCard:total})
}
//פונקציה שתוודא שרק עם המחיר גדול מ0 יהיה ניתן להכנס לדף תשלום
PaymentPage=()=>{
  if(this.state.sum<=0){
    alert('מצטערים לבסר לך אבל עגלת הקניות שלך ריקה ולכן לא תוכל להכנס לדף תשלום')
    this.props.history.push({
      pathname: "/ShoppingCart"
  })
  }
  else{
    this.props.history.push({
      pathname: "/PaymentPage"
  })
  }
}
  render() {
      
    return (
      <div>    
        <Switch>
          <Route exact path="/" render={() => <Main total={this.state.totalCard}/>} />
          <Route path="/Cookies" render={() => <Cookeis total={this.state.totalCard} cakes={this.state.cookies} Uper={this.Uper} Downer={this.Downer} which={1} send={this.addToCart} home={this.BackHome} />} />
          <Route path="/Cakes"render={() => <Cakes total={this.state.totalCard} cakes={this.state.cakes} Uper={this.Uper} Downer={this.Downer} which={0} send={this.addToCart} home={this.BackHome} shop={this.state.sum} />}/>
          <Route path="/Special" render={() => <Special total={this.state.totalCard} cakes={this.state.special} Uper={this.Uper} Downer={this.Downer} which={2} send={this.addToCart} home={this.BackHome} />} />
          <Route path="/ContactUs" render={() => <ContactUs total={this.state.totalCard} home={this.BackHome}/>} delete={this.removeFromCart} />
          <Route path="/ShoppingCart" render={() => <ShoppingCart PaymentPage={this.PaymentPage} addInCart={this.addInCart} total={this.state.totalCard} cart={this.state.cart} home={this.BackHome} sum={this.state.sum} delete={this.removeFromCart} UperCart={this.UperCart} DownerCart={this.DownerCart} />} />
          <Route path="/PaymentPage" render={() => <PaymentPage total={this.state.totalCard} sum={this.state.sum} sendUserToManage={this.getUserFromRege} sendNameUser={this.userName} home={this.BackHome}/>} />     
          <Route path="/Confirmation" render={() => <Confirmation user={this.state.userName} home={this.BackHome}/>} />
        </Switch>     
      </div>
    );
  }
}
export default withRouter(Manager);
