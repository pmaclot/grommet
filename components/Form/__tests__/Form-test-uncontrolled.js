"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

var _Grommet = require("../../Grommet");

var _ = require("..");

var _FormField = require("../../FormField");

var _Button = require("../../Button");

var _Text = require("../../Text");

var _TextInput = require("../../TextInput");

var _Select = require("../../Select");

var _CheckBox = require("../../CheckBox");

var _RadioButtonGroup = require("../../RadioButtonGroup");

var _Box = require("../../Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Form accessibility', function () {
  afterEach(_react2.cleanup);
  test("TextInput in Form should have \n  no accessibility violations", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
              a11yTitle: "test"
            })))), container = _render.container;
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
  test('Select in Form should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _render2, container, results;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, null, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
              options: ['small', 'medium', 'large'],
              a11yTitle: "test"
            }))))), container = _render2.container;
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
  test('CheckBox in Form should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _render3, container, results;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, null, /*#__PURE__*/_react["default"].createElement(_CheckBox.CheckBox, {
              label: "test"
            }))))), container = _render3.container;
            _context3.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context3.sent;
            expect(container.firstChild).toMatchSnapshot();
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test("FormField with an explicit TextInput child\n  should have no accessibility violations", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var _render4, container, results;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, null, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
              a11yTitle: "test"
            }))))), container = _render4.container;
            _context4.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context4.sent;
            expect(container.firstChild).toMatchSnapshot();
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test("Box with TextInput in Form should \n  have no accessibility violations", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var _render5, container, results;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, null, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
              a11yTitle: "test"
            })))))), container = _render5.container;
            _context5.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context5.sent;
            expect(container.firstChild).toMatchSnapshot();
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
});
describe('Form uncontrolled', function () {
  afterEach(_react2.cleanup);
  test('empty', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null)));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('with field', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('errors', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      errors: {
        test: 'missing'
      }
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('infos', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      infos: {
        test: 'missing'
      }
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('uncontrolled', function () {
    var onSubmit = jest.fn();

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onSubmit: onSubmit
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test"
    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      name: "test",
      placeholder: "test input"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByPlaceholderText = _render6.getByPlaceholderText,
        getByText = _render6.getByText,
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'v'
      }
    });

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Submit'));

    expect(onSubmit).toBeCalledWith(expect.objectContaining({
      value: {
        test: 'v'
      },
      touched: {
        test: true
      }
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('uncontrolled onValidate', function () {
    var onValidate = jest.fn();

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onValidate: onValidate
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      required: true
    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      name: "test",
      placeholder: "test input"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByText = _render7.getByText,
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Submit'));

    expect(onValidate).toBeCalledWith(expect.objectContaining({
      errors: {
        test: 'required'
      },
      infos: {}
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('uncontrolled onValidate custom error', function () {
    var onValidate = jest.fn();
    var errorMessage = 'One uppercase letter';
    var testRules = {
      regexp: new RegExp('(?=.*?[A-Z])'),
      message: errorMessage,
      status: 'error'
    };

    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onValidate: onValidate
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      validate: testRules
    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      name: "test",
      placeholder: "test input"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByText = _render8.getByText,
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Submit'));

    expect(onValidate).toBeCalledWith(expect.objectContaining({
      errors: {
        test: errorMessage
      },
      infos: {}
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('uncontrolled onValidate custom info', function () {
    var onValidate = jest.fn();
    var infoMessage = 'One uppercase letter';
    var testRules = {
      regexp: new RegExp('(?=.*?[A-Z])'),
      message: infoMessage,
      status: 'info'
    };

    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onValidate: onValidate
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      validate: testRules
    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      name: "test",
      placeholder: "test input"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByText = _render9.getByText,
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Submit'));

    expect(onValidate).toBeCalledWith(expect.objectContaining({
      errors: {},
      infos: {
        test: infoMessage
      }
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('update', function () {
    var validate = jest.fn().mockReturnValueOnce('too short').mockReturnValueOnce(undefined);
    var validate2 = jest.fn().mockReturnValue(undefined);
    var onSubmit = jest.fn();

    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onSubmit: onSubmit
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      required: true,
      validate: validate,
      placeholder: "test input"
    }), /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test2",
      placeholder: "test-2 input",
      validate: [validate2]
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByPlaceholderText = _render10.getByPlaceholderText,
        getByText = _render10.getByText,
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'v'
      }
    });

    _react2.fireEvent.click(getByText('Submit'));

    expect(validate).toBeCalledWith('v', {
      test: 'v'
    });
    expect(validate2).toBeCalledWith(undefined, {
      test: 'v'
    });

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'value'
      }
    });

    _react2.fireEvent.change(getByPlaceholderText('test-2 input'), {
      target: {
        value: 'value-2'
      }
    });

    _react2.fireEvent.click(getByText('Submit'));

    expect(validate).toBeCalledWith('value', {
      test: 'value',
      test2: 'value-2'
    });
    expect(validate2).toBeCalledWith('value-2', {
      test: 'value',
      test2: 'value-2'
    });
    expect(onSubmit).toBeCalledWith(expect.objectContaining({
      value: {
        test: 'value',
        test2: 'value-2'
      },
      touched: {
        test: true,
        test2: true
      }
    }));
  });
  test('regexp validation', function () {
    var onSubmit = jest.fn();

    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onSubmit: onSubmit
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      required: true,
      validate: {
        regexp: /^[a-z]/i
      },
      placeholder: "test input"
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByPlaceholderText = _render11.getByPlaceholderText,
        getByText = _render11.getByText,
        queryByText = _render11.queryByText;

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: '1'
      }
    });

    _react2.fireEvent.click(getByText('Submit'));

    expect(getByText('invalid')).toMatchSnapshot();

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'a'
      }
    });

    _react2.fireEvent.click(getByText('Submit'));

    expect(queryByText('invalid')).toBeNull();
  });
  test('validate', function () {
    var onSubmit = jest.fn();

    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onSubmit: onSubmit
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      required: true,
      validate: [function (value) {
        return value.length === 1 ? 'simple string' : undefined;
      }, function (value) {
        return value.length === 2 ? /*#__PURE__*/_react["default"].createElement(_Text.Text, null, " ReactNode ") : undefined;
      }, function (value) {
        return value.length === 3 ? {
          message: 'status error',
          status: 'error'
        } : undefined;
      }, function (value) {
        return value.length === 4 ? {
          message: 'status info',
          status: 'info'
        } : undefined;
      }],
      placeholder: "test input"
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByPlaceholderText = _render12.getByPlaceholderText,
        getByText = _render12.getByText;

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'a'
      }
    });

    _react2.fireEvent.click(getByText('Submit'));

    expect(getByText('simple string')).toMatchSnapshot();

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'ab'
      }
    });

    _react2.fireEvent.click(getByText('Submit'));

    expect(getByText('ReactNode')).toMatchSnapshot();

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'abc'
      }
    });

    _react2.fireEvent.click(getByText('Submit'));

    expect(getByText('status error')).toMatchSnapshot();

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'abcd'
      }
    });

    _react2.fireEvent.click(getByText('Submit'));

    expect(getByText('status info')).toMatchSnapshot();
  });
  test('required validation', function () {
    var onSubmit = jest.fn();

    var _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onSubmit: onSubmit
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      required: true,
      placeholder: "test input"
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByPlaceholderText = _render13.getByPlaceholderText,
        getByText = _render13.getByText,
        queryByText = _render13.queryByText;

    _react2.fireEvent.click(getByText('Submit'));

    expect(queryByText('required')).toMatchSnapshot();

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: '1'
      }
    });

    expect(queryByText('required')).toBeNull();
  });
  test('reset clears form', function () {
    var onReset = jest.fn();

    var _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onReset: onReset
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      required: true,
      placeholder: "test input"
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "reset",
      primary: true,
      label: "Reset"
    })))),
        getByPlaceholderText = _render14.getByPlaceholderText,
        getByText = _render14.getByText,
        queryByText = _render14.queryByText;

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'Input has changed'
      }
    });

    _react2.fireEvent.click(getByText('Reset'));

    expect(queryByText('Input has changed')).toBeNull();
  });
  test('initial values', function () {
    var _onSubmit = jest.fn();

    var _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onSubmit: function onSubmit(_ref6) {
        var value = _ref6.value,
            touched = _ref6.touched;
        return _onSubmit({
          value: value,
          touched: touched
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      required: true,
      placeholder: "test input",
      value: "Initial value"
    }), /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test2",
      value: "Initial value2"
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByText = _render15.getByText,
        queryByText = _render15.queryByText;

    _react2.fireEvent.click(getByText('Submit'));

    expect(queryByText('required')).toBeNull();
    expect(_onSubmit).toBeCalledWith(expect.objectContaining({
      value: {
        test: 'Initial value',
        test2: 'Initial value2'
      },
      touched: {}
    }));
  });
  test('validate on blur', function () {
    var onFocus = jest.fn();

    var _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      validate: "blur"
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      onFocus: onFocus,
      label: "Name",
      name: "name",
      placeholder: "name",
      required: true,
      validate: [{
        regexp: /^[a-z]/i
      }, function (name) {
        if (name && name.length === 1) return 'must be >1 character';
        return undefined;
      }, function (name) {
        if (name === 'good') return {
          message: 'good',
          status: 'info'
        };
        return undefined;
      }]
    }), /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      onFocus: onFocus,
      label: "Email",
      name: "email",
      required: true
    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      a11yTitle: "test",
      name: "email",
      type: "email",
      placeholder: "email"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      onFocus: onFocus,
      label: "submit",
      type: "submit"
    })))),
        getByText = _render16.getByText,
        getByPlaceholderText = _render16.getByPlaceholderText,
        queryAllByText = _render16.queryAllByText,
        queryByText = _render16.queryByText; // both fields have required error message


    getByText('submit').focus();

    _react2.fireEvent.click(getByText('submit'));

    expect(queryAllByText('required')).toHaveLength(2); // one fields has required error message

    getByPlaceholderText('name').focus();

    _react2.fireEvent.change(getByPlaceholderText('name'), {
      target: {
        value: 'Input has changed'
      }
    });

    getByText('submit').focus();

    _react2.fireEvent.click(getByText('submit'));

    expect(queryAllByText('required')).toHaveLength(1); // name field has new error and email field still has required error message

    getByPlaceholderText('name').focus();

    _react2.fireEvent.change(getByPlaceholderText('name'), {
      target: {
        value: 'a'
      }
    });

    getByText('submit').focus();

    _react2.fireEvent.click(getByText('submit'));

    expect(queryByText('required')).toBeTruthy();
    expect(queryByText('must be >1 character')).toBeTruthy(); //  new value in name does not remove the error message in email

    getByPlaceholderText('name').focus();

    _react2.fireEvent.change(getByPlaceholderText('name'), {
      target: {
        value: 'abc'
      }
    });

    expect(onFocus).toBeCalledTimes(6);
    expect(queryByText('required')).toBeTruthy();
    expect(queryByText('must be >1 character')).toBe(null);
  });
  test('uncontrolled without name', function () {
    var onSubmit = jest.fn();

    var _render17 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Form, {
      onSubmit: onSubmit
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, null, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      a11yTitle: "test",
      placeholder: "test input"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    }))),
        getByPlaceholderText = _render17.getByPlaceholderText,
        getByText = _render17.getByText;

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'v'
      }
    });

    expect(getByPlaceholderText('test input').value).toBe('v');

    _react2.fireEvent.click(getByText('Submit'));

    expect(onSubmit).toBeCalledTimes(1);
  });
  test('uncontrolled reset without value', function () {
    var onChange = jest.fn();

    var _render18 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onChange: onChange
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      required: true,
      placeholder: "test input",
      a11yTitle: "test"
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "reset",
      primary: true,
      label: "Reset"
    })))),
        getByPlaceholderText = _render18.getByPlaceholderText,
        getByText = _render18.getByText,
        queryByText = _render18.queryByText;

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'Input has changed'
      }
    });

    expect(getByPlaceholderText('test input').value).toBe('Input has changed');
    expect(onChange).toBeCalledTimes(1);

    _react2.fireEvent.click(getByText('Reset'));

    expect(queryByText('Input has changed')).toBeNull();
  });
  test('disabled FormField', function () {
    var onSubmit = jest.fn();

    var _render19 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onSubmit: onSubmit
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      disabled: true
    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      a11yTitle: "test",
      placeholder: "test input"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByPlaceholderText = _render19.getByPlaceholderText,
        getByText = _render19.getByText;

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'v'
      }
    });

    expect(getByPlaceholderText('test input').value).toBe('v');

    _react2.fireEvent.click(getByText('Submit'));

    expect(onSubmit).not.toBeCalledWith(expect.objectContaining({
      value: {
        test: 'v'
      },
      touched: {
        test: true
      }
    }));
  });
  test('regexp validation with status', function () {
    var onSubmit = jest.fn();

    var _render20 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onSubmit: onSubmit
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      required: true,
      error: "invalid",
      validate: {
        regexp: /^[a-z]/i,
        status: 'info'
      },
      placeholder: "test input",
      a11yTitle: "test"
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByPlaceholderText = _render20.getByPlaceholderText,
        getByText = _render20.getByText,
        getAllByText = _render20.getAllByText;

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: '1'
      }
    });

    expect(getByPlaceholderText('test input').value).toBe('1');

    _react2.fireEvent.click(getByText('Submit'));

    expect(onSubmit).toBeCalledTimes(1);
    expect(getAllByText('invalid')).toMatchSnapshot();
  });
  test('custom component', function () {
    var CustomTextInput = function CustomTextInput(_ref7) {
      var name = _ref7.name,
          value = _ref7.value,
          onChange = _ref7.onChange;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Username",
        name: name,
        id: "test",
        value: value,
        onChange: onChange
      }));
    };

    var onChange = jest.fn();

    var _render21 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onChange: onChange
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      required: true
    }, /*#__PURE__*/_react["default"].createElement(CustomTextInput, {
      name: "test",
      onChange: onChange
    }))))),
        getByPlaceholderText = _render21.getByPlaceholderText;

    _react2.fireEvent.change(getByPlaceholderText('Username'), {
      target: {
        value: 'v'
      }
    });

    expect(getByPlaceholderText('Username').value).toBe('v');
    expect(onChange).toBeCalledTimes(1);
  });
  /* The three following tests align with FormField's supported 'validate' types
   * FormField's 'validate' prop accepts the following types:
   * 1) object in the shape of: {
   *  regexp?: object,
   *  message?: string | React.ReactNode,
   *  status?: 'error' | 'info'
   * }
   * 2) function: (...args: any[]) => any )
   * 3) array of 1) and/or 2) above
   */

  test('should validate when supplied an object', function () {
    var regexValidation = {
      regexp: new RegExp('(?=.*?[#?!@$ %^&*-])'),
      message: 'At least one special character or space',
      status: 'error'
    };
    var expectedMessage = 'At least one special character or space';

    var _render22 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      label: "Create a Password",
      name: "password" // required
      ,
      validate: regexValidation // placeholder="Enter Password"

    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      name: "password",
      placeholder: "Enter Password"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      label: "Submit"
    })))),
        getByPlaceholderText = _render22.getByPlaceholderText,
        getByText = _render22.getByText,
        queryByText = _render22.queryByText;

    var input = getByPlaceholderText('Enter Password');
    var submitButton = getByText('Submit'); // Absence of a special character in input should display
    // 'special character' error message

    _react2.fireEvent.change(input, {
      target: {
        value: 'abcde'
      }
    });

    _react2.fireEvent.click(submitButton);

    expect(getByText(expectedMessage).innerHTML).toBeTruthy(); // Including a special character should validate. 'Special character'
    // error message should not be displayed.

    _react2.fireEvent.change(input, {
      target: {
        value: 'abcde%'
      }
    });

    _react2.fireEvent.click(submitButton);

    expect(queryByText(expectedMessage)).toBeNull();
  });
  test('should validate when supplied a function', function () {
    var functionValidation = function functionValidation(combination) {
      return combination === '12345' ? {
        message: "That's amazing. I've got the same combination on my luggage!",
        status: 'info'
      } : undefined;
    };

    var infoMessage = "That's amazing. I've got the same combination on my luggage!";

    var _render23 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      label: "Druidia Shield Combination",
      name: "combination",
      validate: functionValidation
    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      name: "combination",
      placeholder: "Enter Combination"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      label: "Submit"
    })))),
        getByPlaceholderText = _render23.getByPlaceholderText,
        getByText = _render23.getByText,
        queryByText = _render23.queryByText;

    var input = getByPlaceholderText('Enter Combination');
    var submitButton = getByText('Submit'); // If combination input matches value in function, should display
    // info message

    _react2.fireEvent.change(input, {
      target: {
        value: '12345'
      }
    });

    _react2.fireEvent.click(submitButton);

    expect(getByText(infoMessage)).toBeTruthy(); // Combination info message should not be shown if value does not match.

    _react2.fireEvent.change(input, {
      target: {
        value: 'abcde%'
      }
    });

    _react2.fireEvent.click(submitButton);

    expect(queryByText(infoMessage)).toBeNull();
  });
  test("should validate with array of objects and/or functions", function () {
    var validationArray = [{
      regexp: new RegExp('(?=.*?[0-9])'),
      message: 'At least one number',
      status: 'error'
    }, {
      regexp: new RegExp('.{5,}'),
      message: 'At least five characters',
      status: 'error'
    }, function (combination) {
      return combination === '12345' ? {
        message: "That's amazing. I've got the same combination on my luggage!",
        status: 'info'
      } : undefined;
    }, {
      regexp: new RegExp('(?=.*?[#?!@$ %^&*-])'),
      message: 'At least one special character or space',
      status: 'error'
    }];
    var validationMessages = ['At least one number', 'At least five characters', "That's amazing. I've got the same combination on my luggage!", 'At least one special character or space'];

    var _render24 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      label: "Druidia Shield Combination",
      name: "combination",
      validate: validationArray
    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      name: "combination",
      placeholder: "Enter Combination"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      label: "Submit"
    })))),
        getByPlaceholderText = _render24.getByPlaceholderText,
        getByText = _render24.getByText,
        queryByText = _render24.queryByText;

    var input = getByPlaceholderText('Enter Combination');
    var submitButton = getByText('Submit'); // Needs to include a number. Show message.

    _react2.fireEvent.change(input, {
      target: {
        value: 'a'
      }
    });

    _react2.fireEvent.click(submitButton);

    expect(getByText('At least one number')).toBeTruthy(); // Needs five characters. Show message.

    _react2.fireEvent.change(input, {
      target: {
        value: '1'
      }
    });

    _react2.fireEvent.click(submitButton);

    expect(getByText('At least five characters')).toBeTruthy(); // Still needs five characters. Show message.

    _react2.fireEvent.change(input, {
      target: {
        value: '12'
      }
    });

    _react2.fireEvent.click(submitButton);

    expect(getByText('At least five characters')).toBeTruthy(); // Input satifies condition in funciton. Show message.

    _react2.fireEvent.change(input, {
      target: {
        value: '12345'
      }
    });

    _react2.fireEvent.click(submitButton);

    expect(getByText("That's amazing. I've got the same combination on my luggage!")).toBeTruthy(); // No special character included. Show message.

    _react2.fireEvent.change(input, {
      target: {
        value: '123456'
      }
    });

    _react2.fireEvent.click(submitButton);

    expect(getByText('At least one special character or space')).toBeTruthy(); // All validation criteria met, so none of the messages should appear.

    _react2.fireEvent.change(input, {
      target: {
        value: '123456%'
      }
    });

    _react2.fireEvent.click(submitButton);

    validationMessages.forEach(function (message) {
      return expect(queryByText(message)).toBeNull();
    });
  });
  test('form with select', function () {
    var onChange = jest.fn();
    window.scrollTo = jest.fn();

    var _render25 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, null, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, null, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
      a11yTitle: "select form",
      name: "select",
      placeholder: "test input",
      options: ['small', 'medium', 'large'],
      onChange: onChange
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      primary: true,
      label: "Submit"
    })))),
        getByPlaceholderText = _render25.getByPlaceholderText;

    _react2.fireEvent.click(getByPlaceholderText('test input'));

    _react2.fireEvent.click(document.activeElement.querySelector('button'));

    expect(getByPlaceholderText('test input').value).toEqual('small');
    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: 'small'
    }));
    window.scrollTo.mockRestore();
  });
  test('uncontrolled onChange with touched', function () {
    var onChange = jest.fn();

    var _render26 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onChange: onChange
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      name: "test",
      required: true,
      placeholder: "test input",
      a11yTitle: "test"
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "reset",
      primary: true,
      label: "Reset"
    })))),
        getByPlaceholderText = _render26.getByPlaceholderText;

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'Input has changed'
      }
    });

    expect(onChange).toBeCalledWith({
      test: 'Input has changed'
    }, {
      touched: {
        test: true
      }
    });
  });
  test('reset clears select, checkbox, radiobuttongroup', function () {
    var onReset = jest.fn();

    var _render27 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
      onReset: onReset
    }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      label: "Select Size",
      htmlFor: "test-select",
      name: "test-select"
    }, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
      options: ['small', 'medium', 'large'],
      name: "test-select",
      id: "test-select",
      placeholder: "test select"
    })), /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      label: "CheckBox",
      htmlFor: "test-checkbox",
      name: "test-checkbox"
    }, /*#__PURE__*/_react["default"].createElement(_CheckBox.CheckBox, {
      label: "test-checkbox",
      name: "test-checkbox",
      id: "test-checkbox"
    })), /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
      label: "RadioButtonGroup",
      htmlFor: "test-radiobuttongroup",
      name: "test-radiobuttongroup"
    }, /*#__PURE__*/_react["default"].createElement(_RadioButtonGroup.RadioButtonGroup, {
      options: ['one', 'two', 'three'],
      name: "test-radiobuttongroup",
      id: "test-radiobuttongroup"
    })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "reset",
      primary: true,
      label: "Reset"
    })))),
        container = _render27.container,
        getByPlaceholderText = _render27.getByPlaceholderText,
        getByText = _render27.getByText;

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    _react2.fireEvent.click(getByText('small'));

    _react2.fireEvent.click(getByText('test-checkbox'));

    _react2.fireEvent.click(getByText('two'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Reset'));

    expect(container.firstChild).toMatchSnapshot();
  });
});