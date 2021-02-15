import React, { Component } from 'react'

export default class Counters extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }
   
    handleUp=()=>{     
        const count=this.state.counter + 1
        this.setState({counter:count})
    }

    handleDown=()=>{
        const coun=this.state.counter - 1
        if(this.state.counter===0){
            return 0;
        }
        this.setState({counter:coun})
    }

    render() {
        console.log(this.state.counter);
        return (
            <div>
                <button onClick={this.handleUp}><h3>+</h3></button>
                <button onClick={this.handleDown}><h3>-</h3></button>
            </div>
        )
    }
}