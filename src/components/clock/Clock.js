import React, { Component } from "react";
import "./Clock.css";

export default class Clock extends Component {
  state = {
    time: null,
  };
  timer = null;
  componentDidMount() {
    const leading = (n) => `${n}`.padStart(2, 0);
    this.timer = setInterval(() => {
      const date = new Date();
      const hours = leading(date.getHours());
      const minutes = leading(date.getMinutes());
      const seconds = leading(date.getSeconds());
      const time = `${hours}:${minutes}:${seconds}`;
      this.setState({ time });
    }, 1000);
  }
  render() {
    const { time } = this.state;

    return (
      <>
        <br />
        <h2>It's time to take a break</h2>
        <h1 id="clock">{time}</h1>
      </>
    );
  }
}
