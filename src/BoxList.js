import React, { Component } from "react";
import "./BoxList.css";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

export class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.create = this.create.bind(this);
  }

  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    });
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id != id)
    });
  }

  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        id={box.id}
        color={box.color}
        width={box.width}
        height={box.height}
        removeBox={() => this.remove(box.id)}
      />
    ));
    return (
      <div>
        <NewBoxForm createBox={this.create} />
        <div className="boxes">{boxes}</div>
      </div>
    );
  }
}

export default BoxList;
