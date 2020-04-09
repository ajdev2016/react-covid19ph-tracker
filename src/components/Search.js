import React, { Component } from 'react'
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';

export class Search extends Component {
    
    render() {
        // console.log(this.props)
        // const searchCont = {
        //     margin: "20px"
        // }
        return (
            <>
                {/* <button onClick={ () => this.props.sortListHandler() }>sort</button> */}
                <InputGroup /*style={searchCont}*/>
                    <Input placeholder="search region, city, hospital etc..." />
                    <InputGroupAddon addonType="append"><Button onClick={ () => this.props.sortListHandler() }>Search</Button></InputGroupAddon>
                </InputGroup>
           </>
        )
    }
}

export default Search
