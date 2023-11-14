import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

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
          <ListGroupItem style={{ cursor: "pointer" }} color="success" className="button-muted" onClick={() => this.props.chanceCategory(null)} >
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
              onClick={() => this.props.chanceCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}