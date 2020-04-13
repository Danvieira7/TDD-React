import React, { Component } from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

class Gift extends Component {
    constructor(){
        super();
        this.state = {
            person: '',
            present: ''
        }
    }

    render() {
        return (
            <div className="gift">
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl 
                            onChange={evt => { 
                                    this.setState({ person: evt.target.value }) 
                                }
                            }
                            className="input-person"
                        />
                    </FormGroup>
                </Form>
                <Form>
                    <FormGroup>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl 
                            onChange={evt => { 
                                    this.setState({ present: evt.target.value }) 
                                }
                            }
                            className="input-present"
                        />
                    </FormGroup>
                </Form>
                <Button 
                    className="btn-rmv"
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                >
                    Remove Gift
                </Button>
            </div>
        )
    }
}

export default Gift;