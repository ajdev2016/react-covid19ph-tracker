import React, { Component } from 'react'

export class Search extends Component {
    
    render() {
        // console.log(this.props)
        return (
            <div>
                <button onClick={ () => this.props.sortListHandler() }>sort</button>
            </div>
        )
    }
}

export default Search
