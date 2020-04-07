import React from "react";
import './Form.scss'

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    };

    render() {
        return (
            <div>
                <div>
                    <input
                        className="userName"
                        type="text"
                    />
                    <input
                        className="userEmail"
                        type="text"
                    />
                    <textarea name=""
                              id=""
                              cols="30"
                              rows="10">

                    </textarea>
                </div>
            </div>
        )
    }
};