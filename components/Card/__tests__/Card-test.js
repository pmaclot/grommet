"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _Box = require("../../Box");

var _Card = require("../Card");

var _CardBody = require("../../CardBody");

var _CardFooter = require("../../CardFooter");

var _CardHeader = require("../../CardHeader");

var _Grommet = require("../../Grommet");

var _Text = require("../../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var customTheme = {
  global: {
    font: {
      family: "-apple-system,\n           BlinkMacSystemFont, \n           \"Segoe UI\""
    }
  },
  card: {
    container: {
      background: 'brand',
      elevation: 'large'
    },
    body: {
      pad: 'small',
      background: 'light-1'
    },
    header: {
      justify: 'start',
      pad: 'small'
    },
    footer: {
      pad: {
        horizontal: 'medium',
        vertical: 'small'
      },
      background: '#FFFFFF27'
    }
  }
};
describe('Card', function () {
  afterEach(_react2.cleanup);
  test('renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Card.Card, null)));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('header', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_CardHeader.CardHeader, null, "header"))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('footer', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_CardFooter.CardFooter, null, "footer"))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('children', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, null, /*#__PURE__*/_react["default"].createElement(_Text.Text, null, "test")))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('all', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_CardHeader.CardHeader, null, "header"), /*#__PURE__*/_react["default"].createElement(_CardBody.CardBody, null, "body"), /*#__PURE__*/_react["default"].createElement(_CardFooter.CardFooter, null, "footer"))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Themed', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_Card.Card, {
      width: "small"
    }, /*#__PURE__*/_react["default"].createElement(_CardHeader.CardHeader, null, "header"), /*#__PURE__*/_react["default"].createElement(_CardBody.CardBody, null, "body"), /*#__PURE__*/_react["default"].createElement(_CardFooter.CardFooter, null, "footer"))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});