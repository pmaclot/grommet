import React from 'react';
import { Grommet, Box, Chart, Heading } from 'grommet';
import { grommet } from 'grommet/themes';
var values = [{
  value: [10, 20]
}, {
  value: [20, 30]
}, {
  value: [30, 15]
}];
export var Round = function Round() {
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet
  }, /*#__PURE__*/React.createElement(Box, {
    direction: "row-responsive",
    wrap: true,
    pad: "large"
  }, ['bar', 'line', 'area', 'point'].map(function (type) {
    return /*#__PURE__*/React.createElement(Box, {
      key: type,
      margin: "medium"
    }, /*#__PURE__*/React.createElement(Heading, {
      size: "small",
      textAlign: "center"
    }, type), /*#__PURE__*/React.createElement(Chart, {
      type: type,
      values: values,
      round: true
    }));
  })));
};