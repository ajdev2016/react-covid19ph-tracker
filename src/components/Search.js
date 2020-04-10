import React, { Component } from 'react'
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';

export class Search extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            hospitals: null,
            residents: null    
        }
    }
    
    
    render() {
        // console.log(this.props)
        // const searchCont = {
        //     margin: "20px"
        // }
        const {search, sortListHandler, handleChange, covid_data} = this.props
        

        // {console.log(covid_data)}
        // const hospitals = covid_data.map(item => item.hospital_admitted_to) .filter((value, index, self) => self.indexOf(value) === index)
        // const residents = covid_data.map(item => item.resident_of) .filter((value, index, self) => self.indexOf(value) === index)
        // console.log(hospitals)
        // console.log(residents)

        
        
        return (
            <>
                {/* <button onClick={ () => this.props.sortListHandler() }>sort</button> */}
                <InputGroup /*style={searchCont}*/>
                    <Input name="search" onChange={handleChange} value={search} autoComplete="off" placeholder="search region, city, hospital etc..." />
                    <InputGroupAddon addonType="append"><Button onClick={ () => sortListHandler() }>Search</Button></InputGroupAddon>
                </InputGroup>
           </>
        )
    }
}

export default Search
