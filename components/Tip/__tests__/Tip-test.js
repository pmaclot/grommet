"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react2 = require("@testing-library/react");

var _dom = require("@testing-library/dom");

require("jest-styled-components");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _Box = require("../../Box");

var _Button = require("../../Button");

var _Grommet = require("../../Grommet");

var _Tip = require("../Tip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Tip', function () {
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Tip.Tip, {
              content: "tooltip content"
            }, " Example"))), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test("mouseOver and mouseOut events on the Tip's child", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _render2, getByText, tooltip;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Tip.Tip, {
              content: /*#__PURE__*/_react["default"].createElement(_Box.Box, {
                id: "tooltip-id",
                "data-testid": "tooltip"
              }, "tooltip")
            }, "Test Events"))), getByText = _render2.getByText;

            _react2.fireEvent.mouseOver(getByText('Test Events'));

            _context2.next = 4;
            return (0, _react2.waitForElement)(function () {
              return _dom.screen.getByText('tooltip');
            });

          case 4:
            tooltip = _context2.sent;
            expect(document.getElementById('tooltip-id')).not.toBeNull();
            expect(tooltip.parentNode.parentNode).toMatchSnapshot();

            _react2.fireEvent.mouseOut(getByText('Test Events'));

            expect(document.getElementById('tooltip-id')).toBeNull();

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test("focus and blur events on the Tip's child", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _render3, container, getByText;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Tip.Tip, {
              content: "tooltip"
            }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
              label: "Test Events"
            })))), container = _render3.container, getByText = _render3.getByText;

            _react2.fireEvent.focus(getByText('Test Events'));

            expect(container.firstChild).toMatchSnapshot();

            _react2.fireEvent.blur(getByText('Test Events'));

            expect(container.firstChild).toMatchSnapshot();

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('plain', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var _render4, getByText, tooltip;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Tip.Tip, {
              plain: true,
              content: "tooltip"
            }, "Example"))), getByText = _render4.getByText; // Styles of plain are captured in snapshots only when applying mouseOver

            _react2.fireEvent.mouseOver(getByText('Example'));

            _context4.next = 4;
            return (0, _react2.waitForElement)(function () {
              return _dom.screen.getByText('tooltip');
            });

          case 4:
            tooltip = _context4.sent;
            expect(tooltip.parentNode.parentNode).toMatchSnapshot();

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test("dropProps should pass props to Drop", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var _render5, getByText, tooltip;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Tip.Tip, {
              dropProps: {
                plain: false // should display box-shadow

              },
              content: "hello dropProps"
            }, "Test dropProps"))), getByText = _render5.getByText;

            _react2.fireEvent.mouseOver(getByText('Test dropProps'));

            _context5.next = 4;
            return (0, _react2.waitForElement)(function () {
              return _dom.screen.getByText('hello dropProps');
            });

          case 4:
            tooltip = _context5.sent;
            expect(tooltip.parentNode.parentNode).toMatchSnapshot();

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  test("should work with a child that isn't a React Element", function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Tip.Tip, {
      content: "Hello"
    }, "Not React Element")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("throw error with more than one child", function () {
    console.error = jest.fn();
    expect(function () {
      _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Tip.Tip, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, null, "1"), /*#__PURE__*/_react["default"].createElement(_Box.Box, null, "2"))));
    }).toThrow("React.Children.only expected to receive a single React element child.");
  });
  test("throw error with more than one non React Element", function () {
    console.error = jest.fn();
    expect(function () {
      _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Tip.Tip, null, "123 ", false)));
    }).toThrow("React.Children.only expected to receive a single React element child.");
  });
});