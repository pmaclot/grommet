"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('List', function () {
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var onClickItem, _render, container, getByText, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            onClickItem = jest.fn();
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
              data: [{
                a: 'alpha'
              }, {
                a: 'beta'
              }],
              onClickItem: onClickItem
            }))), container = _render.container, getByText = _render.getByText;

            _react2.fireEvent.click(getByText('alpha'));

            _context.next = 5;
            return (0, _jestAxe.axe)(container);

          case 5:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('empty', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, null))),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('data strings', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two']
    }))),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('data objects', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }]
    }))),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('onClickItem', function () {
    var onClickItem = jest.fn();

    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: [{
        a: 'alpha'
      }, {
        a: 'beta'
      }],
      onClickItem: onClickItem
    }))),
        container = _render5.container,
        getByText = _render5.getByText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('beta'));

    expect(onClickItem).toBeCalledWith(expect.objectContaining({
      item: {
        a: 'beta'
      }
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('background string', function () {
    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two'],
      background: "accent-1"
    }))),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('background array', function () {
    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two', 'three', 'four'],
      background: ['accent-1', 'accent-2']
    }))),
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('border boolean true', function () {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two'],
      border: true
    }))),
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('border boolean false', function () {
    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two'],
      border: false
    }))),
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('border side', function () {
    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two'],
      border: "horizontal"
    }))),
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('border object', function () {
    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two'],
      border: {
        color: 'accent-1',
        side: 'horizontal',
        size: 'large'
      }
    }))),
        container = _render11.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('children render', function () {
    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two']
    }, function (item, index) {
      return item + " - " + index;
    }))),
        container = _render12.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('itemProps', function () {
    var _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two'],
      itemProps: {
        1: {
          background: 'accent-1',
          border: {
            side: 'horizontal',
            size: 'small'
          },
          pad: 'large'
        }
      }
    }))),
        container = _render13.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('margin string', function () {
    var _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two'],
      margin: "large"
    }))),
        container = _render14.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('margin object', function () {
    var _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two'],
      margin: {
        horizontal: 'large'
      }
    }))),
        container = _render15.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('pad string', function () {
    var _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two'],
      pad: "large"
    }))),
        container = _render16.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('pad object', function () {
    var _render17 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: ['one', 'two'],
      pad: {
        horizontal: 'large'
      }
    }))),
        container = _render17.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('primaryKey', function () {
    var _render18 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      primaryKey: "a"
    }))),
        container = _render18.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('secondaryKey', function () {
    var _render19 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      primaryKey: "a",
      secondaryKey: "b"
    }))),
        container = _render19.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});
describe('List events', function () {
  var onClickItem;
  var App;
  beforeEach(function () {
    onClickItem = jest.fn();

    App = function App() {
      return /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.List, {
        data: [{
          a: 'alpha'
        }, {
          a: 'beta'
        }],
        onClickItem: onClickItem
      }));
    };
  });
  afterEach(_react2.cleanup);
  test('Enter key', function () {
    var _render20 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        container = _render20.container,
        getByText = _render20.getByText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('beta'));

    _react2.fireEvent.mouseOver(getByText('beta'));

    _react2.fireEvent.keyDown(getByText('beta'), {
      key: 'Enter',
      keyCode: 13,
      which: 13
    }); // Reported bug: onEnter calls onClickItem twice instead of once.
    // Issue #4173. Once fixed it should be
    // `expect(onClickItem).toHaveBeenCalledTimes(2);`


    expect(onClickItem).toHaveBeenCalledTimes(3); // Both focus and active should be placed on 'beta'

    expect(container.firstChild).toMatchSnapshot();
  });
  test('ArrowUp key', function () {
    var _render21 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        container = _render21.container,
        getByText = _render21.getByText;

    _react2.fireEvent.click(getByText('beta'));

    _react2.fireEvent.mouseOver(getByText('beta'));

    _react2.fireEvent.keyDown(getByText('beta'), {
      key: 'ArrowUp',
      keyCode: 38,
      which: 38
    });

    expect(onClickItem).toHaveBeenCalledTimes(1); // Focus on beta while `active` is on alpha

    expect(container.firstChild).toMatchSnapshot();
  });
  test('ArrowDown key', function () {
    var _render22 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        container = _render22.container,
        getByText = _render22.getByText;

    _react2.fireEvent.click(getByText('alpha'));

    _react2.fireEvent.mouseOver(getByText('alpha'));

    _react2.fireEvent.keyDown(getByText('alpha'), {
      key: 'ArrowDown',
      keyCode: 40,
      which: 40
    });

    expect(onClickItem).toHaveBeenCalledTimes(1); // Focus on alpha while `active` is on beta

    expect(container.firstChild).toMatchSnapshot();
  });
  test('ArrowDown key on last element', function () {
    var _render23 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        container = _render23.container,
        getByText = _render23.getByText;

    _react2.fireEvent.click(getByText('beta'));

    _react2.fireEvent.mouseOver(getByText('beta'));

    _react2.fireEvent.keyDown(getByText('beta'), {
      key: 'ArrowDown',
      keyCode: 40,
      which: 40
    });

    expect(onClickItem).toHaveBeenCalledTimes(1); // Both focus and active should be placed on 'beta'

    expect(container.firstChild).toMatchSnapshot();
  });
  test('focus and blur', function () {
    var _render24 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        container = _render24.container,
        getByText = _render24.getByText;

    _react2.fireEvent.focus(getByText('beta')); // Both focus and active should be placed on 'beta'


    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.blur(getByText('beta')); // Focus on beta while `active` is not on beta


    expect(container.firstChild).toMatchSnapshot();
    expect(onClickItem).toBeCalledTimes(0);
  });
  test('mouse events', function () {
    var _render25 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        container = _render25.container,
        getByText = _render25.getByText;

    _react2.fireEvent.mouseOver(getByText('beta')); // Both focus and active should be placed on 'beta'


    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOut(getByText('beta')); // Focus on beta while `active` is not on beta


    expect(container.firstChild).toMatchSnapshot();
    expect(onClickItem).toBeCalledTimes(0);
  });
});