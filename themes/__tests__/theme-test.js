"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _grommetThemeHpe = require("grommet-theme-hpe");

var _grommetIcons = require("grommet-icons");

var _components = require("../../components");

var _ThemeContext = require("../../contexts/ThemeContext");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// hpe theme has deprecated the accent and neutral colors
var hpeColors = ['brand', 'background-contrast', 'background-front', 'control', 'graph-0', 'graph-1', 'graph-2', 'graph-3', 'graph-4', 'focus', 'status-critical', 'status-disabled', 'status-ok', 'status-unknown', 'status-warning', 'text'];
var colors = ['accent-1', 'accent-2', 'accent-3', 'brand', 'dark-1', 'dark-2', 'dark-3', 'dark-4', 'dark-5', 'dark-6', 'focus', 'light-1', 'light-2', 'light-3', 'light-4', 'light-5', 'light-6', 'neutral-1', 'neutral-2', 'neutral-3', 'status-critical', 'status-disabled', 'status-ok', 'status-unknown', 'status-warning'];
var customTheme = {
  global: {
    input: {
      // test backwards compatibility that string value works for input pad
      padding: '12px',
      font: {
        height: '50px',
        size: 'large',
        weight: 'bold'
      },
      extend: "\n        &::-webkit-input-placeholder {\n          font-weight: normal;\n        }\n\n        &::-moz-placeholder {\n          font-weight: normal;\n        }\n\n        &:-ms-input-placeholder {\n          font-weight: normal;\n        }\n      "
    },
    colors: {
      custom: '#cc6633',
      placeholder: 'custom'
    }
  }
};
describe('Grommet', function () {
  test('default theme', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_components.Grommet, null, colors.map(function (color) {
      return /*#__PURE__*/_react["default"].createElement(_components.Box, {
        key: color,
        background: color
      }, /*#__PURE__*/_react["default"].createElement(_components.Text, null, color));
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('grommet theme', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_components.Grommet, {
      theme: _.grommet
    }, /*#__PURE__*/_react["default"].createElement(_components.Button, {
      label: "test"
    }), /*#__PURE__*/_react["default"].createElement(_components.Button, {
      plain: true,
      label: "test"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('ThemeContext theme', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_components.Grommet, {
      theme: _.grommet
    }, /*#__PURE__*/_react["default"].createElement(_ThemeContext.ThemeContext.Extend, {
      value: {
        global: {
          colors: {
            test: '#000'
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_components.Anchor, {
      color: "test",
      label: "Hello"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('dark theme', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_components.Grommet, {
      theme: _.dark
    }, colors.map(function (color) {
      return /*#__PURE__*/_react["default"].createElement(_components.Box, {
        key: color,
        background: color
      }, /*#__PURE__*/_react["default"].createElement(_components.Text, null, color));
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('hpe theme', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_components.Grommet, {
      theme: _grommetThemeHpe.hpe
    }, hpeColors.map(function (color) {
      return /*#__PURE__*/_react["default"].createElement(_components.Box, {
        key: color,
        background: color
      }, /*#__PURE__*/_react["default"].createElement(_components.Text, null, color));
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('custom theme', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_components.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_components.Box, null, /*#__PURE__*/_react["default"].createElement(_components.Anchor, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
      label: "Add"
    }), /*#__PURE__*/_react["default"].createElement(_components.Anchor, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
      label: "Add",
      color: "custom"
    })), /*#__PURE__*/_react["default"].createElement(_components.Box, {
      background: "dark-1"
    }, /*#__PURE__*/_react["default"].createElement(_components.Anchor, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
      label: "Add"
    }), /*#__PURE__*/_react["default"].createElement(_components.Anchor, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
      label: "Add",
      color: "custom"
    })), /*#__PURE__*/_react["default"].createElement(_components.Box, null, /*#__PURE__*/_react["default"].createElement(_components.TextInput, {
      value: "Value",
      placeholder: "Placeholder"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});