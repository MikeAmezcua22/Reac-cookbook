import react from "react";
import React, { Component } from 'react';
import './Coins.css';

class Coins extends Component {
    constructor() {
        super();

        //Initial state
        this.state = {
            dollars: 0
        };
    }

    //shouldComponentUpdate(props, state) {
        //we only update if the dollars are multiples of 10
    //    return state.dollars % 10 === 0; 
    //}
    //shouldComponentUpdate(props, state) {
    //    return false;
    //}

    handleOnchange = e => {
        this.setState({
            dollars: Number(e.target.value || 0)
        });
    }

    render(){
        return(
            <div className="Coins">
                <h1>Buy crypto coins!</h1>
                <div className="question"> 
                    <p>How much dollars do you have?</p>

                    <p>
                        <input
                            placeholder="0"
                            onChange={this.handleOnchange}
                            type="text"
                        />
                    </p>
                </div>

                <div className="answer">
                    <p>Crypto coin price: $10</p>
                    <p>
                         You can buy <strong>{this.state.dollars / 10 }</strong>
                          coins.
                    </p>
                </div>
            </div>
        );
    }
}

export default Coins;


