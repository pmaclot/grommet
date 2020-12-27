"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _portal = require("../../../utils/portal");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DATE = '2020-07-02T00:00:00-08:00';
var DATES = ['2020-07-02T00:00:00-08:00', '2020-07-07T00:00:00-08:00'];
describe('DateInput', function () {
  beforeEach(_portal.createPortal);
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
              format: "mm/dd/yyyy",
              a11yTitle: "axe test"
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
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      value: DATE
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('format', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      format: "mm/dd/yyyy",
      value: DATE
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('inline', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      inline: true,
      value: DATE
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('format inline', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      format: "mm/dd/yyyy",
      inline: true,
      value: DATE
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('format disabled', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      format: "mm/dd/yyyy",
      disabled: true,
      value: DATE
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('range', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      value: DATES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('range inline', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      value: DATES,
      inline: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('range format', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      format: "mm/dd/yyyy-mm/dd/yyyy",
      value: DATES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('range format inline', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      format: "mm/dd/yyyy-mm/dd/yyyy",
      value: DATES,
      inline: true
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('focus', function () {
    var onFocus = jest.fn();

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      format: "mm/dd/yyyy",
      value: DATE,
      onFocus: onFocus
    }))),
        container = _render2.container,
        getByPlaceholderText = _render2.getByPlaceholderText;

    _react2.fireEvent.focus(getByPlaceholderText('mm/dd/yyyy'));

    expect(container.firstChild).toMatchSnapshot();
    (0, _portal.expectPortal)('item__drop').toMatchSnapshot();
    expect(onFocus).toHaveBeenCalled();

    _react2.fireEvent.keyDown(getByPlaceholderText('mm/dd/yyyy'), {
      key: 'Esc',
      keyCode: 27,
      which: 27
    });

    expect(document.getElementById('item__drop')).toBeNull();
  });
  test('select inline', function () {
    var onChange = jest.fn(function (event) {
      return event.value;
    });

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      value: DATE,
      inline: true,
      onChange: onChange
    }))),
        container = _render3.container,
        getByText = _render3.getByText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('20'));

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveReturnedWith('2020-07-20T08:00:00.000Z');
  });
  test('select format inline', function () {
    var onChange = jest.fn(function (event) {
      return event.value;
    });

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      format: "mm/dd/yyyy",
      value: DATE,
      inline: true,
      onChange: onChange
    }))),
        container = _render4.container,
        getByText = _render4.getByText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('20'));

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveReturnedWith('2020-07-20T08:00:00.000Z');
    expect(container.firstChild).toMatchSnapshot();
  });
  test('select format', function () {
    var onChange = jest.fn(function (event) {
      return event.value;
    });

    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      format: "mm/dd/yyyy",
      value: DATE,
      onChange: onChange
    }))),
        container = _render5.container,
        getByPlaceholderText = _render5.getByPlaceholderText,
        getByText = _render5.getByText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.focus(getByPlaceholderText('mm/dd/yyyy'));

    expect(container.firstChild).toMatchSnapshot();
    (0, _portal.expectPortal)('item__drop').toMatchSnapshot();

    _react2.fireEvent.click(getByText('20'));

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveReturnedWith('2020-07-20T08:00:00.000Z');
    expect(document.getElementById('item__drop')).toBeNull();
  });
  test('type format inline', function () {
    var onChange = jest.fn(function (event) {
      return event.value;
    });

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      format: "mm/dd/yyyy",
      value: DATE,
      inline: true,
      onChange: onChange
    }))),
        container = _render6.container,
        getByPlaceholderText = _render6.getByPlaceholderText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.change(getByPlaceholderText('mm/dd/yyyy'), {
      target: {
        value: '07/21/2020'
      }
    });

    expect(container.firstChild).toMatchSnapshot();
  });
  test('select format inline range', function () {
    var onChange = jest.fn(function (event) {
      return event.value;
    });

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      id: "item",
      name: "item",
      format: "mm/dd/yyyy-mm/dd/yyyy",
      range: true,
      value: DATES,
      inline: true,
      onChange: onChange
    }))),
        container = _render7.container,
        getByText = _render7.getByText;

    expect(container.firstChild).toMatchSnapshot(); // new calendar logic adjust start date by default

    _react2.fireEvent.click(getByText('10'));

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveReturnedWith(['2020-07-10T08:00:00.000Z', '2020-07-10T08:00:00.000Z']);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("dropProps should pass props to Drop \n  when not inline", function () {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      dropProps: {
        plain: true
      },
      format: "mm/dd/yyyy"
    }))),
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test("buttonProps should pass props to Button \n  when not inline and no format", function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DateInput, {
      buttonProps: {
        open: true,
        disabled: true
      }
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});