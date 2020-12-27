"use strict";

var _react = _interopRequireWildcard(require("react"));

require("jest-styled-components");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

var _portal = require("../../../utils/portal");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var customTheme = {
  global: {
    drop: {
      shadowSize: 'large'
    }
  }
};

var TestInput = function TestInput(_ref) {
  var inputProps = _ref.inputProps,
      theme = _ref.theme,
      elevation = _ref.elevation,
      containerTarget = _ref.containerTarget,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'this is a test' : _ref$message,
      rest = _objectWithoutPropertiesLoose(_ref, ["inputProps", "theme", "elevation", "containerTarget", "message"]);

  var _useState = (0, _react.useState)(false),
      showDrop = _useState[0],
      setShowDrop = _useState[1];

  var inputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setShowDrop(true);
  }, []);
  var drop;

  if (showDrop) {
    drop = /*#__PURE__*/_react["default"].createElement(_.Drop, _extends({
      id: "drop-node",
      elevation: elevation,
      target: inputRef.current
    }, rest), message);
  }

  return /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
    theme: theme,
    containerTarget: containerTarget
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    ref: inputRef
  }, inputProps, {
    "aria-label": "test"
  })), drop);
};

describe('Drop', function () {
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            window.scrollTo = jest.fn();
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, null)), container = _render.container;
            _context.next = 4;
            return (0, _jestAxe.axe)(container);

          case 4:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container).toMatchSnapshot();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('basic', function () {
    window.scrollTo = jest.fn();
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, null));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align left right top bottom', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        left: 'right',
        top: 'bottom'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right right bottom top', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        right: 'right',
        bottom: 'top'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align left left', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        left: 'left',
        bottom: 'bottom'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right left top top', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        right: 'left',
        top: 'top'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right right bottom top', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        right: 'right',
        bottom: 'top'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right right', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        right: 'right'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('invalid align', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        whatever: 'right'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('no stretch', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      stretch: false
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('stretch = align', function () {
    var message = 'test test test test test test test test test test test test test test';
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      stretch: "align",
      message: message
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('close', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, null));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
    (0, _react2.cleanup)();
    expect(document.getElementById('drop-node')).toBeNull();
  });
  test('invoke onClickOutside', function () {
    var onClickOutside = jest.fn();
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      onClickOutside: onClickOutside
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
    (0, _react2.fireEvent)(document, new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true
    }));
    expect(onClickOutside).toBeCalled();
  });
  test('resize', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, null));
    global.window.innerWidth = 1000;
    global.window.innerHeight = 1000;
    (0, _react2.fireEvent)(window, new Event('resize', {
      bubbles: true,
      cancelable: true
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('restrict focus', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      restrictFocus: true
    }));
    expect(document.activeElement).toMatchSnapshot();
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
    (0, _react2.cleanup)();
    expect(document.activeElement).toMatchSnapshot();
  });
  test('default elevation renders', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, null));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('theme elevation renders', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      theme: customTheme
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('props elevation renders', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      theme: customTheme,
      elevation: "medium"
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('plain renders', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      plain: true
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('default containerTarget', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      "data-testid": "drop"
    })),
        getByTestId = _render2.getByTestId;

    var actualRoot = getByTestId('drop').parentNode.parentNode.parentNode;
    expect(actualRoot).toBe(document.body);
  });
  test('custom containerTarget', function () {
    var target = document.createElement('div');
    document.body.appendChild(target);

    try {
      var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
        "data-testid": "drop",
        containerTarget: target
      })),
          getByTestId = _render3.getByTestId;

      var actualRoot = getByTestId('drop').parentNode.parentNode.parentNode;
      expect(actualRoot).toBe(target);
    } finally {
      document.body.removeChild(target);
    }
  });
});