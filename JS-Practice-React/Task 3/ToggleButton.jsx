import React from "react";
import "./ToggleButton.css"

class ToggleButton extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isShown: false,
    };
  }
  handleClick = () =>{
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  }
  render(){
    return (
      <div className="button-container">
        <button className="button-container__button" onClick={this.handleClick}>
          {this.state.isShown ? "Hide" : "Show"}
        </button>
      </div>
    )
  }
}

export default ToggleButton;