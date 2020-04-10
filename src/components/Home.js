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
            filtered: null,
            total_cases: 0,
            total_confirmed: 0,
            total_deaths: 0,
            total_recovered: 0,
            isLoading: true    
        }

        // this.renderList = this.renderList.bind(this)
    }

    componentWillMount() {
        axios.get('https://coronavirus-ph-api.herokuapp.com/cases')
        .then( response => {
            // console.log(response.data);   

            const allTotals = this.getAllTotals(response.data, response.data)
            // console.log(allTotals)

            this.setState({
                covid_data: response.data,
                isLoading: false,
                filtered: response.data,
                total_cases: allTotals.total_cases,
                total_confirmed: allTotals.total_confirmed,
                total_recovered: allTotals.total_recovered,
                total_deaths: allTotals.total_deaths
            })


        })
        .catch((e) => {
            console.log(e);
        })  
    }

    getAllTotals = (covid_data, filtered) => {
        let total_cases = covid_data.length
        let total_confirmed = 0
        let total_recovered = 0
        let total_deaths = 0
        let allTotal = {}

        filtered.forEach( data => {
            // console.log(data.status)

            if ( data.status === 'Recovered' ) {
                total_recovered = total_recovered + 1
            } else if ( data.status === 'Died' ) {
                total_deaths = total_deaths + 1
            }

            total_confirmed = total_confirmed + 1
        })

        allTotal = {total_cases: total_cases, total_confirmed: total_confirmed, total_recovered: total_recovered, total_deaths: total_deaths }
        // console.log(allTotal)
        return allTotal
    }

    renderList = () => {
        return this.state.filtered.map( (data,index) => ( <li key={index} >{data.gender} - {data.hospital_admitted_to} - {data.resident_of} - {data.status}</li> ))
    }

    sortList = (location) => {
        const {covid_data} = this.state
        // console.log(covid_data)

        const filteredList =  covid_data.filter(data => 
                                data.hospital_admitted_to.toLowerCase().indexOf( location.toLowerCase() ) > -1 
                                || data.resident_of.toLowerCase().indexOf( location.toLowerCase() ) > -1 );

        const allTotals = this.getAllTotals(covid_data, filteredList)

        this.setState( {
            filtered: filteredList,
            search: location,
            isLoading: false,
            total_cases: allTotals.total_cases,
            total_confirmed: allTotals.total_confirmed,
            total_recovered: allTotals.total_recovered,
            total_deaths: allTotals.total_deaths
        })
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }

    fook = (location) => {
        this.setState({search:location})
    }

    render() {

        const headerTitle = {
            fontSize: "2.5rem",
            fontWeight: "300",
            lineHeight: "1.2",
            textAlign: "center",
            marginBottom: "5px"
        }

        const headerTotal = {
            fontSize: "3.5rem",
            fontWeight: "600",
            textAlign: "center",
            margin: "20px 0 30px"
        }

        const mt30 = {
            marginTop: "30px",
        }

        const mt100 = {
            marginTop: "100px",
        }

        const { search, covid_data, total_cases, total_confirmed, total_recovered, total_deaths } = this.state
        // console.log({covid_data})
        
        return (
            <Container style={mt100}>

                <Jumbotron style={mt30}>
                    <h1 style={headerTitle}>Total COVID-19 Updates in the Philippines</h1>
                    <h2 style={headerTotal}>{ total_cases }</h2>
                    <CovidStatus total_confirmed={total_confirmed} total_recovered={total_recovered} total_deaths={total_deaths} /> 
                    <Search fook={this.fook} covid_data={covid_data} search={search} sortListHandler={this.sortList} handleChange={this.handleChange} />
                </Jumbotron>
                
                {/* <Row>
                    { this.state.isLoading && <p>Loading data...</p> }
                    { !this.state.isLoading && <ol> {this.renderList()} </ol> } 
                </Row> */}
            </Container>
        )
    }
}

export default Home
