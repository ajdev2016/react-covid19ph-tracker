import React, { Component } from 'react'
import axios from "axios";
// import CovidStatus from  'CovidStatus'
import CovidStatus from './CovidStatus'

export class Home extends Component {
    
    constructor(props) { 
        super(props)
    
        this.state = {
            covid_data: null    
        }
    }

    componentDidMount() {
        axios.get('https://coronavirus-ph-api.herokuapp.com/cases')
        .then( response => {
            // console.log({response});
            this.setState({covid_data: response.data})
        })
        .catch((e) => {
            console.log(e);
        })  
    }

    render() {
        const {covid_data} = this.state
        console.log({covid_data})
        return (
            <div>
                <CovidStatus />
            </div>
        )
    }
}

export default Home
