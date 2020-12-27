"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _portal = require("../../../utils/portal");

var _ = require("../..");

var _2 = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Select Controlled', function () {
  window.scrollTo = jest.fn();
  beforeEach(_portal.createPortal);
  afterEach(_react2.cleanup);
  test('should not have accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_2.Select, {
              options: ['one', 'two', 'three'],
              a11yTitle: "test",
              multiple: true
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
  test('multiple', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      multiple: true,
      options: ['one', 'two'],
      selected: [],
      value: []
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('multiple values', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      multiple: true,
      options: ['one', 'two'],
      selected: [0, 1],
      value: ['one', 'two']
    })),
        getByPlaceholderText = _render2.getByPlaceholderText,
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    expect(container.firstChild).toMatchSnapshot();
    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
  });
  test('select another option', function () {
    var onChange = jest.fn();

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      multiple: true,
      options: ['one', 'two'],
      onChange: onChange,
      value: ['two'],
      selected: [1]
    })),
        getByPlaceholderText = _render3.getByPlaceholderText,
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    _react2.fireEvent.click(document.getElementById('test-select__drop').querySelector('button'));

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: ['two', 'one']
    }));
  });
  test('deselect an option', function () {
    var onChange = jest.fn();

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      multiple: true,
      options: ['one', 'two'],
      onChange: onChange,
      value: ['one'],
      selected: [0]
    })),
        getByPlaceholderText = _render4.getByPlaceholderText,
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    _react2.fireEvent.click(document.getElementById('test-select__drop').querySelector('button'));

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: []
    }));
  });
  test('multiple onChange without valueKey', function () {
    var onChange = jest.fn();

    var Test = function Test() {
      var _React$useState = _react["default"].useState(),
          value = _React$useState[0];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        labelKey: "name",
        value: value,
        multiple: true,
        closeOnChange: false,
        options: [{
          id: 1,
          name: 'Value1'
        }, {
          id: 2,
          name: 'Value2'
        }],
        onChange: onChange
      });
    };

    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render5.getByPlaceholderText,
        getByText = _render5.getByText,
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();

    _react2.fireEvent.click(getByText('Value1'));

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: [{
        id: 1,
        name: 'Value1'
      }]
    }));
    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();

    _react2.fireEvent.click(getByText('Value2'));

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: [{
        id: 1,
        name: 'Value1'
      }, {
        id: 2,
        name: 'Value2'
      }]
    }));
  });
  test('multiple onChange with valueKey string', function () {
    var onChange = jest.fn();

    var Test = function Test() {
      var _React$useState2 = _react["default"].useState(),
          value = _React$useState2[0];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        labelKey: "name",
        valueKey: "id",
        value: value,
        multiple: true,
        options: [{
          id: 1,
          name: 'Value1'
        }, {
          id: 2,
          name: 'Value2'
        }],
        onChange: onChange
      });
    };

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render6.getByPlaceholderText,
        getByText = _render6.getByText,
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();

    _react2.fireEvent.click(getByText('Value1'));

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: [{
        id: 1,
        name: 'Value1'
      }]
    }));
  });
  test('multiple onChange with valueKey reduce', function () {
    var onChange = jest.fn();

    var Test = function Test() {
      var _React$useState3 = _react["default"].useState(),
          value = _React$useState3[0];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        labelKey: "name",
        valueKey: {
          key: 'id',
          reduce: true
        },
        value: value,
        multiple: true,
        options: [{
          id: 1,
          name: 'Value1'
        }, {
          id: 2,
          name: 'Value2'
        }],
        onChange: onChange
      });
    };

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render7.getByPlaceholderText,
        getByText = _render7.getByText,
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();

    _react2.fireEvent.click(getByText('Value1'));

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: [1]
    }));
  });
  test('multiple onChange toggle with valueKey reduce', function () {
    var onChange = jest.fn();

    var Test = function Test() {
      var _React$useState4 = _react["default"].useState([1]),
          value = _React$useState4[0];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        labelKey: "name",
        valueKey: {
          key: 'id',
          reduce: true
        },
        value: value,
        multiple: true,
        options: [{
          id: 1,
          name: 'Value1'
        }, {
          id: 2,
          name: 'Value2'
        }],
        onChange: onChange
      });
    };

    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render8.getByPlaceholderText,
        getByText = _render8.getByText,
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();

    _react2.fireEvent.click(getByText('Value1'));

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: []
    }));
  });
  test('multiple with empty results', function () {
    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: ['one', 'two'],
      multiple: true,
      value: []
    }))),
        getByPlaceholderText = _render9.getByPlaceholderText,
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
  });
  test('should allow multiple selections when using search', function () {
    jest.useFakeTimers();

    var _onChange = jest.fn();

    var _onSearch = jest.fn();

    var defaultOptions = [{
      id: 1,
      name: 'Value1'
    }, {
      id: 2,
      name: 'Value2'
    }, {
      id: 15,
      name: 'Value15'
    }, {
      id: 21,
      name: 'Value21'
    }, {
      id: 22,
      name: 'Value22'
    }];

    var Test = function Test() {
      var _React$useState5 = _react["default"].useState(),
          value = _React$useState5[0],
          setValue = _React$useState5[1];

      var _React$useState6 = _react["default"].useState(defaultOptions),
          options = _React$useState6[0],
          setOptions = _React$useState6[1];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select-mult-search",
        placeholder: "Select multiple options",
        multiple: true,
        valueKey: "id",
        labelKey: "name",
        value: value,
        options: options,
        onChange: function onChange(_ref2) {
          var nextValue = _ref2.value;

          _onChange(nextValue);

          setValue(nextValue);
        },
        onClose: function onClose() {
          return setOptions(defaultOptions);
        },
        onSearch: function onSearch(text) {
          _onSearch(text);

          var nextOptions = defaultOptions.filter(function (option) {
            return option.name.toLowerCase().indexOf(text.toLowerCase()) >= 0;
          });
          setOptions(nextOptions);
        }
      });
    };

    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render10.getByPlaceholderText,
        getByText = _render10.getByText;

    var selectInput = getByPlaceholderText('Select multiple options');

    _react2.fireEvent.click(selectInput); // advance timers so select can open & have focus


    (0, _react2.act)(function () {
      jest.advanceTimersByTime(200);
    }); // focus is on search input, searching...

    _react2.fireEvent.change(document.activeElement, {
      target: {
        value: '1'
      }
    });

    expect(_onSearch).toHaveBeenNthCalledWith(1, '1'); // make first selection

    _react2.fireEvent.click(getByText('Value15'));

    _react2.fireEvent.click(selectInput);

    (0, _react2.act)(function () {
      jest.advanceTimersByTime(200);
    }); // searching again

    _react2.fireEvent.change(document.activeElement, {
      target: {
        value: '2'
      }
    });

    expect(_onSearch).toHaveBeenNthCalledWith(2, '2'); // make second selection

    _react2.fireEvent.click(getByText('Value21'));

    expect(_onChange).toHaveBeenNthCalledWith(2, [{
      id: 15,
      name: 'Value15'
    }, {
      id: 21,
      name: 'Value21'
    }]);

    _react2.fireEvent.click(selectInput);

    (0, _react2.act)(function () {
      jest.advanceTimersByTime(200);
    }); // remove previous selection

    _react2.fireEvent.click(getByText('Value15'));

    expect(_onChange).toHaveBeenNthCalledWith(3, [{
      id: 21,
      name: 'Value21'
    }]);
  });
  test("should allow multiple selections when options are \n  loaded lazily", function () {
    jest.useFakeTimers();

    var _onChange2 = jest.fn();

    var optionsFromServer = [{
      id: 1,
      name: 'Value1'
    }, {
      id: 2,
      name: 'Value2'
    }, {
      id: 15,
      name: 'Value15'
    }, {
      id: 21,
      name: 'Value21'
    }, {
      id: 22,
      name: 'Value22'
    }];

    var Test = function Test() {
      var _React$useState7 = _react["default"].useState(),
          value = _React$useState7[0],
          setValue = _React$useState7[1];

      var _React$useState8 = _react["default"].useState([]),
          options = _React$useState8[0],
          setOptions = _React$useState8[1]; // get options from mock server


      _react["default"].useEffect(function () {
        setTimeout(function () {
          setOptions(optionsFromServer);
        }, 1000);
      }, []);

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select-mult-lazy",
        placeholder: "Select multiple lazyload options",
        multiple: true,
        valueKey: "id",
        labelKey: "name",
        value: value,
        options: options,
        onChange: function onChange(_ref3) {
          var nextValue = _ref3.value;

          _onChange2(nextValue);

          setValue(nextValue);
        }
      });
    };

    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render11.getByPlaceholderText,
        getByText = _render11.getByText;

    var selectInput = getByPlaceholderText('Select multiple lazyload options');

    _react2.fireEvent.click(selectInput); // advance timers so that options have been returned


    (0, _react2.act)(function () {
      jest.advanceTimersByTime(1100);
    });

    _react2.fireEvent.click(getByText('Value15'));

    expect(_onChange2).toHaveBeenNthCalledWith(1, [{
      id: 15,
      name: 'Value15'
    }]);

    _react2.fireEvent.click(selectInput);

    _react2.fireEvent.click(getByText('Value22'));

    expect(_onChange2).toHaveBeenNthCalledWith(2, [{
      id: 15,
      name: 'Value15'
    }, {
      id: 22,
      name: 'Value22'
    }]);
  });
  window.scrollTo.mockRestore();
});