"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('RangeSelector', function () {
  afterEach(_react2.cleanup);
  test('should not have accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
              values: [20, 30]
            }))), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(container.firstChild).toMatchSnapshot();
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('basic', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      values: [20, 30]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      color: "accent-1",
      values: [20, 30]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('direction', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      direction: "horizontal",
      values: [20, 30]
    }), /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      direction: "vertical",
      values: [20, 30]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('invert', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      invert: true,
      values: [20, 30]
    }), /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      invert: false,
      values: [20, 30]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('max', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      max: 50,
      values: [20, 30]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('min', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      min: 10,
      values: [20, 30]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('opacity', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, ['weak', 'medium', 'strong'].map(function (opacity) {
      return /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
        key: opacity,
        opacity: opacity,
        values: [20, 30]
      });
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('round', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, ['xsmall', 'small', 'medium', 'large', 'full'].map(function (round) {
      return /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
        key: round,
        round: round,
        values: [20, 30]
      });
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('size', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full'].map(function (size) {
      return /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
        key: size,
        size: size,
        values: [20, 30]
      });
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('step renders correct values', function () {
    var values;

    var setValues = function setValues(newValues) {
      values = newValues;
    };

    var onChange = jest.fn(function (nextValues) {
      return setValues(nextValues);
    });

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      values: [0, 100],
      step: 3,
      onChange: onChange
    }))),
        container = _render2.container,
        getByLabelText = _render2.getByLabelText;

    expect(container.firstChild).toMatchSnapshot();
    var lowerControl = getByLabelText('Lower Bounds');

    _react2.fireEvent.mouseDown(lowerControl); // fireEvent.mouseDown(lowerControl);


    _react2.fireEvent.mouseMove(document, {
      clientX: 31,
      clientY: 20
    });

    _react2.fireEvent.mouseUp(document);

    expect(onChange).toBeCalled();
    expect(values).toStrictEqual([33, 100]);
    var upperControl = getByLabelText('Upper Bounds');

    _react2.fireEvent.mouseDown(upperControl);

    _react2.fireEvent.mouseMove(document, {
      clientX: 80,
      clientY: 15
    });

    _react2.fireEvent.mouseUp(document);

    expect(onChange).toBeCalled();
    expect(values).toStrictEqual([0, 81]);
  });
  test('handle keyboard', function () {
    var onChange = jest.fn();

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      values: [20, 30],
      onChange: onChange
    }))),
        container = _render3.container,
        getByLabelText = _render3.getByLabelText;

    expect(container.firstChild).toMatchSnapshot();
    var lowerControl = getByLabelText('Lower Bounds');

    _react2.fireEvent.keyDown(lowerControl, {
      key: 'Left',
      keyCode: 37
    });

    expect(onChange).toBeCalled();

    _react2.fireEvent.keyDown(lowerControl, {
      key: 'Right',
      keyCode: 39
    });

    expect(onChange).toBeCalled();
    var upperControl = getByLabelText('Upper Bounds');

    _react2.fireEvent.keyDown(upperControl, {
      key: 'Right',
      keyCode: 39
    });

    expect(onChange).toBeCalled();

    _react2.fireEvent.keyDown(upperControl, {
      key: 'Left',
      keyCode: 37
    });

    expect(onChange).toBeCalled();
  });
  test('handle mouse', function () {
    var onChange = jest.fn();

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RangeSelector, {
      values: [20, 30],
      onChange: onChange
    }))),
        container = _render4.container,
        getByLabelText = _render4.getByLabelText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(container.firstChild.firstChild, {
      clientX: 0,
      clientY: 0
    });

    expect(onChange).toBeCalled();
    var lowerControl = getByLabelText('Lower Bounds');

    _react2.fireEvent.mouseDown(lowerControl);

    _react2.fireEvent.mouseMove(document, {
      clientX: 0,
      clientY: 0
    });

    _react2.fireEvent.mouseUp(document);

    expect(onChange).toBeCalled();
    var upperControl = getByLabelText('Upper Bounds');

    _react2.fireEvent.mouseDown(upperControl);

    _react2.fireEvent.mouseMove(document, {
      clientX: 0,
      clientY: 0
    });

    _react2.fireEvent.mouseUp(document);

    expect(onChange).toBeCalled();
  });
});