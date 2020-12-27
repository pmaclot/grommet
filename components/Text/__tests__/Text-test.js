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

test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var _render, container, results;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
            a11yTitle: "test"
          }, " Example"))), container = _render.container;
          _context.next = 3;
          return (0, _jestAxe.axe)(container);

        case 3:
          results = _context.sent;
          expect(results).toHaveNoViolations();
          expect(container.firstChild).toMatchSnapshot();

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
test('renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, null, "text")));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('accepts ref', function () {
  var ref = /*#__PURE__*/_react["default"].createRef();

  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
    ref: ref
  }, "text")), {
    createNodeMock: function createNodeMock(el) {
      return el;
    }
  });

  expect(ref.current).not.toBeNull();
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders size', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
    size: "xsmall"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    size: "large"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    size: "xlarge"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    size: "xxlarge"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders textAlign', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
    textAlign: "start"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    textAlign: "center"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    textAlign: "end"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders margin', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
    margin: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    margin: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    margin: "large"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    margin: "none"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    margin: {
      vertical: 'small'
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    margin: {
      horizontal: 'small'
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    margin: {
      bottom: 'small'
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    margin: {
      top: 'small'
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    margin: {
      left: 'small'
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    margin: {
      right: 'small'
    }
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
var LONG = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
test('renders truncate', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
    truncate: false
  }, LONG), /*#__PURE__*/_react["default"].createElement(_.Text, {
    truncate: true
  }, LONG)));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders color', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
    color: "status-critical"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders tag', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
    as: "div"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('proxies tag', function () {
  var tagComponent = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
    tag: "div"
  })));

  var asComponent = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
    as: "div"
  })));

  expect(tagComponent.toJSON()).toEqual(asComponent.toJSON());
});
test('renders weight', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Text, {
    weight: "normal"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    weight: "bold"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});