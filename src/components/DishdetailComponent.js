import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


        

    function RenderDish({dish}) {
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
    function RenderComments({dish}) {
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
    const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                </div>
                <div  className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish} />
                </div>
            </div>
            </div>
            
        );
    }

export default DishDetail;