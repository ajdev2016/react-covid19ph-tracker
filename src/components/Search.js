import React, { Component } from 'react'
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';

export class Search extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            locations: null,
            search:  '',
            lookUpLocations: null,
            isLoading: true
        }
    }

    componentDidUpdate() {
        if(this.state.locations === null) {
            const {covid_data} = this.props
            const hospitals = covid_data.map(item => item.hospital_admitted_to.toLowerCase()).filter((value, index, self) => self.indexOf(value.toLowerCase()) === index)
            const residents = covid_data.map(item => item.resident_of.toLowerCase()).filter((value, index, self) => self.indexOf(value.toLowerCase()) === index)
            // console.log(hospitals)
            // console.log(residents)
            this.setState({
                locations: [...hospitals, ...residents]
            })
        }
    }

    lookUpLocation = e => {
        // console.log(e.target.value)
        if ( e.target.value !== null && e.target.value !== '' ) {
            this.setState({search:e.target.value, isLoading:false})
        } else {

            this.setState({isLoading:true})
            this.props.sortListHandler('')
        }
    }

    renderLookUpLocation = () => {
        const {locations, search} = this.state
        // console.log(search)
        return locations.filter( company => ( company.toLowerCase().indexOf( search.toLowerCase() ) > -1))
                        .map( (location,index) => ( <li key={index} onClick={() => this.chooseLocation(location)}>{location}</li> ))         
    }

    chooseLocation = (location) => {
        this.props.sortListHandler(location)   
        this.setState({isLoading:true})
    }
    
    render() {
        const {search, handleChange} = this.props
        // const {locations} = this.state
        // console.log(locations)
        
        return (
            <>
                {/* <button onClick={ () => this.props.sortListHandler() }>sort</button> */}
                <InputGroup /*style={searchCont}*/>
                    <Input name="search" onChange={handleChange} onKeyUp={ this.lookUpLocation.bind(this) } value={search} autoComplete="off"  placeholder="search region, city, hospital etc..." />
                    {/* <InputGroupAddon addonType="append"><Button onClick={ () => sortListHandler() }>Search</Button></InputGroupAddon> */}
                </InputGroup>
                <ul>
                    {!this.state.isLoading && this.renderLookUpLocation()}
                </ul>
           </>
        )
    }
}

export default Search
