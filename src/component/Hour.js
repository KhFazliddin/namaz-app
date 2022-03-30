import React from "react";

class Hour extends React.Component {
  state = {
    curTime: "",
  };

  componentDidMount() {
    this.getTime();
  }

  getTime = () => {
    var today = new Date(),
      curTime = today.getHours();

    this.setState({ curTime });
  };

  render() {
    return (
      <div className="Hour">
        <p style={{ fontSize: "100px", color: "white" }}>
          {this.state.curTime}
        </p>
      </div>
    );
  }
}

export default Hour;
