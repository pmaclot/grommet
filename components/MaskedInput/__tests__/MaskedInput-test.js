"use strict";

var _react = _interopRequireDefault(require("react"));

require("core-js/stable");

require("regenerator-runtime/runtime");

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _dom = require("@testing-library/dom");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

var _grommetIcons = require("grommet-icons");

var _portal = require("../../../utils/portal");

var _Grommet = require("../../Grommet");

var _Keyboard = require("../../Keyboard");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('MaskedInput', function () {
  beforeEach(_portal.createPortal);
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
              name: "item",
              a11yTitle: "axe-test"
            })), container = _render.container;
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
  test('basic', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
      name: "item"
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('icon', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Search, null),
      name: "item"
    })),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('icon reverse', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Search, null),
      reverse: true,
      name: "item"
    })),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('disabled', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
      disabled: true,
      name: "item"
    })),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('mask', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var onChange, onFocus, _render6, getByTestId, container;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            onChange = jest.fn();
            onFocus = jest.fn();
            _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
              "data-testid": "test-input",
              id: "item",
              name: "item",
              mask: [{
                length: [1, 2],
                options: ['aa', 'bb'],
                regexp: /^[ab][ab]$|^[ab]$/
              }, {
                fixed: '!'
              }, {
                length: 1,
                regexp: /^[ab]$/
              }],
              value: "bb!ax",
              onChange: onChange,
              onFocus: onFocus
            })), getByTestId = _render6.getByTestId, container = _render6.container;
            expect(container.firstChild).toMatchSnapshot();

            _react2.fireEvent.focus(getByTestId('test-input'));

            _context2.next = 7;
            return (0, _react2.waitForElement)(function () {
              return _dom.screen.getByText('aa');
            });

          case 7:
            (0, _portal.expectPortal)('masked-input-drop__item').toMatchSnapshot();
            expect(onChange).not.toBeCalled();
            expect(onFocus).toBeCalled();

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('mask with long fixed', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var onChange, _render7, getByTestId, container, input;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            onChange = jest.fn(function (event) {
              return event.target.value;
            });
            _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
              "data-testid": "test-input",
              id: "item",
              name: "item",
              mask: [{
                fixed: 'https://'
              }, {
                regexp: /^[ab]+$/
              }],
              value: "",
              onChange: onChange
            })), getByTestId = _render7.getByTestId, container = _render7.container;
            expect(container.firstChild).toMatchSnapshot();
            input = getByTestId('test-input'); // Entering part of the fixed portion and then something that
            // matches the next portion should auto-expand the fixed portion

            _react2.fireEvent.change(input, {
              target: {
                value: 'hta'
              }
            });

            expect(onChange).toHaveBeenCalled();
            expect(onChange).toHaveReturnedWith('https://a'); // Removing all but a piece of the fixed portion should
            // leave just that part of the fixed portion (like when
            // you backspace over it)

            _react2.fireEvent.change(input, {
              target: {
                value: 'http'
              }
            });

            expect(onChange).toHaveBeenCalled();
            expect(onChange).toHaveReturnedWith('http');

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('option via mouse', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var onChange, _render8, getByTestId, container, option;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            onChange = jest.fn(function (event) {
              return event.target.value;
            });
            _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
              "data-testid": "test-input",
              plain: true,
              size: "large",
              id: "item",
              name: "item",
              mask: [{
                length: [1, 2],
                options: ['aa', 'bb'],
                regexp: /^[ab][ab]$|^[ab]$/
              }, {
                fixed: '!'
              }],
              onChange: onChange
            })), getByTestId = _render8.getByTestId, container = _render8.container;
            expect(container.firstChild).toMatchSnapshot();

            _react2.fireEvent.focus(getByTestId('test-input'));

            _context4.next = 6;
            return (0, _react2.waitForElement)(function () {
              return (0, _dom.getByText)(document, 'aa');
            });

          case 6:
            option = _context4.sent;
            (0, _portal.expectPortal)('masked-input-drop__item').toMatchSnapshot();

            _react2.fireEvent.click(option);

            expect(container.firstChild).toMatchSnapshot();
            expect(onChange).toHaveBeenCalled();
            expect(onChange).toHaveReturnedWith('aa!');

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test('option via keyboard', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var onChange, _render9, getByTestId, container, input;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            onChange = jest.fn(function (event) {
              return event.target.value;
            });
            _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
              "data-testid": "test-input",
              id: "item",
              name: "item",
              mask: [{
                length: [1, 2],
                options: ['aa', 'bb'],
                regexp: /^[ab][ab]$|^[ab]$/
              }, {
                fixed: '!'
              }],
              onChange: onChange
            })), getByTestId = _render9.getByTestId, container = _render9.container;
            expect(container.firstChild).toMatchSnapshot();
            input = getByTestId('test-input');

            _react2.fireEvent.focus(input);

            _context5.next = 7;
            return (0, _react2.waitForElement)(function () {
              return _dom.screen.getByText('aa');
            });

          case 7:
            // pressing enter here nothing will happen
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


            expect(onChange).toHaveBeenCalled();
            expect(onChange).toHaveReturnedWith('aa!');

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  test('Escape events should propagage if there is no drop', function () {
    var callback = jest.fn();

    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Keyboard.Keyboard, {
      onEsc: callback
    }, /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
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

    _react2.fireEvent.keyDown(getByTestId('test-input'), {
      key: 'Esc',
      keyCode: 27,
      which: 27
    });

    expect(callback).toBeCalled();
  });
  test('next and previous without options', function () {
    var onChange = jest.fn();

    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
      "data-testid": "test-input",
      id: "item",
      name: "item",
      mask: [{
        length: [1, 2],
        regexp: /^[ab][ab]$|^[ab]$/
      }, {
        fixed: '!'
      }],
      onChange: onChange
    })),
        getByTestId = _render11.getByTestId,
        container = _render11.container;

    expect(container.firstChild).toMatchSnapshot();
    var input = getByTestId('test-input');

    _react2.fireEvent.focus(input);

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


    expect(onChange).not.toBeCalled();
    expect(container.firstChild).toMatchSnapshot();
  });
  test('event target props are available option via mouse', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var onChangeMock, _render12, getByTestId, container;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            onChangeMock = jest.fn(function (event) {
              var _event$target = event.target,
                  value = _event$target.value,
                  id = _event$target.id,
                  name = _event$target.name;
              return {
                target: {
                  id: id,
                  value: value,
                  name: name
                }
              };
            });
            _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
              "data-testid": "test-input",
              plain: true,
              size: "large",
              id: "item",
              name: "item",
              mask: [{
                length: [1, 2],
                options: ['aa', 'bb'],
                regexp: /^[ab][ab]$|^[ab]$/
              }, {
                fixed: '!'
              }],
              onChange: onChangeMock
            })), getByTestId = _render12.getByTestId, container = _render12.container;
            expect(container.firstChild).toMatchSnapshot();

            _react2.fireEvent.focus(getByTestId('test-input'));

            _context6.next = 6;
            return (0, _react2.waitForElement)(function () {
              return _dom.screen.getByText('aa');
            });

          case 6:
            (0, _portal.expectPortal)('masked-input-drop__item').toMatchSnapshot();

            _react2.fireEvent.click((0, _dom.getByText)(document, 'aa'));

            expect(container.firstChild).toMatchSnapshot();
            expect(onChangeMock).toHaveBeenCalled();
            expect(onChangeMock).toHaveReturnedWith(expect.objectContaining({
              target: expect.objectContaining({
                id: 'item',
                name: 'item',
                value: 'aa!'
              })
            }));

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  test('event target props are available option via keyboard', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var onChangeMock, _render13, getByTestId, container, input;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            onChangeMock = jest.fn(function (event) {
              var _event$target2 = event.target,
                  value = _event$target2.value,
                  id = _event$target2.id,
                  name = _event$target2.name;
              return {
                target: {
                  id: id,
                  value: value,
                  name: name
                }
              };
            });
            _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
              "data-testid": "test-input",
              id: "item",
              name: "item",
              size: "medium",
              mask: [{
                length: [1, 2],
                options: ['aa', 'bb'],
                regexp: /^[ab][ab]$|^[ab]$/
              }, {
                fixed: '!'
              }],
              onChange: onChangeMock
            })), getByTestId = _render13.getByTestId, container = _render13.container;
            expect(container.firstChild).toMatchSnapshot();
            input = getByTestId('test-input');

            _react2.fireEvent.focus(input);

            _context7.next = 7;
            return (0, _react2.waitForElement)(function () {
              return _dom.screen.getByText('aa');
            });

          case 7:
            // pressing enter here nothing will happen
            _react2.fireEvent.keyDown(input, {
              keyCode: 13
            }); // enter


            expect(onChangeMock).not.toBeCalled();

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


            expect(onChangeMock).toBeCalled();
            expect(onChangeMock).toBeCalledTimes(1);
            expect(onChangeMock).toHaveReturnedWith(expect.objectContaining({
              target: expect.objectContaining({
                id: 'item',
                name: 'item',
                value: 'aa!'
              })
            }));

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
  test('applies custom global.hover theme to options', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var customTheme, onChange, _render14, getByTestId, container, optionButton;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            customTheme = {
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
            onChange = jest.fn(function (event) {
              return event.target.value;
            });
            _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
              theme: customTheme
            }, /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
              "data-testid": "test-input",
              plain: true,
              size: "large",
              id: "item",
              name: "item",
              mask: [{
                length: [1, 2],
                options: ['aa', 'bb', 'cc'],
                regexp: /^[ab][ab]$|^[ab]$/
              }, {
                fixed: '!'
              }],
              onChange: onChange
            }))), getByTestId = _render14.getByTestId, container = _render14.container;
            expect(container.firstChild).toMatchSnapshot();

            _react2.fireEvent.focus(getByTestId('test-input'));

            _context8.next = 7;
            return (0, _react2.waitForElement)(function () {
              return _dom.screen.getByText('aa');
            });

          case 7:
            optionButton = (0, _dom.getByText)(document, 'bb').closest('button');

            _react2.fireEvent.mouseOver(optionButton);

            expect(optionButton).toMatchSnapshot();

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  test('with no mask', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var onChange, _render15, getByTestId, container;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            onChange = jest.fn(function (event) {
              return event.target.value;
            });
            _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
              "data-testid": "test-input",
              plain: true,
              size: "large",
              id: "item",
              name: "item",
              onChange: onChange
            })), getByTestId = _render15.getByTestId, container = _render15.container;
            expect(container.firstChild).toMatchSnapshot();

            _react2.fireEvent.change(getByTestId('test-input'), {
              target: {
                value: 'aa'
              }
            });

            expect(onChange).toHaveBeenCalled();
            expect(onChange).toReturnWith('aa');

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  test('custom theme', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var customTheme, _render16, container;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            customTheme = {
              maskedInput: {
                container: {
                  extend: 'svg { fill: red; stroke: red; }'
                }
              }
            };
            _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
              theme: customTheme
            }, /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
              "data-testid": "test-input",
              size: "large",
              id: "item",
              icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Search, null),
              name: "item"
            }))), container = _render16.container;
            expect(container.firstChild).toMatchSnapshot();

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
});