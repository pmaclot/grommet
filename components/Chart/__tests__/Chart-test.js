"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _Grommet = require("../../Grommet");

var _Box = require("../../Box");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var VALUES = [{
  value: [1, 60],
  label: 'sixty'
}, {
  value: [0, 0],
  label: 'zero'
}];
var UNDEFINED_VALUES = [{
  value: [2, 60],
  label: 'sixty'
}, {
  value: [1, undefined]
}, {
  value: [0, 0],
  label: 'zero'
}];
var STYLED_VALUES = [{
  value: [1, 60],
  label: 'sixty',
  color: 'status-ok',
  opacity: 'strong',
  thickness: 'small'
}, {
  value: [0, 0],
  label: 'zero',
  color: '#123456',
  opacity: 0.27,
  thickness: 27
}];
describe('Chart', function () {
  afterEach(_react2.cleanup);
  test('should not have accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
              values: VALUES
            }))), container = _render.container;
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
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('type', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "bar",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "line",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "area",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('size', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: "xsmall",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: "small",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: "medium",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: "large",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: "xlarge",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      width: "large"
    }, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'full'
      },
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'fill'
      },
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'auto'
      },
      values: VALUES
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('thickness', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      thickness: "xsmall",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      thickness: "small",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      thickness: "medium",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      thickness: "large",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      thickness: "xlarge",
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('cap', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      round: true,
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "line",
      round: true,
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "area",
      round: true,
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      round: true,
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('gap', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      width: "large"
    }, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'auto'
      },
      gap: "small",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'auto'
      },
      gap: "medium",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'auto'
      },
      gap: "large",
      values: VALUES
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('dash', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      dash: true,
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      color: "brand",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      color: {
        color: 'brand',
        opacity: 'strong'
      },
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      color: [{
        value: 0,
        color: 'brand'
      }, {
        value: 60,
        color: 'border'
      }],
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('point', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      point: "circle",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      point: "diamond",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      point: "square",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      point: "star",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      point: "triangle",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      point: "triangleDown",
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('value style', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      point: "circle",
      values: STYLED_VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "bar",
      values: STYLED_VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('pad', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      pad: "xsmall",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      pad: {
        horizontal: 'medium',
        vertical: 'small'
      },
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('animate', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "bar",
      values: VALUES,
      animate: true
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "line",
      values: VALUES,
      animate: true
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "area",
      values: VALUES,
      animate: true
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      values: VALUES,
      animate: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('undefined values', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "bar",
      values: UNDEFINED_VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "line",
      values: UNDEFINED_VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "area",
      values: UNDEFINED_VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      values: UNDEFINED_VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('calcs basic', function () {
    var result = (0, _.calcs)([[1, 2, 2], [2, 2, 2]]);
    expect(result).toMatchSnapshot();
  });
  test('calcs with single value', function () {
    var result = (0, _.calcs)([1]);
    expect(result).toMatchSnapshot();
  });
  test('calcs with negative min', function () {
    var result = (0, _.calcs)([[1, -2, -2], [2, 2, 2]]);
    expect(result).toMatchSnapshot();
  });
  test('calcs large thickness', function () {
    var vals = Array(8).fill([1, 2, 3]);
    var result = (0, _.calcs)(vals);
    expect(result).toMatchSnapshot();
  });
  test('calcs medium thickness', function () {
    var vals = Array(14).fill([1, 2, 3]);
    var result = (0, _.calcs)(vals);
    expect(result).toMatchSnapshot();
  });
  test('calcs small thickness', function () {
    var vals = Array(24).fill([1, 2, 3]);
    var result = (0, _.calcs)(vals);
    expect(result).toMatchSnapshot();
  });
  test('calcs xsmall thickness', function () {
    var vals = Array(64).fill([1, 2, 3]);
    var result = (0, _.calcs)(vals);
    expect(result).toMatchSnapshot();
  });
  test('calcs hair thickness', function () {
    var vals = Array(124).fill([1, 2, 3]);
    var result = (0, _.calcs)(vals);
    expect(result).toMatchSnapshot();
  });
});