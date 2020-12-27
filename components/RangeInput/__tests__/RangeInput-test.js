"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('RangeInput', function () {
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeInput, {
              value: "50",
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
  test('renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeInput, {
      value: "50"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('track themed', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: {
        rangeInput: {
          track: {
            color: 'brand'
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.RangeInput, {
      value: "10"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('track themed with color and opacity', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: {
        rangeInput: {
          track: {
            color: 'brand',
            opacity: 0.3
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.RangeInput, {
      value: "10"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('with min and max offset', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeInput, {
      min: 10,
      max: 20,
      step: 1,
      value: 15
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('onFocus', function () {
    var onFocus = jest.fn();

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeInput, {
      min: 0,
      max: 10,
      step: 1,
      value: 5,
      onFocus: onFocus
    }))),
        container = _render2.container,
        getByDisplayValue = _render2.getByDisplayValue;

    _react2.fireEvent.focus(getByDisplayValue('5'));

    expect(container.firstChild).toMatchSnapshot();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
  test('onBlur', function () {
    var onBlur = jest.fn();

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeInput, {
      min: 0,
      max: 10,
      step: 1,
      value: 5,
      onBlur: onBlur
    }))),
        container = _render3.container,
        getByDisplayValue = _render3.getByDisplayValue;

    _react2.fireEvent.blur(getByDisplayValue('5'));

    expect(container.firstChild).toMatchSnapshot();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
  test('onChange', function () {
    var onChange = jest.fn();

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeInput, {
      min: 0,
      max: 10,
      step: 1,
      value: 5,
      onChange: onChange
    }))),
        container = _render4.container,
        getByDisplayValue = _render4.getByDisplayValue;

    _react2.fireEvent.change(getByDisplayValue('5'), {
      target: {
        value: '10'
      }
    });

    expect(container.firstChild).toMatchSnapshot();
    expect(onChange).toBeCalledTimes(1);
  });
});