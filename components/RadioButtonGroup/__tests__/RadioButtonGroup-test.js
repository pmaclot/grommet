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

describe('RadioButtonGroup', function () {
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
              name: "test",
              options: []
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
  test('string options', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
      name: "test",
      options: ['one', 'two'],
      value: "one"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('number options', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
      name: "test",
      options: [1, 2],
      value: 1
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('boolean options', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
      name: "test",
      options: [true, false],
      value: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('object options just value', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
      name: "test",
      options: [{
        value: 'one'
      }, {
        value: 'two'
      }],
      value: "two"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('object options', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
      name: "test",
      options: [{
        id: 'onE',
        label: 'One',
        value: 'one'
      }, {
        id: 'twO',
        label: 'Two',
        value: 'two'
      }]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('object options disabled', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
      name: "test",
      options: [{
        value: 'one',
        disabled: true
      }, {
        value: 'two'
      }]
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

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
      name: "test",
      options: ['one', 'two'],
      value: "one"
    }, child)));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('adding additional props', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
      name: "test",
      options: [{
        id: 'ONE',
        value: '1',
        'data-testid': 'testid-1'
      }, {
        id: 'TWO',
        value: '2',
        'data-testid': 'testid-2'
      }]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('onChange fires with event when passed from props', function () {
    var radioGroupOptions = [{
      id: 'ONE',
      value: '1',
      'data-testid': 'testid-1'
    }, {
      id: 'TWO',
      value: '2',
      'data-testid': 'testid-2'
    }];
    var onChange = jest.fn(function (event) {
      expect(event).toBeDefined();
      expect(event).toHaveProperty(['target', 'value']);
      var target = event.target;
      var option = radioGroupOptions.find(function (optn) {
        return target.value === optn.value;
      });
      expect(option).not.toBeNull();
      expect(target.value).toEqual(option.value);
    });

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
      name: "test",
      options: radioGroupOptions,
      onChange: onChange
    }))),
        getByTestId = _render2.getByTestId; // Select first radio button


    _react2.fireEvent.click(getByTestId('testid-1'));

    expect(onChange).toBeCalledTimes(1); // Select first radio button again - should not trigger onChange

    _react2.fireEvent.click(getByTestId('testid-1'));

    expect(onChange).toBeCalledTimes(1); // Select second radio button

    _react2.fireEvent.click(getByTestId('testid-2'));

    expect(onChange).toBeCalledTimes(2);
  });
  test('Works with keyboard', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var onChange, _render3, getByTestId, middleRadioBtn;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            onChange = jest.fn();
            _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.RadioButtonGroup, {
              name: "test",
              value: "2",
              options: [{
                id: 'ONE',
                value: '1',
                'data-testid': 'testid-1'
              }, {
                id: 'TWO',
                value: '2',
                'data-testid': 'testid-2'
              }, {
                id: 'THREE',
                value: '3',
                'data-testid': 'testid-3'
              }],
              onChange: onChange
            }))), getByTestId = _render3.getByTestId; // Focus radio '2' button and simulate ArrowDown key
            // should result in selecting radio '3'

            middleRadioBtn = getByTestId('testid-2');
            middleRadioBtn.focus(); // focusing the radio button results in internal state update
            // so we wait (`act`) after focusing

            _context2.next = 6;
            return (0, _react2.wait)(function () {
              return getByTestId('testid-2');
            });

          case 6:
            _react2.fireEvent.keyDown(middleRadioBtn, {
              key: 'ArrowDown',
              keyCode: 40,
              which: 40,
              bubbles: true,
              cancelable: true
            });

            _context2.next = 9;
            return (0, _react2.wait)(function () {
              return expect(onChange).toBeCalledTimes(1);
            });

          case 9:
            expect(onChange).toHaveBeenLastCalledWith(expect.objectContaining({
              target: {
                value: '3'
              }
            })); // Focus radio '2' button and simulate ArrowUp key
            // should result in selecting radio '1'

            middleRadioBtn.focus();
            _context2.next = 13;
            return (0, _react2.wait)(function () {
              return getByTestId('testid-2');
            });

          case 13:
            _react2.fireEvent.keyDown(middleRadioBtn, {
              key: 'ArrowUp',
              keyCode: 38,
              which: 38,
              bubbles: true,
              cancelable: true
            });

            _context2.next = 16;
            return (0, _react2.wait)(function () {
              return expect(onChange).toBeCalledTimes(2);
            });

          case 16:
            expect(onChange).toHaveBeenLastCalledWith(expect.objectContaining({
              target: {
                value: '1'
              }
            }));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});