import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import CovidStatus from './CovidStatus'

export class Home extends Component {
    
    constructor(props) { 
        super(props)
    
        this.state = {
            covid_data: null,
            isLoading: true    
        }

        this.renderList = this.renderList.bind(this)
    }

    componentDidMount() {
        axios.get('https://coronavirus-ph-api.herokuapp.com/cases')
        .then( response => {
            // console.log({response});
            this.setState({
                covid_data: response.data,
                isLoading: false
            })
        })
        .catch((e) => {
            console.log(e);
        })  
    }

    renderList = () => {
        return this.state.covid_data.map( (data,index) => ( <li key={index} >{data.case_no} - {data.nationality} - {data.status}</li> ))
    }

    render() {
        const {covid_data} = this.state
        console.log({covid_data})
        
        return (
            <Container>
                <Row>
                    <CovidStatus />
                </Row>
                <Row>
                    { this.state.isLoading && <p>Loading data...</p> }
                    { !this.state.isLoading && <ul> {this.renderList()} </ul>} 
                </Row>
            </Container>
        )
    }
}

export default Home