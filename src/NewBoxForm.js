import React, { Component } from "react";
import "./NewBoxForm.css";
import uuid from "uuid/v4";

export class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      width: "",
      height: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    this.props.createBox(newBox);
    this.setState({
      color: "",
      width: "",
      height: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewBoxForm">
        <div>
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            id="color"
            value={this.state.color}
            onChange={this.handleChange}
            placeholder="(ex. yellow)"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            name="width"
            id="width"
            value={this.state.width}
            onChange={this.handleChange}
            placeholder="(ex. 100 px)"
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
            placeholder="(ex. 200 px)"
          />
        </div>
        <button onClick={this.handleSubmit}>Add a New Box</button>
      </form>
    );
  }
}

export default NewBoxForm;
