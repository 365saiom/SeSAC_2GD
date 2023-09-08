import { Component } from "react";

class Handler_ex extends Component {
  state = {
    text: "Hello World",
  };
  render() {
    return (
      <>
        {this.state.text}
        <br />
        <button onClick={() => this.setState({ text: "Goodbye World" })}>
          버튼
        </button>
      </>
    );
  }
}

export default Handler_ex;







