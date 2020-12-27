"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

require("regenerator-runtime/runtime");

var _react2 = require("@testing-library/react");

var _dom = require("@testing-library/dom");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

var _grommetIcons = require("grommet-icons");

var _portal = require("../../../utils/portal");

var _Grommet = require("../../Grommet");

var _ = require("..");

var _Keyboard = require("../../Keyboard");

var _Text = require("../../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('TextInput', function () {
  beforeEach(_portal.createPortal);
  afterEach(_react2.cleanup);
  test('should not have accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
              a11yTitle: "aria-test",
              name: "item"
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
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      name: "item"
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('a11yTitle', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      a11yTitle: "aria-test",
      name: "item"
    })),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('disabled', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      disabled: true,
      name: "item"
    })),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('icon', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Search, null),
      name: "item"
    })),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('icon reverse', function () {
    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Search, null),
      reverse: true,
      name: "item"
    })),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('suggestions', function (done) {
    var onChange = jest.fn();
    var onFocus = jest.fn();

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      suggestions: ['test', 'test1'],
      onChange: onChange,
      onFocus: onFocus
    })),
        getByTestId = _render7.getByTestId,
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.focus(getByTestId('test-input'));

    _react2.fireEvent.change(getByTestId('test-input'), {
      target: {
        value: ' '
      }
    });

    setTimeout(function () {
      (0, _portal.expectPortal)('text-input-drop__item').toMatchSnapshot();
      expect(onChange).toBeCalled();
      expect(onFocus).toBeCalled();
      (0, _react2.fireEvent)(document, new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true
      }));
      expect(document.getElementById('text-input-drop__item')).toBeNull();
      done();
    }, 50);
  });
  test('complex suggestions', function (done) {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      suggestions: [{
        label: 'test',
        value: 'test'
      }, {
        value: 'test1'
      }]
    }))),
        getByTestId = _render8.getByTestId,
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.focus(getByTestId('test-input'));

    _react2.fireEvent.change(getByTestId('test-input'), {
      target: {
        value: ' '
      }
    });

    setTimeout(function () {
      (0, _portal.expectPortal)('text-input-drop__item').toMatchSnapshot();
      (0, _react2.fireEvent)(document, new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true
      }));
      expect(document.getElementById('text-input-drop__item')).toBeNull();
      done();
    }, 50);
  });
  test('close suggestion drop', function (done) {
    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      suggestions: ['test', 'test1']
    }))),
        getByTestId = _render9.getByTestId,
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.focus(getByTestId('test-input'));

    _react2.fireEvent.change(getByTestId('test-input'), {
      target: {
        value: ' '
      }
    });

    setTimeout(function () {
      (0, _portal.expectPortal)('text-input-drop__item').toMatchSnapshot();

      _react2.fireEvent.keyDown(getByTestId('test-input'), {
        key: 'Esc',
        keyCode: 27,
        which: 27
      });

      setTimeout(function () {
        expect(document.getElementById('text-input-drop__item')).toBeNull();
        expect(container.firstChild).toMatchSnapshot();
        done();
      }, 50);
    }, 50);
  });
  test('let escape events propagage if there are no suggestions', function (done) {
    var callback = jest.fn();

    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Keyboard.Keyboard, {
      onEsc: callback
    }, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item"
    })))),
        getByTestId = _render10.getByTestId;

    _react2.fireEvent.change(getByTestId('test-input'), {
      target: {
        value: ' '
      }
    });

    setTimeout(function () {
      _react2.fireEvent.keyDown(getByTestId('test-input'), {
        key: 'Esc',
        keyCode: 27,
        which: 27
      });

      expect(callback).toBeCalled();
      done();
    }, 50);
  });
  test('calls onSuggestionsOpen', function (done) {
    var onSuggestionsOpen = jest.fn();

    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      suggestions: ['test', 'test1'],
      onSuggestionsOpen: onSuggestionsOpen
    }))),
        getByTestId = _render11.getByTestId;

    _react2.fireEvent.focus(getByTestId('test-input'));

    setTimeout(function () {
      (0, _portal.expectPortal)('text-input-drop__item').toMatchSnapshot();
      expect(onSuggestionsOpen).toBeCalled();
      done();
    }, 50);
  });
  test('calls onSuggestionsClose', function (done) {
    var onSuggestionsClose = jest.fn();

    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      suggestions: ['test', 'test1'],
      onSuggestionsClose: onSuggestionsClose
    }))),
        getByTestId = _render12.getByTestId,
        container = _render12.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.focus(getByTestId('test-input'));

    setTimeout(function () {
      (0, _portal.expectPortal)('text-input-drop__item').toMatchSnapshot();

      _react2.fireEvent.keyDown(getByTestId('test-input'), {
        key: 'Esc',
        keyCode: 27,
        which: 27
      });

      setTimeout(function () {
        expect(document.getElementById('text-input-drop__item')).toBeNull();
        expect(onSuggestionsClose).toBeCalled();
        expect(container.firstChild).toMatchSnapshot();
        done();
      }, 50);
    }, 50);
  });
  test('select suggestion', function (done) {
    var onSelect = jest.fn();

    var _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      plain: true,
      size: "large",
      id: "item",
      name: "item",
      suggestions: ['test', 'test1'],
      onSelect: onSelect
    }))),
        getByTestId = _render13.getByTestId,
        container = _render13.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.focus(getByTestId('test-input'));

    _react2.fireEvent.change(getByTestId('test-input'), {
      target: {
        value: ' '
      }
    });

    setTimeout(function () {
      (0, _portal.expectPortal)('text-input-drop__item').toMatchSnapshot();

      _react2.fireEvent.click((0, _dom.getByText)(document, 'test1'));

      expect(container.firstChild).toMatchSnapshot();
      expect(document.getElementById('text-input-drop__item')).toBeNull();
      expect(onSelect).toBeCalledWith(expect.objectContaining({
        suggestion: 'test1'
      }));
      done();
    }, 50);
  });
  test('select a suggestion with onSelect', function () {
    var onSelect = jest.fn();

    var _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      suggestions: ['test', {
        value: 'test1'
      }],
      onSelect: onSelect
    }))),
        getByTestId = _render14.getByTestId,
        container = _render14.container;

    expect(container.firstChild).toMatchSnapshot();
    var input = getByTestId('test-input'); // pressing enter here nothing will happen

    _react2.fireEvent.keyDown(input, {
      keyCode: 13
    }); // enter


    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down


    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down


    _react2.fireEvent.keyDown(input, {
      keyCode: 38
    }); // up


    _react2.fireEvent.keyDown(input, {
      keyCode: 13
    }); // enter


    expect(onSelect).toBeCalledWith(expect.objectContaining({
      suggestion: 'test'
    }));
  });
  test('auto-select 2nd suggestion with defaultSuggestion', function () {
    var onSelect = jest.fn();
    var suggestions = ['test1', 'test2'];
    var defaultSuggestionIndex = 1;

    var _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      defaultSuggestion: defaultSuggestionIndex,
      suggestions: suggestions,
      onSuggestionSelect: onSelect
    }))),
        getByTestId = _render15.getByTestId;

    var input = getByTestId('test-input'); // open drop - second should be automatically highlighted

    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down
    // pressing enter here will select the second suggestion


    _react2.fireEvent.keyDown(input, {
      keyCode: 13
    }); // enter


    expect(onSelect).toBeCalledWith(expect.objectContaining({
      suggestion: suggestions[defaultSuggestionIndex]
    }));
  });
  test('do not select any suggestion without defaultSuggestion', function () {
    var onSelect = jest.fn();

    var _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      suggestions: ['test1', 'test2'],
      onSuggestionSelect: onSelect
    }))),
        getByTestId = _render16.getByTestId;

    var input = getByTestId('test-input'); // open drop

    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down
    // pressing enter here closes drop but doesn't select


    _react2.fireEvent.keyDown(input, {
      keyCode: 13
    }); // enter


    expect(onSelect).toBeCalledWith(expect.objectContaining({
      suggestion: undefined
    })); // open drop

    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down
    // highlight first


    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down
    // highlight second


    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down
    // select highlighted


    _react2.fireEvent.keyDown(input, {
      keyCode: 13
    }); // enter


    expect(onSelect).toBeCalledWith(expect.objectContaining({
      suggestion: 'test2'
    }));
  });
  test('select a suggestion with onSuggestionSelect', function () {
    var onSuggestionSelect = jest.fn();

    var _render17 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      suggestions: ['test', {
        value: 'test1'
      }],
      onSuggestionSelect: onSuggestionSelect
    }))),
        getByTestId = _render17.getByTestId,
        container = _render17.container;

    expect(container.firstChild).toMatchSnapshot();
    var input = getByTestId('test-input'); // pressing enter here nothing will happen

    _react2.fireEvent.keyDown(input, {
      keyCode: 13
    }); // enter


    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down


    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down


    _react2.fireEvent.keyDown(input, {
      keyCode: 38
    }); // up


    _react2.fireEvent.keyDown(input, {
      keyCode: 13
    }); // enter


    expect(onSuggestionSelect).toBeCalledWith(expect.objectContaining({
      suggestion: 'test'
    }));
  });
  test('select with onSuggestionSelect when onSelect is present', function () {
    var onSelect = jest.fn();
    var onSuggestionSelect = jest.fn();

    var _render18 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      suggestions: ['test', {
        value: 'test1'
      }],
      onSelect: onSelect,
      onSuggestionSelect: onSuggestionSelect
    }))),
        getByTestId = _render18.getByTestId,
        container = _render18.container;

    expect(container.firstChild).toMatchSnapshot();
    var input = getByTestId('test-input'); // pressing enter here nothing will happen

    _react2.fireEvent.keyDown(input, {
      keyCode: 13
    }); // enter


    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down


    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    }); // down


    _react2.fireEvent.keyDown(input, {
      keyCode: 38
    }); // up


    _react2.fireEvent.keyDown(input, {
      keyCode: 13
    }); // enter


    expect(onSuggestionSelect).toBeCalledWith(expect.objectContaining({
      suggestion: 'test'
    }));
  });
  test('handles next and previous without suggestion', function () {
    var onSelect = jest.fn();

    var _render19 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      onSelect: onSelect
    }))),
        getByTestId = _render19.getByTestId,
        container = _render19.container;

    expect(container.firstChild).toMatchSnapshot();
    var input = getByTestId('test-input');

    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    });

    _react2.fireEvent.keyDown(input, {
      keyCode: 40
    });

    _react2.fireEvent.keyDown(input, {
      keyCode: 38
    });

    _react2.fireEvent.keyDown(input, {
      keyCode: 13
    }); // enter


    expect(onSelect).not.toBeCalled();
    expect(container.firstChild).toMatchSnapshot();
  });
  ['small', 'medium', 'large'].forEach(function (dropHeight) {
    test(dropHeight + " drop height", function (done) {
      var _render20 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.TextInput, {
        "data-testid": "test-input",
        id: "item",
        name: "item",
        suggestions: ['test', 'test1'],
        dropHeight: dropHeight
      })),
          getByTestId = _render20.getByTestId;

      _react2.fireEvent.focus(getByTestId('test-input'));

      setTimeout(function () {
        (0, _portal.expectPortal)('text-input-drop__item').toMatchSnapshot();
        done();
      }, 50);
    });
  });
  test('should return focus to input on select', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var onSelect, _render21, getByPlaceholderText, input, selection;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            onSelect = jest.fn();
            _render21 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
              "data-testid": "test-input-focus",
              id: "input-focus",
              name: "input-focus",
              placeholder: "Type to search...",
              suggestions: ['option0', 'option1', 'option2'],
              onSelect: onSelect
            }))), getByPlaceholderText = _render21.getByPlaceholderText;
            input = getByPlaceholderText('Type to search...');
            expect(document.activeElement).not.toEqual(input);

            _react2.fireEvent.focus(input);

            expect(document.activeElement).not.toEqual(input);
            _context2.next = 8;
            return (0, _react2.waitForElement)(function () {
              return _dom.screen.getByText('option1');
            });

          case 8:
            selection = _context2.sent;

            _react2.fireEvent.click(selection);

            expect(document.activeElement).toEqual(input);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('should return focus to ref on select', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var inputRef, onSelect, _render22, getByPlaceholderText, input, selection;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            inputRef = {
              current: {}
            };
            onSelect = jest.fn();
            _render22 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
              "data-testid": "test-input-focus",
              id: "input-focus",
              name: "input-focus",
              placeholder: "Type to search...",
              suggestions: ['option0', 'option1', 'option2'],
              onSelect: onSelect,
              ref: inputRef
            }))), getByPlaceholderText = _render22.getByPlaceholderText;
            input = getByPlaceholderText('Type to search...');
            expect(document.activeElement).not.toEqual(input);

            _react2.fireEvent.focus(input);

            expect(document.activeElement).not.toEqual(input);
            _context3.next = 9;
            return (0, _react2.waitForElement)(function () {
              return _dom.screen.getByText('option2');
            });

          case 9:
            selection = _context3.sent;

            _react2.fireEvent.click(selection);

            expect(document.activeElement).toEqual(input);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('should not have padding when plain="full"', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var _render23, container;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render23 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
              plain: "full",
              name: "name",
              placeholder: "should not have padding"
            }))), container = _render23.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test('should have padding when plain', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var _render24, container;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _render24 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
              plain: true,
              name: "name",
              placeholder: "should still have padding"
            }))), container = _render24.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  test('should show non-string placeholder', function () {
    var _render25 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "test-styled-placeholder",
      id: "styled-placeholder",
      name: "styled-placeholder",
      placeholder: /*#__PURE__*/_react["default"].createElement(_Text.Text, null, "placeholder text")
    }))),
        container = _render25.container;

    var placeholder = _dom.screen.getByText('placeholder text');

    expect(placeholder).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  test('should hide non-string placeholder when having a value', function () {
    var _render26 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      "data-testid": "styled-placeholder",
      id: "styled-placeholder",
      name: "styled-placeholder",
      placeholder: /*#__PURE__*/_react["default"].createElement(_Text.Text, null, "placeholder text"),
      value: "test"
    }))),
        container = _render26.container;

    var placeholder = _dom.screen.queryByText('placeholder text');

    expect(placeholder).toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
  test('textAlign end', function () {
    var _render27 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextInput, {
      value: "1234",
      textAlign: "end"
    }))),
        container = _render27.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});