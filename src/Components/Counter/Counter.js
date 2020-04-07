import React from "react";
import './Counter.scss'
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState(() => ({
            count: this.state.count++
        }));
    };

    decrement() {
        this.setState(() => ({
            count: this.state.count--
        }));
    };

    reset() {
        this.setState(() => ({
            count: 0
        }));
    };

    render() {
        return (
            <div className='counter'>
                <Box className='counter__container'
                     border={1}
                     borderColor="primary.main"
                     borderRadius={16}>
                    <h1>Simple counter:</h1>
                    <h2>{this.state.count}</h2>
                    <Button className="counterButtons"
                            variant="contained"
                            color="primary"
                            onClick={this.increment}
                    >INC (+)
                    </Button>
                    <Button className="counterButtons"
                            variant="contained"
                            color="primary"
                            onClick={this.decrement}
                    >DEC (-)
                    </Button>
                    <Button className="counterButtons"
                            variant="contained"
                            color="primary"
                            onClick={this.reset}
                    >RESET (0)
                    </Button>
                </Box>
            </div>
        );
    }
}