import React from "react";

class Minute extends React.Component {
  state = {
    curTime: "",
  };

  componentDidMount() {
    this.getTime();
  }

  getTime = () => {
    var today = new Date(),
      curTime = today.getMinutes();

    this.setState({ curTime });
  };

  render() {
    return (
      <div className="Minute">
        <p style={{ fontSize: "100px", color: "white" }}>
          {this.state.curTime}
        </p>
      </div>
    );
  }
}

export default Minute;
