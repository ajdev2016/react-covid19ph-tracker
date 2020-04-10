import React, { Component } from 'react'
import {Card, CardTitle, CardText, CardColumns } from 'reactstrap';

export class CovidStatus extends Component {
    render() {
        // const cardCont = {
        //     margin: "30px"
        // }
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

        const { total_confirmed, total_recovered, total_deaths} = this.props

        return (
            <>
                <CardColumns /*style={cardCont}*/>
                    <Card body inverse style={cardBodyc}>
                        <CardTitle style={cardTitle}>CONFIRMED</CardTitle>
                        <CardText style={cardText}>{total_confirmed}</CardText>   
                    </Card>

                    <Card body inverse style={cardBodyr}>
                        <CardTitle style={cardTitle}>RECOVERED</CardTitle>
                        <CardText style={cardText}>{total_recovered}</CardText>
                    </Card>

                    <Card body inverse style={cardBodyd}>
                        <CardTitle style={cardTitle}>DEATHS</CardTitle>
                        <CardText style={cardText}>{total_deaths}</CardText>        
                    </Card> 
                </CardColumns>
          </>
        )
    }
}

export default CovidStatus
