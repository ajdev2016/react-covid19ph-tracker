import React, { Component } from 'react'
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';

export class Search extends Component {
    
    render() {
        console.log(this.props)
        // const searchCont = {
        //     margin: "20px"
        // }
        const {search, sortListHandler, handleChange} = this.props
        
        return (
            <>
                {/* <button onClick={ () => this.props.sortListHandler() }>sort</button> */}
                <InputGroup /*style={searchCont}*/>
                    <Input name="search" onChange={handleChange} value={search} placeholder="search region, city, hospital etc..." />
                    <InputGroupAddon addonType="append"><Button onClick={ () => sortListHandler() }>Search</Button></InputGroupAddon>
                </InputGroup>
           </>
        )
    }
}

export default Search
