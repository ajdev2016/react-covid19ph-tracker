import React, { Component } from 'react'
import {Card, CardTitle, CardText, CardColumns, Jumbotron } from 'reactstrap';

export class CovidStatus extends Component {
    render() {
        const cardCont = {
            margin: "30px"
        }
        const cardBodyc = {
            backgroundColor: "#DB6623"
          };
          const cardBodyd = {
            backgroundColor: "#333333"
          };
          const cardBodyr = {
            backgroundColor: "#3E5EB3"
          };
          const cardTitle = {
              fontSize: "18px",
              fontWeight: "600",
              margin: "0 auto"
          }
          const cardText = {
              fontSize: "50px"
          }
          const headerTitle = {
            fontSize: "3.5rem",
            fontWeight: "300",
            lineHeight: "1.2",
            textAlign: "center"
          }
        return (
            <div>
            <Jumbotron fluid>
                <h1 style={headerTitle}>Total Cases in Philippines</h1>
                <CardColumns style={cardCont}>
                    <Card body inverse style={cardBodyc}>
                        <CardTitle style={cardTitle}>CONFIRMED</CardTitle>
                        <CardText style={cardText}>000</CardText>   
                    </Card>

                    <Card body inverse style={cardBodyd}>
                        <CardTitle style={cardTitle}>DEATHS</CardTitle>
                        <CardText style={cardText}>000</CardText>        
                    </Card>

                    <Card body inverse style={cardBodyr}>
                        <CardTitle style={cardTitle}>RECOVERED</CardTitle>
                        <CardText style={cardText}>000</CardText>
                    </Card>
                </CardColumns>
            </Jumbotron>
          </div>
        )
    }
}

export default CovidStatus
