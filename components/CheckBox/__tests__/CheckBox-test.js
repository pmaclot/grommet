"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('CheckBox', function () {
  afterEach(_react2.cleanup);
  test('should not have accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
              a11yTitle: "test"
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
  test('label should not have accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _render2, container, results;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
              label: "test"
            }))), container = _render2.container;
            _context2.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context2.sent;
            expect(container.firstChild).toMatchSnapshot();
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, null), /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      id: "test id",
      name: "test name"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('label renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      label: "test label"
    }), /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      label: /*#__PURE__*/_react["default"].createElement("div", null, "test label")
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('checked renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      checked: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('disabled renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      disabled: true
    }), /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      disabled: true,
      checked: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('reverse renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      reverse: true,
      label: "test label"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('toggle renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      toggle: true
    }), /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      toggle: true,
      checked: true
    }), /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      toggle: true,
      label: "test label"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('indeterminate renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      indeterminate: true
    }), /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      indeterminate: true,
      label: "test label"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('indeterminate checked warns', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      indeterminate: true,
      checked: true
    })));
    expect(warnSpy).toBeCalledWith('Checkbox cannot be "checked" and "indeterminate" at the same time.');
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
  test('indeterminate toggle warns', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      indeterminate: true,
      toggle: true
    })));
    expect(warnSpy).toBeCalledWith('Checkbox of type toggle does not have "indeterminate" state.');
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
  test('controlled', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBox, {
      label: "test-label",
      checked: true
    }))),
        container = _render3.container,
        getByText = _render3.getByText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('test-label'));

    expect(container.firstChild).toMatchSnapshot();
  });
});