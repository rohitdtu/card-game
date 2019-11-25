import React from "react";
import "./singleCard.module.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  // calls the handleClick method of left and right deck.
  clicked(data){
    this.props.click(data);
  }

  // renders a single card
  render() {
    return (
      <div
        className={
          "Card col-lg-4" +
          (!this.props.data.close ? " opened" : "") +
          (this.props.data.complete ? " matched" : "")
        }
        onClick={() => this.clicked(this.props.data)}>
        <div className="front">?</div>
        <div className="back">{this.props.data.number}</div>
      </div>
    );
  }
}

export default Card;
