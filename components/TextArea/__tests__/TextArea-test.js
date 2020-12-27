"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('TextArea', function () {
  afterEach(_react2.cleanup);
  test('should not have accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
              a11yTitle: "test",
              id: "item",
              name: "item"
            }))), container = _render.container;
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
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
      id: "item",
      name: "item"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('placeholder', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
      id: "item",
      name: "item",
      placeholder: "placeholder"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('plain', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
      id: "item",
      name: "item",
      plain: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('disabled', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
      disabled: true,
      id: "item",
      name: "item",
      plain: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('focusIndicator', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
      id: "item",
      name: "item",
      focusIndicator: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('fill', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
      id: "item",
      name: "item",
      fill: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  [true, false, 'horizontal', 'vertical'].forEach(function (resize) {
    test("resize " + resize, function () {
      var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
        id: "item",
        name: "item",
        resize: resize
      })));

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  ['small', 'medium', 'large'].forEach(function (size) {
    test("size " + size, function () {
      var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
        id: "item",
        name: "item",
        size: size
      })));

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('Event tests', function () {
    afterEach(_react2.cleanup);
    var keyEvent = {
      key: 'Backspace',
      keyCode: 8,
      which: 8
    };
    test("onKeyDown", function () {
      var capturedEvent = null;

      var callback = function callback(event) {
        var key = event.key,
            keyCode = event.keyCode,
            which = event.which;
        capturedEvent = {
          key: key,
          keyCode: keyCode,
          which: which
        };
      };

      var component = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
        id: "item",
        name: "item",
        placeholder: "item",
        onKeyDown: callback
      })));
      var textArea = component.getByPlaceholderText('item');

      _react2.fireEvent.keyDown(textArea, keyEvent);

      expect(capturedEvent).toEqual(expect.objectContaining(keyEvent));
    });
    test("onKeyUp", function () {
      var capturedEvent = null;

      var callback = function callback(event) {
        var key = event.key,
            keyCode = event.keyCode,
            which = event.which;
        capturedEvent = {
          key: key,
          keyCode: keyCode,
          which: which
        };
      };

      var component = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
        id: "item",
        name: "item",
        placeholder: "item",
        onKeyUp: callback
      })));
      var textArea = component.getByPlaceholderText('item');

      _react2.fireEvent.keyUp(textArea, keyEvent);

      expect(capturedEvent).toEqual(expect.objectContaining(keyEvent));
    });
    test('onFocus', function () {
      var onFocus = jest.fn();

      var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
        name: "item",
        placeholder: "item",
        onFocus: onFocus
      }))),
          container = _render2.container,
          getByPlaceholderText = _render2.getByPlaceholderText;

      _react2.fireEvent.focus(getByPlaceholderText('item'));

      expect(container.firstChild).toMatchSnapshot();
      expect(onFocus).toHaveBeenCalledTimes(1);
    });
    test('onChange', function () {
      var onChange = jest.fn();

      var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
        name: "item",
        placeholder: "item",
        onChange: onChange
      }))),
          getByPlaceholderText = _render3.getByPlaceholderText;

      var input = getByPlaceholderText('item');

      _react2.fireEvent.change(input, {
        target: {
          value: 'Test'
        }
      });

      expect(input.value).toEqual('Test');
      expect(onChange).toHaveBeenCalledTimes(1);
    });
    test('onBlur is being called', function () {
      var onBlur = jest.fn();

      var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
        name: "item",
        placeholder: "item",
        onBlur: onBlur
      }))),
          getByPlaceholderText = _render4.getByPlaceholderText;

      _react2.fireEvent.blur(getByPlaceholderText('item'));

      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });
});