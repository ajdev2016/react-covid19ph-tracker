import React, { Component } from 'react'
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';

export class Search extends Component {
    
    render() {
        // console.log(this.props)
        const searchCont = {
            margin: "20px"
        }
        return (
            <div>
                {/* <button onClick={ () => this.props.sortListHandler() }>sort</button> */}
                <InputGroup style={searchCont}>
                    <Input placeholder="Search..." />
                    <InputGroupAddon addonType="append"><Button>Submit</Button></InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default Search
