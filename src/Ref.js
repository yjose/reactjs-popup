import React from 'react';
import {findDOMNode} from 'react-dom';

export default class Ref extends React.PureComponent {
  componentDidMount() {
    const {innerRef} = this.props;
    if (innerRef) innerRef(findDOMNode(this));
  }

  render() {
    const {children} = this.props;
    return React.Children.only(children);
  }
}
