import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:''
        }
    }

    componentDidMount() {
        // this.name = "veeral";
    }

    render() {
        return (
            <div>
                Fast job Alart! {};
           </div>
        )
    }
}