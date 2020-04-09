import React, { Component } from 'react'
import { Container, Row, Jumbotron } from 'reactstrap';
import axios from "axios";
import CovidStatus from './CovidStatus'
import Search from './Search'

export class Home extends Component {
    
    constructor(props) { 
        super(props)
    
        this.state = {
            covid_data: null,
            search: '',
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

    sortList = () => {
        const {covid_data, search} = this.state

        console.log(search)

        const list =  covid_data.filter( data => ( data.age <= 30 ))

        this.setState({
            covid_data: list,
            isLoading: false
        })

    }

    handleChange = (e) => this.setState({[e.target.name]:e.target.value})

    render() {
        const {covid_data, search} = this.state
        console.log({covid_data})

        const headerTitle = {
            fontSize: "3.5rem",
            fontWeight: "300",
            lineHeight: "1.2",
            textAlign: "center",
            marginBottom: "30px"
        }

        const mt30 = {
            marginTop: "30px",
        }

        const mt100 = {
            marginTop: "100px",
        }
        
        return (
            <Container style={mt100}>

                <Jumbotron style={mt30}>
                    <h1 style={headerTitle}>Total Cases in Philippines</h1>
                    <CovidStatus />
                    <Search search={search} sortListHandler={this.sortList} handleChange={this.handleChange} />
                </Jumbotron>
                
                <Row>
                    { this.state.isLoading && <p>Loading data...</p> }
                    { !this.state.isLoading && <ul> {this.renderList()} </ul>} 
                </Row>
            </Container>
        )
    }
}

export default Home
