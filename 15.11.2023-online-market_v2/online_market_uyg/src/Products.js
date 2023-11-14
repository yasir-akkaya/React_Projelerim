import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardGroup,
  CardTitle,
  Button,
  Col,
} from "reactstrap";

export default class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <h2>{this.props.currentCategory}</h2>
        <CardGroup style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Col key={product.id} xs="3" style={{ marginBottom: "15px" }}>
              <Card
                style={{ marginLeft: "10px", marginRight: "10px", width: "100%", height: "615.26px" }}
              >
                <CardImg
                  top
                  width="100%"
                  height="auto"
                  src={product.image}
                  alt={product.productName}
                />
                <CardBody>
                  <CardTitle style={{ fontWeight: "bolder", whiteSpace: "nowrap" }}>{product.productName}</CardTitle>
                  <CardText style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{product.description}</CardText>
                  <CardText>
                    <small className="text-muted">{product.price} ₺</small>
                  </CardText>
                </CardBody>
                <Button className="align-bottom" color="success" onClick={() => this.props.addToCart(product)}>
                  Sepete Ekle
                </Button>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    );
  }
}
