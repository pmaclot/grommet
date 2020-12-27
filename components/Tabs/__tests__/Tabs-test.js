"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

var _ = require("../..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Tabs', function () {
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
              a11yTitle: "test"
            })))), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container).toMatchSnapshot();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('no Tab', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, null))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('Tab', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 1"
    }, "Tab body 1"), undefined, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 2"
    }, "Tab body 2"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('complex title', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: /*#__PURE__*/_react["default"].createElement("div", null, "Tab 1")
    }, "Tab body 1"), undefined, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: /*#__PURE__*/_react["default"].createElement("div", null, "Tab 2")
    }, "Tab body 2"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('with icon + reverse', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 1",
      icon: /*#__PURE__*/_react["default"].createElement("svg", null)
    }, "Tab body 1"), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 2",
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      reverse: true
    }, "Tab body 2"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('alignControls', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      full: true
    }, /*#__PURE__*/_react["default"].createElement(_.Tabs, {
      alignControls: "center"
    }, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 1"
    }, "Tab body 1"), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 2"
    }, "Tab body 2"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('Custom Tab component', function () {
    var CustomTab = function CustomTab() {
      return /*#__PURE__*/_react["default"].createElement(_.Tab, {
        title: "Tab 1"
      }, "Tab body 1");
    };

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(CustomTab, null), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 2"
    }, "Tab body 2")))),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('change to second tab', function () {
    var onActive = jest.fn();

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, {
      onActive: onActive
    }, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 1"
    }, "Tab body 1"), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 2"
    }, "Tab body 2")))),
        getByText = _render3.getByText,
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Tab 2'));

    expect(onActive).toBeCalledWith(1);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('set on hover', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 1",
      onMouseOver: function onMouseOver() {},
      onMouseOut: function onMouseOut() {}
    }, "Tab body 1"), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 2"
    }, "Tab body 2")))),
        getByText = _render4.getByText,
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOver(getByText('Tab 1'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOver(getByText('Tab 2'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOut(getByText('Tab 1'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOut(getByText('Tab 2'));

    expect(container.firstChild).toMatchSnapshot();
  });
  test('should style as disabled', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Enabled Tab"
    }, "This tab is enabled"), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Disabled Tab",
      disabled: true
    }, "This tab is disabled")))),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('should apply custom theme disabled style', function () {
    var disabledTextColor = 'blue';
    var disabledBorderBottomColor = 'green';
    var customTheme = {
      tab: {
        border: {
          disabled: {
            color: disabledBorderBottomColor
          }
        },
        disabled: {
          color: disabledTextColor
        }
      }
    };

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Enabled Tab"
    }, "This tab is enabled"), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Disabled Tab",
      disabled: true
    }, "This tab is disabled")))),
        container = _render6.container,
        getByText = _render6.getByText;

    expect(container.firstChild).toMatchSnapshot();
    var disabledTab = getByText('Disabled Tab').parentElement;
    var disabledTabStyle = window.getComputedStyle(disabledTab);
    expect(disabledTabStyle.color).toBe(disabledTextColor);
    expect(disabledTabStyle.borderBottomColor).toBe(disabledBorderBottomColor);
  });
  test("should apply custom theme disabled style when theme.button.default is \n  defined", function () {
    var disabledTextColor = 'blue';
    var disabledBorderBottomColor = 'green';
    var customTheme = {
      button: {
        "default": {}
      },
      tab: {
        border: {
          disabled: {
            color: disabledBorderBottomColor
          }
        },
        disabled: {
          color: disabledTextColor
        }
      }
    };

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Enabled Tab"
    }, "This tab is enabled"), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Disabled Tab",
      disabled: true
    }, "This tab is disabled")))),
        container = _render7.container,
        getByText = _render7.getByText;

    expect(container.firstChild).toMatchSnapshot();
    var disabledTab = getByText('Disabled Tab').parentElement;
    var disabledTabStyle = window.getComputedStyle(disabledTab);
    expect(disabledTabStyle.color).toBe(disabledTextColor);
    expect(disabledTabStyle.borderBottomColor).toBe(disabledBorderBottomColor);
  });
  var ButtonTab = (0, _styledComponents["default"])(_.Tab).withConfig({
    displayName: "Tabs-test__ButtonTab",
    componentId: "sf6mt0-0"
  })(["", ""], function (props) {
    return (0, _styledComponents.css)(["background:", ";"], props.active ? 'blue' : 'green');
  });
  test('styled component should change tab color when active', function () {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(ButtonTab, {
      title: "About"
    }), /*#__PURE__*/_react["default"].createElement(ButtonTab, {
      title: "Activity"
    }), /*#__PURE__*/_react["default"].createElement(ButtonTab, {
      title: "Stickers"
    })))),
        container = _render8.container,
        getByText = _render8.getByText;

    _react2.fireEvent.click(getByText('Activity'));

    expect(container.firstChild).toMatchSnapshot();
  });
});