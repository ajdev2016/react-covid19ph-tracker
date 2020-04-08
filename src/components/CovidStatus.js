import React, { Component } from 'react'
import {Card, Button, CardTitle, CardText, CardColumns} from 'reactstrap';

export class CovidStatus extends Component {
    render() {
        return (
            <div>
            <CardColumns>
                <Card body inverse color="danger" style={{ textAlign: 'center' }}>
                    <CardTitle><h5>CONFIRMED</h5></CardTitle>
                    <CardText><h2>000</h2></CardText>   
                </Card>

                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', textAlign: 'center'}}>
                    <CardTitle><h5>DEATHS</h5></CardTitle>
                    <CardText><h2>000</h2></CardText>        
                </Card>

                <Card body inverse color="primary" style={{ textAlign: 'center' }}>
                    <CardTitle><h5>RECOVERED</h5></CardTitle>
                    <CardText><h2>000</h2></CardText>
                </Card>
                
            </CardColumns>
          </div>
        )
    }
}

export default CovidStatus
