"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _ = require("..");

var _Grommet = require("../../Grommet");

var _Text = require("../../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('Collapsible', function () {
  var App;
  beforeEach(function () {
    App = function App(_ref) {
      var props = _extends({}, _ref);

      return /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Collapsible, props, /*#__PURE__*/_react["default"].createElement(_Text.Text, null, "Example")));
    };
  });
  afterEach(_react2.cleanup);
  test('no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('open', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      open: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('onClick open default', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      open: true
    })),
        container = _render3.container,
        rerender = _render3.rerender;

    expect(container.firstChild).toMatchSnapshot();
    rerender( /*#__PURE__*/_react["default"].createElement(App, {
      open: false
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
});