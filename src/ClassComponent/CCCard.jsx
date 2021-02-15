import React from "react";
import { Card } from "react-bootstrap";


export default class CCCard extends React.Component {

  render() {
    
    return (
      <Card>
        <Card.Img variant="top" src={this.props.img}/>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            {this.props.price}
            <p>
              <button onClick={()=>this.hadelUper(this.props.id)}>
                <h3>+</h3>
              </button>
              {this.props.count}
              <button onClick={this.props.Downer}>
                <h3>-</h3>
              </button>
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={this.addTo}>הוסף</button>
        </Card.Footer>
      </Card>
    );
  }
}
