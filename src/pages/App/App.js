import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { max_number } from "../../helper/index";
import Gift from "../../components/Gift/Gift";

class App extends Component {
    constructor() {
        super();
        this.state = {
            gifts: []
        };
    }

    addGift = () => {
        const { gifts } = this.state;
        gifts.push({ id: max_number(this.state.gifts.map(gift => gift.id)) + 1 });
        this.setState({ gifts })
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({ gifts });
    }

    render() {
        return ( 
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {
                        this.state.gifts.map(gift => {
                            return(
                                <Gift 
                                    removeGift={this.removeGift}
                                    gift={gift}
                                    key={gift.id.toString()} 
                                />
                            )
                        })
                    }
                </div>
                <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;