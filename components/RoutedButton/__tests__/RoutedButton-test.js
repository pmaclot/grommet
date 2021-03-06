"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _utils = require("../../../utils");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FakeRouter = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FakeRouter, _Component);

  function FakeRouter() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FakeRouter.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        push = _this$props.push,
        replace = _this$props.replace;
    return {
      router: {
        history: {
          push: push,
          replace: replace
        }
      }
    };
  };

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/_react["default"].createElement("div", null, children);
  };

  return FakeRouter;
}(_react.Component);

_defineProperty(FakeRouter, "propTypes", {
  children: _propTypes["default"].node.isRequired,
  push: _propTypes["default"].func.isRequired,
  replace: _propTypes["default"].func.isRequired
});

_defineProperty(FakeRouter, "childContextTypes", {
  router: _propTypes["default"].shape({})
});

describe('RoutedButton', function () {
  var push = jest.fn();
  var replace = jest.fn();
  var warning = "This component will be deprecated in the upcoming releases.\n         Please refer to https://github.com/grommet/grommet/issues/2855 \n         for more information.";
  test('renders', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(FakeRouter, {
      replace: replace,
      push: push
    }, /*#__PURE__*/_react["default"].createElement(_.RoutedButton, {
      label: "Test",
      path: "/"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(warnSpy).toBeCalledWith(warning);
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
  test('RoutedButton is clickable', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');
    var preventDefault = jest.fn();
    var onClick = jest.fn();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(FakeRouter, {
      replace: replace,
      push: push
    }, /*#__PURE__*/_react["default"].createElement(_.RoutedButton, {
      label: "Test",
      onClick: onClick,
      path: "/"
    }))));

    var tree = component.toJSON();
    var anchor = (0, _utils.findAllByType)(tree, 'a');
    anchor[0].props.onClick({
      preventDefault: preventDefault
    });
    expect(onClick).toBeCalled();
    expect(push).toBeCalled();
    expect(preventDefault).toBeCalled();
    expect(warnSpy).toBeCalledWith(warning);
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
  test('RoutedButton skips onClick if right clicked', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');
    var onClick = jest.fn();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(FakeRouter, {
      replace: replace,
      push: push
    }, /*#__PURE__*/_react["default"].createElement(_.RoutedButton, {
      label: "Test",
      onClick: onClick,
      path: "/"
    }))));

    var tree = component.toJSON();
    var anchor = (0, _utils.findAllByType)(tree, 'a');
    anchor[0].props.onClick({
      ctrlKey: true
    });
    anchor[0].props.onClick({
      metaKey: true
    });
    expect(onClick).not.toBeCalled();
    expect(warnSpy).toBeCalledWith(warning);
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
  test('RoutedButton calls router context push', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');
    var preventDefault = jest.fn();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(FakeRouter, {
      replace: replace,
      push: push
    }, /*#__PURE__*/_react["default"].createElement(_.RoutedButton, {
      label: "Test",
      path: "/"
    }))));

    var tree = component.toJSON();
    var button = (0, _utils.findAllByType)(tree, 'a');
    button[0].props.onClick({
      preventDefault: preventDefault
    });
    expect(preventDefault).toBeCalled();
    expect(push).toBeCalledWith('/');
    expect(warnSpy).toBeCalledWith(warning);
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
  test('RoutedButton calls router context replace', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');
    var preventDefault = jest.fn();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(FakeRouter, {
      replace: replace,
      push: push
    }, /*#__PURE__*/_react["default"].createElement(_.RoutedButton, {
      label: "Test",
      path: "/",
      method: "replace"
    }))));

    var tree = component.toJSON();
    var button = (0, _utils.findAllByType)(tree, 'a');
    button[0].props.onClick({
      preventDefault: preventDefault
    });
    expect(preventDefault).toBeCalled();
    expect(replace).toBeCalledWith('/');
    expect(warnSpy).toBeCalledWith(warning);
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });
});