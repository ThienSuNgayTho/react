import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        };
        
}
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(dish) {
        const formatter = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" }).format;
        if (dish != null)
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {dish.comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {formatter( new Date (comment.date))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;