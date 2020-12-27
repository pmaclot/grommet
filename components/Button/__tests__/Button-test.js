"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _grommetIcons = require("grommet-icons");

var _react2 = require("@testing-library/react");

var _utils = require("../../../utils");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Button', function () {
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, getByText, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
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
  test('basic', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test",
      onClick: function onClick() {}
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('children function', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      onClick: function onClick() {}
    }, function () {
      return /*#__PURE__*/_react["default"].createElement(_.Text, null, "Test");
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('children function with disabled prop', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      onClick: function onClick() {},
      disabled: true
    }, function (_ref2) {
      var disabled = _ref2.disabled;
      return /*#__PURE__*/_react["default"].createElement(_.Text, null, disabled ? 'Disabled' : 'Test');
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      onClick: function onClick() {}
    }, function (_ref3) {
      var disabled = _ref3.disabled;
      return /*#__PURE__*/_react["default"].createElement(_.Text, null, disabled ? 'Disabled' : 'Test');
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('warns about invalid label', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test",
      onClick: function onClick() {}
    }, "invalid"))),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith('Button should not have children if icon or label is provided');
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
  test('warns about invalid icon', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      onClick: function onClick() {}
    }, "invalid"))),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith('Button should not have children if icon or label is provided');
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
  test('primary', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      primary: true,
      label: "Test",
      onClick: function onClick() {}
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      color: "accent-1",
      label: "Test",
      onClick: function onClick() {}
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      color: "accent-1",
      primary: true,
      label: "Test",
      onClick: function onClick() {}
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      color: "#111111",
      primary: true,
      label: "Test",
      onClick: function onClick() {}
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      color: "#123",
      primary: true,
      label: "Test",
      onClick: function onClick() {}
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('fill', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      fill: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      fill: false
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      fill: "horizontal"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      fill: "vertical"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('focus', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test",
      onClick: function onClick() {}
    }))),
        container = _render4.container,
        getByText = _render4.getByText;

    _react2.fireEvent.focus(getByText('Test'));

    expect(container.firstChild).toMatchSnapshot();
  });
  test('tip', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Default Tip",
      onClick: function onClick() {},
      tip: "tooltip"
    }))),
        container = _render5.container,
        getByText = _render5.getByText;

    _react2.fireEvent.mouseOver(getByText('Default Tip'));

    expect(container.firstChild).toMatchSnapshot();
  });
  test('disabled', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      primary: true,
      label: "Button"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      label: "Button"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      plain: true,
      label: "Button"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      plain: false,
      label: "Button"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      icon: /*#__PURE__*/_react["default"].createElement("svg", null)
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      plain: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      plain: false
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      label: "Button"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      label: "Button",
      plain: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      label: "Button",
      primary: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('active', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      active: true,
      label: "Button"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('active + primary', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      active: true,
      primary: true,
      label: "Button"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('icon label', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      label: "Test",
      onClick: function onClick() {}
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('reverse icon label', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      reverse: true,
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      label: "Test",
      onClick: function onClick() {}
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('href', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      href: "test"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('hoverIndicator background', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      onClick: function onClick() {},
      hoverIndicator: "background"
    }, "hoverIndicator")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('hoverIndicator as object with color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      onClick: function onClick() {},
      hoverIndicator: {
        color: 'brand'
      }
    }, "hoverIndicator")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('hoverIndicator as object with invalid color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      onClick: function onClick() {},
      hoverIndicator: {
        color: 'invalid'
      }
    }, "hoverIndicator")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('hoverIndicator color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      onClick: function onClick() {},
      hoverIndicator: "dark-3"
    }, "hoverIndicator")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('onClick', function () {
    var onClick = jest.fn();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Test",
      onClick: onClick
    })));

    var tree = component.toJSON();
    var button = (0, _utils.findAllByType)(tree, 'button');
    button[0].props.onClick();
    expect(onClick).toBeCalled();
  });
  test('size', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      size: "small",
      label: "Small"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      size: "medium",
      label: "Medium"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Default"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      size: "large",
      label: "Large"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      primary: true,
      size: "small",
      label: "Small"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      primary: true,
      size: "medium",
      label: "Medium"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      primary: true,
      label: "Default"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      primary: true,
      size: "large",
      label: "Large"
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      size: "small",
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
      primary: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      size: "medium",
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
      primary: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
      primary: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      size: "large",
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
      primary: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      size: "small",
      label: "Small",
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
      reverse: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      size: "medium",
      label: "Medium",
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
      reverse: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      label: "Default",
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
      reverse: true
    }), /*#__PURE__*/_react["default"].createElement(_.Button, {
      size: "large",
      label: "Large",
      icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
      reverse: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('as', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      as: "span"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("disabled state cursor should indicate the button cannot be \n  clicked", function () {
    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
      disabled: true,
      label: "Button"
    }))),
        getByText = _render6.getByText;

    var button = getByText('Button'); // eslint-disable-next-line no-underscore-dangle

    var cursorStyle = window.getComputedStyle(button)._values.cursor;

    expect(cursorStyle).not.toBe('pointer');
    expect(cursorStyle).toBe('default');
  });
});