import React, { Component } from "react";
import PropTypes from "prop-types";
import calculatePosition from "./Utils";
import ReactMarkdown from "react-markdown";

const withDocs = source => Comp => {
  return class Test extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <React.Fragment>
          <Comp {...this.props} />
          <ReactMarkdown source={source} />
        </React.Fragment>
      );
    }
  };
};

export default withDocs;
/*
export default function withDocs(source) {
  return function is(Comp) {
    return class Test extends React.Component {
      render() {
        return (
          <div>
            <div> hi {source} </div>
            <Comp {...this.props} />
          </div>
        );
      }
    };
  };
}*/
