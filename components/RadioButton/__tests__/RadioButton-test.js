"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

var _Grommet = require("../../Grommet");

var _Box = require("../../Box");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('RadioButton', function () {
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
              name: "test",
              a11yTitle: "test"
            }))), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container).toMatchSnapshot();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('basic', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      name: "test",
      value: "1"
    }), /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      id: "test id",
      name: "test",
      value: "2"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('label', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      label: "test label",
      name: "test",
      value: "1"
    }), /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      label: /*#__PURE__*/_react["default"].createElement("div", null, "test label"),
      name: "test",
      value: "2"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('checked', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      checked: true,
      name: "test",
      value: "1"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('disabled', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      disabled: true,
      name: "test",
      value: "1"
    }), /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      disabled: true,
      checked: true,
      name: "test",
      value: "2"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('children', function () {
    var child = function child(_ref2) {
      var checked = _ref2.checked;
      return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
        pad: "small",
        background: checked ? 'accent-1' : 'control'
      });
    };

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      name: "test",
      value: "1"
    }, child), /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      checked: true,
      name: "test",
      value: "2"
    }, child)));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('label themed', function () {
    var customTheme = {
      radioButton: {
        font: {
          weight: 500
        }
      }
    };

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      label: "test",
      name: "test"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('background-color themed', function () {
    var customTheme = {
      radioButton: {
        check: {
          background: {
            color: 'red'
          }
        }
      }
    };

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_.RadioButton, {
      name: "test"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});