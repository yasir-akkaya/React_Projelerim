import React, { Component } from "react";
import Tags from "./Tags";
import { Card, ListGroup, ListGroupItem } from "reactstrap";

export default class Categories extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };


  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem style={{ cursor: "pointer", fontWeight:"bold" }} color="success" className="button-muted" onClick={() => this.props.changeCategory(null)} >
            Tüm Ürünler
          </ListGroupItem>
          {this.state.categories.map((category) => (
            <ListGroupItem
              style={{ cursor: "pointer" }}
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>

        <Card  className="mt-3 text-center">
          <h5>Etiketler:</h5>
          <Tags/>
        </Card>

      </div>
    );
  }
}