"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("jest-styled-components");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

var _grommetIcons = require("grommet-icons");

var _Grommet = require("../../Grommet");

var _Form = require("../../Form");

var _ = require("..");

var _TextInput = require("../../TextInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CustomFormField = (0, _styledComponents["default"])(_.FormField).withConfig({
  displayName: "FormField-test__CustomFormField",
  componentId: "sc-1ddfx0c-0"
})(["font-size:40px;"]);
describe('FormField', function () {
  afterEach(_react2.cleanup);
  test("should have no accessibility violations", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, null))), container = _render.container;
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
  test('default', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, null), /*#__PURE__*/_react["default"].createElement(_.FormField, null, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, null))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('label', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      label: "test label"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('help', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      help: "test help"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('error', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      error: "test error"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('info', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      info: "test info"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('htmlFor', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      htmlFor: "test-id"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('margin', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      margin: "medium"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('empty margin', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      margin: "none"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('pad', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      pad: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('abut', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: {
        formField: {
          border: {
            color: 'border',
            error: {
              color: {
                dark: 'white',
                light: 'status-critical'
              }
            },
            size: 'large',
            position: 'outer',
            side: 'all'
          },
          margin: {
            bottom: 'small'
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      htmlFor: "test-id"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('abut with margin', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: {
        formField: {
          border: {
            color: 'border',
            error: {
              color: {
                dark: 'white',
                light: 'status-critical'
              }
            },
            size: 'large',
            position: 'outer',
            side: 'all'
          },
          margin: {
            bottom: 'small'
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      margin: "medium",
      htmlFor: "test-id"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('custom formfield', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(CustomFormField, {
      htmlFor: "test-id"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('disabled', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      disabled: true
    }), " ", /*#__PURE__*/_react["default"].createElement(_Form.Form, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      disabled: true
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('required', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      required: true
    }), " ", /*#__PURE__*/_react["default"].createElement(_Form.Form, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      required: true
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('custom label', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: {
        formField: {
          label: {
            color: 'red',
            size: 'small',
            margin: 'xsmall',
            weight: 600
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_Form.Form, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      label: "label"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('disabled with custom label', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: {
        formField: {
          label: {
            color: 'red',
            size: 'small',
            margin: 'xsmall',
            weight: 600
          },
          disabled: {
            label: {
              color: 'teal'
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_Form.Form, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      disabled: true,
      label: "label"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('pad with border undefined', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: {
        formField: {
          border: undefined,
          content: {
            pad: 'large'
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_Form.Form, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      label: "label",
      pad: true
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('custom input margin', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: {
        formField: {
          content: {
            margin: {
              vertical: 'large'
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_Form.Form, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      label: "label"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('contentProps', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Form.Form, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      label: "label",
      contentProps: {
        border: false
      }
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('custom error and info icon and container', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: {
        formField: {
          error: {
            icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Alert, null),
            container: {
              background: {
                color: 'green'
              }
            }
          },
          info: {
            icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.StatusInfo, null),
            container: {
              pad: {
                horizontal: 'large'
              }
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_Form.Form, null, /*#__PURE__*/_react["default"].createElement(_.FormField, {
      label: "label",
      error: "This is an error message.",
      info: "Here is a little added info on FormField.",
      contentProps: {
        border: false
      }
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});