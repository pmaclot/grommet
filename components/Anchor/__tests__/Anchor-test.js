"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react2 = require("@testing-library/react");

require("jest-styled-components");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _utils = require("../../../utils");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Anchor', function () {
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, null, "Link"))), container = _render.container;
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
  test('renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, null)));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders with children', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#"
    }, "children")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('warns about invalid label render', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#",
      label: "Test"
    }, "invalid"))),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith('Anchor should not have children if icon or label is provided');
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
  test('warns about invalid icon render', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#",
      icon: /*#__PURE__*/_react["default"].createElement("svg", null)
    }, "invalid"))),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith('Anchor should not have children if icon or label is provided');
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
  test('primary renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#",
      primary: true,
      label: "Test"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('focus renders', function () {
    var onFocus = jest.fn();

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#",
      label: "Test",
      onFocus: onFocus
    }))),
        container = _render4.container,
        getByText = _render4.getByText;

    _react2.fireEvent.focus(getByText('Test'));

    expect(container.firstChild).toMatchSnapshot();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
  test('blur renders', function () {
    var onBlur = jest.fn();

    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#",
      label: "Test",
      onBlur: onBlur
    }))),
        container = _render5.container,
        getByText = _render5.getByText;

    _react2.fireEvent.blur(getByText('Test'));

    expect(container.firstChild).toMatchSnapshot();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
  test('disabled renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      disabled: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('icon label renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      label: "Test",
      onClick: function onClick() {}
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('reverse icon label renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      reverse: true,
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      label: "Test",
      onClick: function onClick() {}
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('size renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      size: "xsmall"
    }), /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      size: "small"
    }), /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      size: "medium"
    }), /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      size: "large"
    }), /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      size: "xlarge"
    }), /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      size: "xxlarge"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('is clickable', function () {
    var onClick = jest.fn();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#",
      label: "Test",
      onClick: onClick
    })));

    var tree = component.toJSON();
    var anchor = (0, _utils.findAllByType)(tree, 'a');
    anchor[0].props.onClick();
    expect(onClick).toBeCalled();
  });
  test('renders tag', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#",
      label: "Test",
      as: "span"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('weight renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#",
      label: "Normal",
      weight: "normal"
    }), /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#",
      label: "Bold",
      weight: "bold"
    }), /*#__PURE__*/_react["default"].createElement(_.Anchor, {
      href: "#",
      label: "Bold",
      weight: 500
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});