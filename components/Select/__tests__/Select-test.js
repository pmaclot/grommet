"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _grommetIcons = require("grommet-icons");

var _portal = require("../../../utils/portal");

var _ = require("../..");

var _2 = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Select', function () {
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
  test('basic', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      options: ['one', 'two'],
      a11yTitle: "Select"
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('prop: onOpen', function () {
    jest.useFakeTimers();
    var onOpen = jest.fn();

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      placeholder: "test select",
      id: "test-select",
      options: ['one', 'two'],
      onOpen: onOpen
    })),
        getByPlaceholderText = _render2.getByPlaceholderText,
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('test-select__drop')).toBeNull();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    expect(container.firstChild).toMatchSnapshot();
    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot(); // advance timers so the select opens

    jest.advanceTimersByTime(100); // verify that select is open

    expect(document.activeElement).toMatchSnapshot();
    expect(onOpen).toHaveBeenCalledTimes(1);
  });
  test('prop: onClose', function () {
    jest.useFakeTimers();
    var onClose = jest.fn();

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      placeholder: "test select",
      id: "test-select",
      options: ['one', 'two'],
      onClose: onClose
    })),
        getByPlaceholderText = _render3.getByPlaceholderText,
        container = _render3.container;

    _react2.fireEvent.click(getByPlaceholderText('test select')); // closes


    _react2.fireEvent.click(getByPlaceholderText('test select'));

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('test-select__drop')).toBeNull(); // advance timers so the select closes

    jest.advanceTimersByTime(100); // verify that select was closed

    expect(document.activeElement).toMatchSnapshot();
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  test('0 value', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: [0, 1],
      value: 0
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('search', function () {
    jest.useFakeTimers();
    var onSearch = jest.fn();

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: ['one', 'two'],
      onSearch: onSearch,
      value: "two"
    })),
        getByPlaceholderText = _render4.getByPlaceholderText,
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select')); // advance timers so select can open


    (0, _react2.act)(function () {
      jest.advanceTimersByTime(200);
    }); // snapshot on search box

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
    expect(document.activeElement).toMatchSnapshot(); // add content to search box

    _react2.fireEvent.change(document.activeElement, {
      target: {
        value: 'o'
      }
    });

    expect(document.activeElement).toMatchSnapshot();
    expect(onSearch).toBeCalledWith('o');
  });
  test('search and select', function () {
    jest.useFakeTimers();

    var _onSearch = jest.fn();

    var onChange = jest.fn();

    var Test = function Test() {
      var _React$useState = _react["default"].useState(['one', 'two']),
          options = _React$useState[0],
          setOptions = _React$useState[1];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        options: options,
        onChange: onChange,
        onSearch: function onSearch(arg) {
          _onSearch(arg);

          setOptions(['two']);
        }
      });
    };

    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(Test, null)),
        getByPlaceholderText = _render5.getByPlaceholderText,
        getByText = _render5.getByText,
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select')); // advance timers so select can open


    (0, _react2.act)(function () {
      return jest.advanceTimersByTime(200);
    }); // snapshot on search box

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
    expect(document.activeElement).toMatchSnapshot(); // add content to search box

    _react2.fireEvent.change(document.activeElement, {
      target: {
        value: 't'
      }
    });

    expect(document.activeElement).toMatchSnapshot();
    expect(_onSearch).toBeCalledWith('t');

    _react2.fireEvent.click(getByText('two'));

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: 'two'
    }));
  });
  test('select an option with complex options', function () {
    var onChange = jest.fn();

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      plain: true,
      value: /*#__PURE__*/_react["default"].createElement("span", null, "one"),
      options: [{
        test: 'one'
      }, {
        test: 'two'
      }],
      onChange: onChange
    }, function (option) {
      return /*#__PURE__*/_react["default"].createElement("span", null, option.test);
    })),
        getByText = _render6.getByText,
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('one')); // pressing enter here nothing will happen


    _react2.fireEvent.click(document.getElementById('test-select__drop').querySelector('button'));

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: {
        test: 'one'
      }
    }));
    expect(window.scrollTo).toBeCalled();
  });
  test('size', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      size: "large",
      options: ['one', 'two'],
      selected: [],
      value: [],
      onChange: function onChange() {}
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  ['small', 'medium', 'large'].forEach(function (dropHeight) {
    test(dropHeight + " drop container height", function () {
      var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        size: "large",
        options: ['one', 'two'],
        selected: [],
        value: [],
        onChange: function onChange() {},
        dropHeight: dropHeight,
        placeholder: "test select"
      })),
          getByPlaceholderText = _render7.getByPlaceholderText;

      _react2.fireEvent.click(getByPlaceholderText('test select'));

      expect(document.activeElement).toMatchSnapshot();
    });
  });
  test('onChange without valueKey', function () {
    var onChange = jest.fn();

    var Test = function Test() {
      var _React$useState2 = _react["default"].useState(),
          value = _React$useState2[0];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        labelKey: "name",
        value: value,
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
      value: {
        id: 1,
        name: 'Value1'
      }
    }));
  });
  test('onChange with valueKey string', function () {
    var onChange = jest.fn();

    var Test = function Test() {
      var _React$useState3 = _react["default"].useState(),
          value = _React$useState3[0];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        labelKey: "name",
        valueKey: "id",
        value: value,
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

    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render9.getByPlaceholderText,
        getByText = _render9.getByText,
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();

    _react2.fireEvent.click(getByText('Value1'));

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: {
        id: 1,
        name: 'Value1'
      }
    }));
  });
  test('disabled key', function () {
    jest.useFakeTimers();

    var Test = function Test() {
      var _React$useState4 = _react["default"].useState(),
          value = _React$useState4[0];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        labelKey: "name",
        valueKey: "id",
        value: value,
        disabledKey: "disabled",
        options: [{
          id: 1,
          name: 'Value1',
          disabled: true
        }, {
          id: 2,
          name: 'Value2',
          disabled: false
        }]
      });
    };

    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render10.getByPlaceholderText,
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    jest.advanceTimersByTime(200);
    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
  });
  test('complex options and children', function () {
    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: [{
        test: 'one'
      }, {
        test: 'two'
      }]
    }, function (option) {
      return /*#__PURE__*/_react["default"].createElement("span", null, option.test);
    })),
        getByPlaceholderText = _render11.getByPlaceholderText,
        container = _render11.container; // before opening


    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('test-select__drop')).toBeNull();

    _react2.fireEvent.click(getByPlaceholderText('test select')); // after opening


    expect(container.firstChild).toMatchSnapshot();
    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
  });
  test('select an option', function () {
    var onChange = jest.fn();

    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: ['one', 'two'],
      onChange: onChange
    })),
        getByPlaceholderText = _render12.getByPlaceholderText,
        container = _render12.container;

    var select = getByPlaceholderText('test select');
    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select')); // pressing enter here nothing will happen


    _react2.fireEvent.click(document.getElementById('test-select__drop').querySelector('button')); // checks if select has a value assigned to it after option is selected


    expect(select.value).toEqual('one');
    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: 'one'
    }));
    expect(window.scrollTo).toBeCalled();
  });
  test('select an option with enter', function () {
    var onChange = jest.fn();

    var _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: ['one', 'two'],
      onChange: onChange
    })),
        getByPlaceholderText = _render13.getByPlaceholderText,
        container = _render13.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByPlaceholderText('test select')); // verify that keyboard navigation is working


    _react2.fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Down',
      keyCode: 40,
      which: 40
    });

    _react2.fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Up',
      keyCode: 38,
      which: 38
    });

    _react2.fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Enter',
      keyCode: 13,
      which: 13
    });

    expect(onChange).toBeCalledWith(expect.objectContaining({
      value: 'one'
    }));
    expect(window.scrollTo).toBeCalled();
  });
  test('disabled', function () {
    var _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      disabled: true,
      options: ['one', 'two']
    })),
        getByPlaceholderText = _render14.getByPlaceholderText,
        container = _render14.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('test-select__drop')).toBeNull();

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    expect(container.firstChild).toMatchSnapshot(); // dropdown should still be null because select is disabled

    expect(document.getElementById('test-select__drop')).toBeNull();
  });
  test('empty results search', function () {
    var _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: [],
      onSearch: function onSearch() {},
      emptySearchMessage: "no results"
    })),
        getByPlaceholderText = _render15.getByPlaceholderText;

    _react2.fireEvent.click(getByPlaceholderText('test select')); // advance timers so that the select drop can open


    (0, _react2.act)(function () {
      jest.advanceTimersByTime(200);
    });

    _react2.fireEvent.change(document.activeElement, {
      target: {
        value: 'o'
      }
    });

    expect(document.activeElement).toMatchSnapshot();
  });
  test('open default state', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      open: true,
      id: "test-select",
      placeholder: "test select",
      options: ['one', 'two']
    }));
    expect(document.getElementById('test-select__drop')).not.toBeNull();
  });
  test('renders without icon', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      options: ['one', 'two'],
      icon: false
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('renders custom icon', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      options: ['one', 'two'],
      icon: _grommetIcons.CaretDown
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('renders default icon', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      options: ['one', 'two'],
      icon: true
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('modifies select control style on open', function () {
    var customTheme = {
      select: {
        control: {
          extend: {
            background: 'purple'
          },
          open: {
            background: 'lightgrey'
          }
        },
        container: {}
      }
    };

    var _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      "data-testid": "test-select-style-open",
      id: "test-open-id",
      options: ['morning', 'afternoon', 'evening'],
      placeholder: "Select..."
    }))),
        container = _render16.container;

    expect(container.firstChild).toMatchSnapshot();
    var selectButton = container.querySelector('Button');
    var style;
    style = window.getComputedStyle(selectButton);
    expect(style.background).toBe('purple');

    _react2.fireEvent.click(selectButton);

    style = window.getComputedStyle(selectButton);
    expect(style.background).toBe('lightgrey');

    _react2.fireEvent.click(selectButton);

    style = window.getComputedStyle(selectButton);
    expect(style.background).toBe('purple');
  });
  test("renders styled select options backwards compatible with legacy\n      documentation (select.options.box)", function () {
    var customTheme = {
      select: {
        options: {
          box: {
            background: 'lightblue'
          }
        }
      }
    };

    var _render17 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      "data-testid": "test-select-style-options-1",
      id: "test-options-style-id",
      options: ['morning', 'afternoon', 'evening'],
      placeholder: "Select..."
    }))),
        getByPlaceholderText = _render17.getByPlaceholderText,
        getByText = _render17.getByText,
        container = _render17.container;

    expect(container.firstChild).toMatchSnapshot();
    var selectButton = getByPlaceholderText('Select...');

    _react2.fireEvent.click(selectButton);

    var optionButton = getByText('morning').closest('button');
    var style = window.getComputedStyle(optionButton.firstChild);
    expect(style.background).toBe('lightblue');
  });
  test('renders styled select options using select.options.container', function () {
    var customTheme = {
      select: {
        options: {
          container: {
            background: 'lightgreen'
          }
        }
      }
    };

    var _render18 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      "data-testid": "test-select-style-options-2",
      id: "test-options-style-id",
      options: ['morning', 'afternoon', 'evening'],
      placeholder: "Select..."
    }))),
        getByPlaceholderText = _render18.getByPlaceholderText,
        getByText = _render18.getByText,
        container = _render18.container;

    expect(container.firstChild).toMatchSnapshot();
    var selectButton = getByPlaceholderText('Select...');

    _react2.fireEvent.click(selectButton);

    var optionButton = getByText('morning').closest('button');
    var style = window.getComputedStyle(optionButton.firstChild);
    expect(style.background).toBe('lightgreen');
  });
  test("renders styled select options combining select.options.box &&\n    select.options.container;\n    select.options.container prioritized if conflict", function () {
    var customTheme = {
      select: {
        options: {
          container: {
            background: 'lightgreen'
          },
          box: {
            background: 'lightblue',
            border: {
              side: 'bottom',
              size: 'small',
              color: 'blue'
            }
          }
        }
      }
    };

    var _render19 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      "data-testid": "test-select-style-options-3",
      id: "test-options-style-id",
      options: ['morning', 'afternoon', 'evening'],
      placeholder: "Select..."
    }))),
        getByPlaceholderText = _render19.getByPlaceholderText,
        getByText = _render19.getByText,
        container = _render19.container;

    expect(container.firstChild).toMatchSnapshot();
    var selectButton = getByPlaceholderText('Select...');

    _react2.fireEvent.click(selectButton);

    var style;
    var optionButton = getByText('morning').closest('button');
    style = window.getComputedStyle(optionButton.firstChild);
    expect(style.background).not.toBe('lightblue');
    style = window.getComputedStyle(optionButton.firstChild);
    expect(style.background).toBe('lightgreen');
    expect(style.borderBottom).toBe('2px solid blue');
  });
  test('applies custom global.hover theme to options', function () {
    var customTheme = {
      global: {
        hover: {
          background: {
            color: 'lightgreen'
          },
          color: {
            dark: 'lightgrey',
            light: 'brand'
          }
        }
      }
    };

    var _render20 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      "data-testid": "applies-custom-hover-style",
      id: "applies-custom-hover-style-id",
      options: ['morning', 'afternoon', 'evening'],
      placeholder: "Select..."
    }))),
        getByPlaceholderText = _render20.getByPlaceholderText,
        getByText = _render20.getByText,
        container = _render20.container;

    expect(container.firstChild).toMatchSnapshot();
    var selectButton = getByPlaceholderText('Select...');

    _react2.fireEvent.click(selectButton);

    var optionButton = getByText('afternoon').closest('button');

    _react2.fireEvent.mouseOver(optionButton);

    expect(optionButton).toMatchSnapshot();
  });
  test('renders custom up and down icons', function () {
    var customTheme = {
      select: {
        icons: {
          down: _grommetIcons.FormDown,
          up: _grommetIcons.CaretUp
        }
      }
    };

    var _render21 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      options: ['morning', 'afternoon', 'evening'],
      placeholder: "Select..."
    }))),
        getByPlaceholderText = _render21.getByPlaceholderText,
        container = _render21.container;

    expect(container.firstChild).toMatchSnapshot();
    var selectButton = getByPlaceholderText('Select...');

    _react2.fireEvent.click(selectButton); // Check that custom up icon is applied when open


    expect(container.firstChild).toMatchSnapshot();
  });
  test('select an option then select a different option', function () {
    var onChange = jest.fn();

    var _render22 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: ['one', 'two'],
      onChange: onChange
    })),
        getByPlaceholderText = _render22.getByPlaceholderText;

    var select = getByPlaceholderText('test select');

    _react2.fireEvent.click(getByPlaceholderText('test select')); // select first option


    _react2.fireEvent.click(document.getElementById('test-select__drop').querySelector('button')); // checks if select has a value assigned to it after option is selected


    expect(select.value).toEqual('one');

    _react2.fireEvent.click(getByPlaceholderText('test select')); // select second option


    _react2.fireEvent.click(document.getElementById('test-select__drop').querySelectorAll('button')[1]); // checks if select has a value assigned to it after option is selected


    expect(select.value).toEqual('two');
    expect(onChange).toHaveBeenCalledTimes(2);
  });
  test('keyboard navigation with disabled option', function () {
    var _render23 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: ['one', 'two', 'three', 'four'],
      disabled: [1],
      open: true
    })),
        getByPlaceholderText = _render23.getByPlaceholderText;

    var select = getByPlaceholderText('test select'); // should skip over disabled option

    _react2.fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Down',
      keyCode: 40,
      which: 40
    });

    _react2.fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Down',
      keyCode: 40,
      which: 40
    });

    _react2.fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Up',
      keyCode: 38,
      which: 38
    }); // should skip oer disabled option


    _react2.fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Up',
      keyCode: 38,
      which: 38
    });

    _react2.fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Enter',
      keyCode: 13,
      which: 13
    });

    expect(select.value).toEqual('one');
  });
  test('undefined option', function () {
    var _render24 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: [undefined, 1, 2]
    }))),
        getByPlaceholderText = _render24.getByPlaceholderText;

    var select = getByPlaceholderText('test select');

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    _react2.fireEvent.click(document.getElementById('test-select__drop').querySelector('button')); // if undefined value is selected select will have empty string value


    expect(select.value).toEqual('');
  });
  test('valueLabel', function () {
    var _render25 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: [undefined, 1, 2],
      valueLabel: "test"
    }))),
        container = _render25.container;

    expect(container.firsChild).toMatchSnapshot();
  });
  test('selected', function () {
    var _render26 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      options: ['one', 'two'],
      placeholder: "test select",
      id: "test-select",
      selected: 0
    }))),
        container = _render26.container,
        getByPlaceholderText = _render26.getByPlaceholderText;

    var select = getByPlaceholderText('test select');
    expect(container.firstChild).toMatchSnapshot();
    expect(select.value).toEqual('one');
  });
  test('keyboard navigation timeout', function () {
    jest.useFakeTimers(); // scrollIntoView is not implemented in jsdom, so we need to mock.
    // Select keyboard / keyboard nav timeout uses InfiniteScroll which
    // has scrollIntoView as part of its implementation.

    window.HTMLElement.prototype.scrollIntoView = jest.fn();

    var _render27 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: ['one', 'two', 'three'],
      disabled: [0]
    }))),
        container = _render27.container,
        getByPlaceholderText = _render27.getByPlaceholderText;

    _react2.fireEvent.click(getByPlaceholderText('test select')); // key event to start keyboard navigation


    _react2.fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Down',
      keyCode: 40,
      which: 40
    }); // advance timers to cause keyboard nav timeout


    (0, _react2.act)(function () {
      jest.advanceTimersByTime(100);
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  test('Search timeout', function () {
    jest.useFakeTimers();
    var onSearch = jest.fn();

    var _render28 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: ['one', 'two'],
      onSearch: onSearch
    }))),
        container = _render28.container,
        getByPlaceholderText = _render28.getByPlaceholderText;

    _react2.fireEvent.click(getByPlaceholderText('test select')); // advance timers so select can open & have focus


    (0, _react2.act)(function () {
      jest.advanceTimersByTime(200);
    }); // add content to search box

    _react2.fireEvent.change(document.activeElement, {
      target: {
        value: 'o'
      }
    });

    expect(container.firstChild).toMatchSnapshot(); // advance timers to cause search timeout

    (0, _react2.act)(function () {
      jest.advanceTimersByTime(100);
    });
    expect(document.activeElement).toMatchSnapshot();
  });
  test('disabled option value', function () {
    jest.useFakeTimers();

    var _render29 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_2.Select, {
      id: "test-select",
      placeholder: "test select",
      options: ['one', 'two'],
      disabled: ['one']
    }))),
        getByPlaceholderText = _render29.getByPlaceholderText;

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
  });
  test('Clear option renders- top', function () {
    var Test = function Test() {
      var _React$useState5 = _react["default"].useState(),
          value = _React$useState5[0];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        value: value,
        options: ['one', 'two'],
        clear: true
      });
    };

    var _render30 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render30.getByPlaceholderText;

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
  });
  test('Clear option renders - bottom', function () {
    var Test = function Test() {
      var _React$useState6 = _react["default"].useState(),
          value = _React$useState6[0];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        value: value,
        options: ['one', 'two'],
        clear: {
          position: 'bottom'
        }
      });
    };

    var _render31 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render31.getByPlaceholderText;

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
  });
  test('Clear option renders custom label', function () {
    var Test = function Test() {
      var _React$useState7 = _react["default"].useState(),
          value = _React$useState7[0];

      return /*#__PURE__*/_react["default"].createElement(_2.Select, {
        id: "test-select",
        placeholder: "test select",
        value: value,
        options: ['one', 'two'],
        clear: {
          label: 'test label'
        }
      });
    };

    var _render32 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render32.getByPlaceholderText;

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
  });
  test('Clear option renders correct label when wrapped in FormField', function () {
    var Test = function Test() {
      var _React$useState8 = _react["default"].useState(),
          value = _React$useState8[0];

      return /*#__PURE__*/_react["default"].createElement(_.FormField, {
        label: "Test",
        name: "test"
      }, /*#__PURE__*/_react["default"].createElement(_2.Select, {
        name: "test",
        id: "test-select",
        placeholder: "test select",
        value: value,
        options: ['one', 'two'],
        clear: true
      }));
    };

    var _render33 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render33.getByPlaceholderText;

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    (0, _portal.expectPortal)('test-select__drop').toMatchSnapshot();
  });
  test('Clear option clears value onClick', function () {
    var Test = function Test() {
      var _React$useState9 = _react["default"].useState(),
          value = _React$useState9[0];

      return /*#__PURE__*/_react["default"].createElement(_.FormField, {
        label: "Test",
        name: "test"
      }, /*#__PURE__*/_react["default"].createElement(_2.Select, {
        name: "test",
        id: "test-select",
        placeholder: "test select",
        value: value,
        options: ['one', 'two'],
        clear: true
      }));
    };

    var _render34 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(Test, null))),
        getByPlaceholderText = _render34.getByPlaceholderText;

    var select = getByPlaceholderText('test select');

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    _react2.fireEvent.click(document.getElementById('test-select__drop').querySelectorAll('button')[1]);

    _react2.fireEvent.click(getByPlaceholderText('test select'));

    _react2.fireEvent.click(document.getElementById('test-select__drop').querySelectorAll('button')[0]);

    expect(select.value).toEqual('');
  });
  window.scrollTo.mockRestore();
});