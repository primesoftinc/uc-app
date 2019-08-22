import React, { Component } from "react";
import TextInputExample from "../components/DurationComponent";

const symptoms = [
  "fever",
  "cold",
  "headache",
  "cough",
  "ajfh",
  "iashgdi",
  "iuaghf",
  "iuhgdh"
];
export default class Loop extends Component {
  render() {
    return symptoms.map(i => {
      return <TextInputExample Symptoms={i} />;
    });
  }
}
