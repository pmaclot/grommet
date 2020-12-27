"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _Grommet = require("../../Grommet");

var _ = require("..");

var _FormField = require("../../FormField");

var _Button = require("../../Button");

var _TextInput = require("../../TextInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Form controlled', function () {
  afterEach(_react2.cleanup);
  test('controlled', function () {
    var onSubmit = jest.fn();

    var Test = function Test() {
      var _React$useState = _react["default"].useState({
        test: ''
      }),
          value = _React$useState[0],
          setValue = _React$useState[1];

      var onChange = _react["default"].useCallback(function (nextValue) {
        return setValue(nextValue);
      }, []);

      return /*#__PURE__*/_react["default"].createElement(_.Form, {
        value: value,
        onChange: onChange,
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
      }));
    };

    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render.getByPlaceholderText,
        getByText = _render.getByText,
        container = _render.container;

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
  test('controlled onValidate', function () {
    var onValidate = jest.fn();

    var Test = function Test() {
      var _React$useState2 = _react["default"].useState({
        test: ''
      }),
          value = _React$useState2[0],
          setValue = _React$useState2[1];

      var onChange = _react["default"].useCallback(function (nextValue) {
        return setValue(nextValue);
      }, []);

      return /*#__PURE__*/_react["default"].createElement(_.Form, {
        value: value,
        onChange: onChange,
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
      }));
    };

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByText = _render2.getByText,
        container = _render2.container;

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
  test('controlled onValidate custom error', function () {
    var onValidate = jest.fn();
    var errorMessage = 'One uppercase letter';
    var testRules = {
      regexp: new RegExp('(?=.*?[A-Z])'),
      message: errorMessage,
      status: 'error'
    };

    var Test = function Test() {
      var _React$useState3 = _react["default"].useState({
        test: ''
      }),
          value = _React$useState3[0],
          setValue = _React$useState3[1];

      var onChange = _react["default"].useCallback(function (nextValue) {
        return setValue(nextValue);
      }, []);

      return /*#__PURE__*/_react["default"].createElement(_.Form, {
        value: value,
        onChange: onChange,
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
      }));
    };

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByText = _render3.getByText,
        container = _render3.container;

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
  test('controlled onValidate custom info', function () {
    var onValidate = jest.fn();
    var infoMessage = 'One uppercase letter';
    var testRules = {
      regexp: new RegExp('(?=.*?[A-Z])'),
      message: infoMessage,
      status: 'info'
    };

    var Test = function Test() {
      var _React$useState4 = _react["default"].useState({
        test: ''
      }),
          value = _React$useState4[0],
          setValue = _React$useState4[1];

      var onChange = _react["default"].useCallback(function (nextValue) {
        return setValue(nextValue);
      }, []);

      return /*#__PURE__*/_react["default"].createElement(_.Form, {
        value: value,
        onChange: onChange,
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
      }));
    };

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByText = _render4.getByText,
        container = _render4.container;

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
  test('controlled lazy', function () {
    var onSubmit = jest.fn();

    var Test = function Test() {
      var _React$useState5 = _react["default"].useState({
        test: ''
      }),
          value = _React$useState5[0],
          setValue = _React$useState5[1];

      _react["default"].useEffect(function () {
        return setValue({
          test: 'test'
        });
      }, []);

      var onChange = _react["default"].useCallback(function (nextValue) {
        return setValue(nextValue);
      }, []);

      return /*#__PURE__*/_react["default"].createElement(_.Form, {
        value: value,
        onChange: onChange,
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
      }));
    };

    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render5.getByPlaceholderText,
        getByText = _render5.getByText,
        container = _render5.container;

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
  test('controlled input', function () {
    var onSubmit = jest.fn();

    var Test = function Test() {
      var _React$useState6 = _react["default"].useState(''),
          value = _React$useState6[0],
          setValue = _React$useState6[1];

      var onChange = _react["default"].useCallback(function (event) {
        return setValue(event.target.value);
      }, []);

      return /*#__PURE__*/_react["default"].createElement(_.Form, {
        onSubmit: onSubmit
      }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
        name: "test"
      }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
        name: "test",
        placeholder: "test input",
        value: value,
        onChange: onChange
      })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        type: "submit",
        primary: true,
        label: "Submit"
      }));
    };

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
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
  test('controlled input lazy', function () {
    var onSubmit = jest.fn();

    var Test = function Test() {
      var _React$useState7 = _react["default"].useState(''),
          value = _React$useState7[0],
          setValue = _React$useState7[1];

      _react["default"].useEffect(function () {
        return setValue('test');
      }, []);

      var onChange = _react["default"].useCallback(function (event) {
        return setValue(event.target.value);
      }, []);

      return /*#__PURE__*/_react["default"].createElement(_.Form, {
        onSubmit: onSubmit
      }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
        name: "test"
      }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
        name: "test",
        placeholder: "test input",
        value: value,
        onChange: onChange
      })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        type: "submit",
        primary: true,
        label: "Submit"
      }));
    };

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render7.getByPlaceholderText,
        getByText = _render7.getByText,
        container = _render7.container;

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
  test('lazy value', function () {
    var _onSubmit = jest.fn();

    var Test = function Test() {
      var _React$useState8 = _react["default"].useState(''),
          test = _React$useState8[0],
          setTest = _React$useState8[1];

      return /*#__PURE__*/_react["default"].createElement(_.Form, {
        onSubmit: function onSubmit(_ref) {
          var value = _ref.value,
              touched = _ref.touched;
          return _onSubmit({
            value: value,
            touched: touched
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
        name: "test",
        value: test
      }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        label: "set",
        onClick: function onClick() {
          return setTest('a');
        }
      }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        label: "submit",
        type: "submit"
      }));
    };

    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        container = _render8.container,
        getByText = _render8.getByText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('set'));

    _react2.fireEvent.click(getByText('submit'));

    expect(_onSubmit).toBeCalledWith(expect.objectContaining({
      value: {
        test: 'a'
      }
    }));
  }); // deprecated FormField+input pattern

  test('controlled FormField deprecated', function () {
    var onSubmit = jest.fn();

    var Test = function Test() {
      var _React$useState9 = _react["default"].useState({
        test: ''
      }),
          value = _React$useState9[0],
          setValue = _React$useState9[1];

      var onChange = _react["default"].useCallback(function (nextValue) {
        return setValue(nextValue);
      }, []);

      return /*#__PURE__*/_react["default"].createElement(_.Form, {
        value: value,
        onChange: onChange,
        onSubmit: onSubmit
      }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
        label: "test",
        name: "test",
        id: "test",
        htmlFor: "test"
      }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        type: "submit",
        primary: true,
        label: "Submit"
      }));
    };

    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByLabelText = _render9.getByLabelText,
        getByText = _render9.getByText,
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.change(getByLabelText('test'), {
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
  test('controlled reset', function () {
    var onSubmit = jest.fn();
    var onReset = jest.fn();

    var Test = function Test() {
      var _React$useState10 = _react["default"].useState({
        test: ''
      }),
          value = _React$useState10[0],
          setValue = _React$useState10[1];

      var onChange = _react["default"].useCallback(function (nextValue) {
        return setValue(nextValue);
      }, []);

      return /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Form, {
        onReset: onReset,
        onChange: onChange,
        value: value,
        onSubmit: onSubmit
      }, /*#__PURE__*/_react["default"].createElement(_FormField.FormField, {
        a11yTitle: "test",
        name: "test",
        required: true,
        placeholder: "test input"
      }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        type: "reset",
        primary: true,
        label: "Reset"
      })));
    };

    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(Test, null)),
        getByPlaceholderText = _render10.getByPlaceholderText,
        getByText = _render10.getByText,
        queryByText = _render10.queryByText;

    _react2.fireEvent.change(getByPlaceholderText('test input'), {
      target: {
        value: 'Input has changed'
      }
    });

    expect(getByPlaceholderText('test input').value).toBe('Input has changed');

    _react2.fireEvent.click(getByText('Reset'));

    expect(onReset).toBeCalledTimes(1);
    expect(queryByText('Input has changed')).toBeNull();
  });
  test('controlled onChange touched', function () {
    var onChange = jest.fn();
    var onSubmit = jest.fn();

    var Test = function Test() {
      var _React$useState11 = _react["default"].useState({
        test: ''
      }),
          value = _React$useState11[0];

      return /*#__PURE__*/_react["default"].createElement(_.Form, {
        value: value,
        onChange: onChange,
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
      }));
    };

    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render11.getByPlaceholderText,
        container = _render11.container;

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
    expect(container.firstChild).toMatchSnapshot();
  });
});