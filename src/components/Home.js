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
                isLoading: false,
                filtered: response.data
            })
        })
        .catch((e) => {
            console.log(e);
        })  
    }

    renderList = () => {
        return this.state.filtered.map( (data,index) => ( <li key={index} >{data.gender} - {data.hospital_admitted_to} - {data.resident_of} - {data.status}</li> ))
    }

    sortList = () => {
        const {covid_data, search} = this.state
        // console.log(covid_data)

        const filteredList =  covid_data.filter(data => data.hospital_admitted_to.toLowerCase().indexOf( search.toLowerCase() ) > -1 || data.resident_of.toLowerCase().indexOf( search.toLowerCase() ) > -1 );

        this.setState( {
            filtered: filteredList,
            search: search,
            isLoading: false
        })
    }

    handleChange = (e) => this.setState({[e.target.name]:e.target.value})

    render() {
        const {search} = this.state
        // console.log({covid_data})

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

        // const headerDate = {
        //     fontSize: "0.8rem",
        //     fontWeight: "500",
        //     textAlign: "center",
        //     marginBottom: "20px",
        //     fontStyle: "italic",
        //     color: "#777"
        // }

        const mt30 = {
            marginTop: "30px",
        }

        const mt100 = {
            marginTop: "100px",
        }
        
        return (
            <Container style={mt100}>

                <Jumbotron style={mt30}>
                    <h1 style={headerTitle}>Total COVID-19 Updates in the Philippines</h1>
                    <h2 style={headerTotal}>0000</h2>
                    {/* <h3 style={headerDate}>as of 1/2/2020 2:00pm</h3> */}
                    <CovidStatus />
                    <Search search={search} sortListHandler={this.sortList} handleChange={this.handleChange} />
                </Jumbotron>
                
                <Row>
                    { this.state.isLoading && <p>Loading data...</p> }
                    { !this.state.isLoading && <ol> {this.renderList()} </ol>} 
                </Row>
            </Container>
        )
    }
}

export default Home
