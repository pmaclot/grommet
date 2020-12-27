"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('CheckBoxGroup', function () {
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
              options: ['First', 'Second']
            }))), container = _render.container;
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
  test('options renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      options: ['First', 'Second']
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('value renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      value: ['First'],
      options: ['First', 'Second']
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('initial value renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      value: ['Wuhan', 'Jerusalem'],
      options: [{
        label: 'Maui',
        value: 'Maui'
      }, {
        label: 'Jerusalem',
        value: 'Jerusalem'
      }, {
        label: 'Wuhan',
        value: 'Wuhan'
      }]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('disabled renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      disabled: true,
      options: ['First', 'Second']
    }), /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      options: [{
        label: 'First',
        disabled: true
      }]
    }), /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      options: [{
        label: 'First',
        disabled: true
      }]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('onChange', function () {
    var onChange = jest.fn();

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      options: [{
        label: 'first-label',
        value: 'First'
      }, {
        label: 'second-label',
        value: 'Second'
      }],
      onChange: onChange
    }))),
        container = _render2.container,
        getByText = _render2.getByText;

    _react2.fireEvent.click(getByText('first-label'));

    expect(onChange).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('onClick for check and uncheck a CheckBox', function () {
    var onClick = jest.fn();

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      options: [{
        label: 'first-label',
        value: 'First'
      }, {
        label: 'second-label',
        value: 'Second'
      }],
      onClick: onClick
    }))),
        container = _render3.container,
        getByText = _render3.getByText;

    _react2.fireEvent.click(getByText('first-label'));

    expect(onClick).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('first-label'));

    expect(onClick).toBeCalledTimes(2);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('labelKey', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      labelKey: "labelKeyTest",
      options: [{
        labelKeyTest: 'first-label',
        value: 'First'
      }, {
        labelKeyTest: 'second-label',
        value: 'Second'
      }]
    }))),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('valueKey', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      valueKey: "valueKeyTest",
      options: [{
        label: 'first-label',
        valueKeyTest: 'First'
      }, {
        label: 'second-label',
        valueKeyTest: 'Second'
      }]
    }))),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('custom theme', function () {
    var customTheme = {
      checkBoxGroup: {
        container: {
          gap: 'large',
          margin: {
            vertical: 'small'
          }
        }
      }
    };

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      valueKey: "valueKeyTest",
      options: [{
        label: 'first-label',
        valueKeyTest: 'First'
      }, {
        label: 'second-label',
        valueKeyTest: 'Second'
      }]
    }))),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('no duplicated key error', function () {
    console.error = jest.fn();
    var errorSpy = jest.spyOn(console, 'error');
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      value: ['yes', 'yes-again'],
      options: [{
        label: 'Yes!',
        value: 'yes'
      }, {
        label: 'Yes!',
        value: 'yes-again'
      }]
    })));
    expect(errorSpy).not.toBeCalledWith(expect.stringMatching('same key'), expect.stringMatching('Yes!'), expect.anything());
    errorSpy.mockReset();
    errorSpy.mockRestore();
    console.error.mockReset();
  });
  test('checked warning', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.CheckBoxGroup, {
      options: [{
        label: 'first-label',
        value: 'First',
        checked: true
      }, {
        label: 'second-label',
        value: 'Second'
      }]
    })));
    expect(warnSpy).toBeCalled();
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
});