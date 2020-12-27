"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

var _grommetIcons = require("grommet-icons");

var _ = require("../..");

var _buttonKindTheme = require("./theme/buttonKindTheme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Button kind', function () {
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, getByText, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
              theme: {
                button: {
                  "default": {}
                }
              }
            }, /*#__PURE__*/_react["default"].createElement(_.Button, {
              a11yTitle: "Test button",
              label: "Test",
              onClick: function onClick() {}
            }))), container = _render.container, getByText = _render.getByText;

            _react2.fireEvent.click(getByText('Test'));

            _context.next = 4;
            return (0, _jestAxe.axe)(container);

          case 4:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('default button', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: _buttonKindTheme.buttonKindTheme
    }, /*#__PURE__*/_react["default"].createElement(_.Button, null))),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('button with icon and align', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            color: undefined // needed use case for the test coverage

          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
      align: "start"
    }))),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('button icon colors', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            background: {
              color: '#666666'
            },
            border: {
              color: '#666666'
            },
            color: undefined // needed use case for the test coverage

          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
      color: "#000"
    }))),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test("mouseOver and mouseOut events", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _render5, container, getByText;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
              theme: {
                button: {
                  "default": {
                    background: '#000'
                  }
                }
              }
            }, /*#__PURE__*/_react["default"].createElement(_.Button, {
              label: "label",
              icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null)
            }))), container = _render5.container, getByText = _render5.getByText;

            _react2.fireEvent.mouseOver(getByText('label'));

            expect(container.firstChild).toMatchSnapshot();

            _react2.fireEvent.mouseOut(getByText('label'));

            expect(container.firstChild).toMatchSnapshot();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('primary button', function () {
    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: _buttonKindTheme.buttonKindTheme
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      primary: true
    }))),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('secondary button', function () {
    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: _buttonKindTheme.buttonKindTheme
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      secondary: true
    }))),
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('border on default button', function () {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            border: {
              color: 'green',
              width: '2px'
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test"
    }))),
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('no border on default button', function () {
    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            border: false
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test"
    }))),
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('extend on default button', function () {
    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            extend: {
              color: 'green'
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test"
    }))),
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('fill', function () {
    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {}
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test",
      fill: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test",
      fill: "vertical"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test",
      fill: "horizontal"
    }))),
        container = _render11.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('font on button default', function () {
    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            font: {
              weight: 700,
              height: '20px'
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test"
    }))),
        container = _render12.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('font undefined', function () {
    var _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            font: {
              weight: undefined,
              height: undefined
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test"
    }))),
        container = _render13.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('hover on default button', function () {
    var _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            hover: {
              color: 'white',
              background: 'green'
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test",
      plain: true,
      hoverIndicator: true,
      onClick: function onClick() {}
    }))),
        container = _render14.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('opacity on default button', function () {
    var _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            opacity: true
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test"
    }))),
        container = _render15.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('padding on default button', function () {
    var _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            padding: {
              horizontal: '12px',
              vertical: '6px'
            },
            background: {
              color: 'green'
            },
            color: 'text'
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test"
    }))),
        container = _render16.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('render of children', function () {
    var _render17 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: _buttonKindTheme.buttonKindTheme
    }, /*#__PURE__*/_react["default"].createElement(_.Button, null, "Test"))),
        container = _render17.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('no padding on default button', function () {
    var _render18 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            padding: '0px',
            color: 'text',
            border: {
              color: false
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test"
    }))),
        container = _render18.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('size of default button', function () {
    var _render19 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {
            size: {
              small: {
                border: {
                  radius: '4px'
                },
                pad: {
                  vertical: '4px',
                  horizontal: '8px'
                }
              }
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test",
      size: "small"
    }))),
        container = _render19.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test("disabled state cursor should indicate the button cannot be \n  clicked", function () {
    var _render20 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {}
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      label: "Button"
    }))),
        getByText = _render20.getByText;

    var button = getByText('Button'); // eslint-disable-next-line no-underscore-dangle

    var cursorStyle = window.getComputedStyle(button)._values.cursor;

    expect(cursorStyle).not.toBe('pointer');
    expect(cursorStyle).toBe('default');
  });
  test("disabled with hoverIndicator should not hover", function () {
    var _render21 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        button: {
          "default": {}
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      hoverIndicator: true,
      label: "Button"
    }))),
        container = _render21.container,
        getByText = _render21.getByText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOver(getByText('Button'));

    expect(container.firstChild).toMatchSnapshot();
  });
});