"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

var _grommetIcons = require("grommet-icons");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DATE = '2020-01-15T00:00:00-08:00';
var DATES = ['2020-01-12T00:00:00-08:00', ['2020-01-08T00:00:00-08:00', '2020-01-10T00:00:00-08:00']];
describe('Calendar', function () {
  afterEach(_react2.cleanup);
  test('Calendar should have no accessbility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
              date: DATE,
              animate: false
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
  test('date', function () {
    // need to set the date to avoid snapshot drift over time
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      date: DATE,
      animate: false
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('disabled', function () {
    // need to set the date to avoid snapshot drift over time
    // have disabled date be distinct from selected date
    var disabledDate = new Date(DATE);
    disabledDate.setDate(disabledDate.getDate() + 1);

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      date: DATE,
      disabled: [disabledDate.toDateString()]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('dates', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      dates: DATES,
      animate: false
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('daysOfWeek', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      daysOfWeek: true,
      dates: DATES,
      animate: false
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('size', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      size: "small",
      date: DATE,
      animate: false
    }), /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      size: "medium",
      date: DATE,
      animate: false
    }), /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      size: "large",
      date: DATE,
      animate: false
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('fill', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      fill: true,
      date: DATE,
      animate: false
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('firstDayOfWeek', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      firstDayOfWeek: 0,
      date: DATE,
      animate: false
    }), /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      firstDayOfWeek: 1,
      date: DATE,
      animate: false
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('reference', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      reference: DATE,
      animate: false
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('showAdjacentDays', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      date: DATE,
      animate: false
    }), /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      date: DATE,
      animate: false,
      showAdjacentDays: false
    }), /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      date: DATE,
      animate: false,
      showAdjacentDays: "trim"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('header', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      date: DATE,
      onSelect: function onSelect() {},
      size: "small",
      bounds: ['2020-09-08', '2020-12-13'],
      header: function header(_ref2) {
        var date = _ref2.date,
            locale = _ref2.locale,
            onPreviousMonth = _ref2.onPreviousMonth,
            onNextMonth = _ref2.onNextMonth,
            previousInBound = _ref2.previousInBound,
            nextInBound = _ref2.nextInBound;
        return /*#__PURE__*/_react["default"].createElement(_.Box, {
          direction: "row",
          align: "center",
          justify: "between"
        }, /*#__PURE__*/_react["default"].createElement(_.Button, {
          onClick: previousInBound && onPreviousMonth
        }, /*#__PURE__*/_react["default"].createElement(_.Box, null, /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormPreviousLink, null))), /*#__PURE__*/_react["default"].createElement(_.Text, {
          size: "small"
        }, /*#__PURE__*/_react["default"].createElement("strong", null, date.toLocaleDateString(locale, {
          month: 'long',
          year: 'numeric'
        }))), /*#__PURE__*/_react["default"].createElement(_.Button, {
          onClick: nextInBound && onNextMonth
        }, /*#__PURE__*/_react["default"].createElement(_.Box, null, /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormNextLink, null))));
      },
      animate: false
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('children', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      date: DATE,
      fill: true,
      animate: false
    }, function (_ref3) {
      var day = _ref3.day;
      return /*#__PURE__*/_react["default"].createElement(_.Box, null, day);
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('select date', function () {
    var onSelect = jest.fn();

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      date: DATE,
      onSelect: onSelect,
      animate: false
    }))),
        getByText = _render2.getByText,
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('17'));

    expect(onSelect).toBeCalledWith(expect.stringMatching(/^2020-01-17T/));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('select dates', function () {
    var onSelect = jest.fn();

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      dates: DATES,
      onSelect: onSelect,
      animate: false
    }))),
        getByText = _render3.getByText,
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('17'));

    expect(onSelect).toBeCalledWith(expect.stringMatching(/^2020-01-17T/));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('first day sunday week monday', function () {
    // When the first day of the month is Sunday,
    // and the request of firstDayOfWeek
    // is Monday, we are verifing we are not missing a week, issue 3253.
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      firstDayOfWeek: 1,
      date: "2020-03-01T00:00:00-08:00",
      animate: false
    }))),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('change months', function () {
    jest.useFakeTimers();

    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      date: DATE
    }))),
        container = _render5.container,
        getByLabelText = _render5.getByLabelText; // Change the Calendar from January to December


    _react2.fireEvent.click(getByLabelText('December 2019'));

    (0, _react2.act)(function () {
      jest.runAllTimers();
    });
    expect(container.firstChild).toMatchSnapshot(); // Change the Calendar back to January

    _react2.fireEvent.click(getByLabelText('January 2020'));

    (0, _react2.act)(function () {
      jest.runAllTimers();
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  test('select date with range', function () {
    var onSelect = jest.fn();

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      date: DATE,
      onSelect: onSelect,
      range: true,
      animate: false
    }))),
        getByText = _render6.getByText; // expect to be selecting end date of range, because date serves
    // as start. since selected date is < date we should set it as start


    _react2.fireEvent.click(getByText('11'));

    expect(onSelect).toBeCalledWith(expect.stringMatching(/2020-01-11T/));

    _react2.fireEvent.click(getByText('20'));

    expect(onSelect).toBeCalledWith([[expect.stringMatching(/^2020-01-11T/), expect.stringMatching(/^2020-01-20T/)]]);
  });
  test('select date with range no date set', function () {
    var onSelect = jest.fn();

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      reference: "2020-07-01T00:00:00-08:00",
      onSelect: onSelect,
      range: true,
      animate: false
    }))),
        getByText = _render7.getByText;

    _react2.fireEvent.click(getByText('17'));

    _react2.fireEvent.click(getByText('20'));

    expect(onSelect).toBeCalledWith([[expect.stringMatching(/^2020-07-17T/), expect.stringMatching(/^2020-07-20T/)]]);
  });
  test('select date greater and less than', function () {
    var onSelect = jest.fn();

    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      dates: [['2020-01-01T00:00:00-08:00', '2020-01-05T00:00:00-08:00']],
      onSelect: onSelect,
      range: true,
      animate: false
    }))),
        getByLabelText = _render8.getByLabelText; // select date greater than January 1st


    _react2.fireEvent.click(getByLabelText('Fri Jan 03 2020'));

    expect(onSelect).toBeCalledWith([[expect.stringMatching(/^2020-01-03T/), expect.stringMatching(/^2020-01-05T/)]]); // select date less than January 3rd
    // activeDate is end, since this is before the start
    // date we should update the date

    _react2.fireEvent.click(getByLabelText('Wed Jan 01 2020'));

    expect(onSelect).toBeCalledWith(expect.stringMatching(/2020-01-01T/));
  });
  test('select date with same start date', function () {
    var onSelect = jest.fn();

    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      dates: [['2020-01-01T00:00:00-08:00', '2020-01-03T00:00:00-08:00']],
      onSelect: onSelect,
      range: true,
      animate: false
    }))),
        getByLabelText = _render9.getByLabelText; // selecting same starting day


    _react2.fireEvent.click(getByLabelText('Wed Jan 01 2020'));

    expect(onSelect).toBeCalledWith(expect.stringMatching(/^2020-01-03T/));
  });
  test('select date with same date twice', function () {
    var onSelect = jest.fn();

    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      reference: "2020-01-01T00:00:00-08:00",
      onSelect: onSelect,
      range: true,
      animate: false
    }))),
        getByLabelText = _render10.getByLabelText;

    _react2.fireEvent.click(getByLabelText('Fri Jan 03 2020'));

    expect(onSelect).toBeCalledWith(expect.stringMatching(/^2020-01-03T/));

    _react2.fireEvent.click(getByLabelText('Fri Jan 03 2020'));

    expect(onSelect).toBeCalledWith(undefined);
  });
  test('select date with same end date', function () {
    var onSelect = jest.fn();

    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      dates: [['2020-01-01T00:00:00-08:00', '2020-01-03T00:00:00-08:00']],
      onSelect: onSelect,
      range: true,
      animate: false
    }))),
        getByLabelText = _render11.getByLabelText; // selecting same ending day


    _react2.fireEvent.click(getByLabelText('Fri Jan 03 2020'));

    expect(onSelect).toBeCalledWith(expect.stringMatching(/^2020-01-01T/));
  });
  test('range as array', function () {
    var onSelect = jest.fn();

    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      dates: [['2020-01-01T00:00:00-08:00', '2020-01-05T00:00:00-08:00']],
      onSelect: onSelect,
      range: "array",
      animate: false
    }))),
        getByLabelText = _render12.getByLabelText; // select date greater than January 1st
    // activeDate by default is start


    _react2.fireEvent.click(getByLabelText('Fri Jan 03 2020'));

    expect(onSelect).toBeCalledWith([[expect.stringMatching(/^2020-01-03T/), expect.stringMatching(/^2020-01-05T/)]]); // select date less than January 3rd
    // activeDate is end, since this is before the start
    // date we should update the date

    _react2.fireEvent.click(getByLabelText('Wed Jan 01 2020'));

    expect(onSelect).toBeCalledWith([[expect.stringMatching(/^2020-01-01T/), undefined]]); // should select end date again

    _react2.fireEvent.click(getByLabelText('Fri Jan 03 2020'));

    expect(onSelect).toBeCalledWith([[expect.stringMatching(/^2020-01-01T/), expect.stringMatching(/^2020-01-03T/)]]); // should select start date, if great than end date, clear end date

    _react2.fireEvent.click(getByLabelText('Sun Jan 05 2020'));

    expect(onSelect).toBeCalledWith([[expect.stringMatching(/^2020-01-05T/), undefined]]);
  });
  test('activeDate start', function () {
    var onSelect = jest.fn();

    var _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      activeDate: "start",
      dates: [['2020-01-01T00:00:00-08:00', '2020-01-05T00:00:00-08:00']],
      onSelect: onSelect,
      range: "array",
      animate: false
    }))),
        getByLabelText = _render13.getByLabelText;

    _react2.fireEvent.click(getByLabelText('Fri Jan 03 2020'));

    expect(onSelect).toBeCalledWith([[expect.stringMatching(/^2020-01-03T/), expect.stringMatching(/^2020-01-05T/)]]);
  });
  test('activeDate end', function () {
    var onSelect = jest.fn();

    var _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
      activeDate: "end",
      dates: [['2020-01-01T00:00:00-08:00', '2020-01-05T00:00:00-08:00']],
      onSelect: onSelect,
      range: "array",
      animate: false
    }))),
        getByLabelText = _render14.getByLabelText;

    _react2.fireEvent.click(getByLabelText('Fri Jan 03 2020'));

    expect(onSelect).toBeCalledWith([[expect.stringMatching(/^2020-01-01T/), expect.stringMatching(/^2020-01-03T/)]]);
  });
});
describe('Calendar Keyboard events', function () {
  var onSelect;
  var App;
  beforeEach(function () {
    onSelect = jest.fn();

    App = function App() {
      return /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Calendar, {
        bounds: ['2020-01-01', '2020-01-31'],
        date: DATE,
        onSelect: onSelect,
        animate: false
      }));
    };
  });
  afterEach(_react2.cleanup);
  test('onEnter', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _render15, getByText;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)), getByText = _render15.getByText;

            _react2.fireEvent.mouseOver(getByText('15'));

            _react2.fireEvent.click(getByText('15'));

            _react2.fireEvent.keyDown(getByText('15'), {
              key: 'Enter',
              keyCode: 13,
              which: 13
            });

            _react2.fireEvent.mouseOut(getByText('15')); // Jan 15th is set to active


            expect(onSelect).toBeCalledWith(expect.stringMatching(/^2020-01-15T/));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('onKeyUp', function () {
    var _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        getByText = _render16.getByText;

    _react2.fireEvent.mouseOver(getByText('15'));

    _react2.fireEvent.click(getByText('15'));

    _react2.fireEvent.keyDown(getByText('15'), {
      key: 'ArrowUp',
      keyCode: 38,
      which: 38
    }); // press enter to change date to active


    _react2.fireEvent.keyDown(getByText('15'), {
      key: 'Enter',
      keyCode: 13,
      which: 13
    }); // Jan 8th is set to active


    expect(onSelect).toBeCalledWith(expect.stringMatching(/^2020-01-08T/));
  });
  test('onKeyDown', function () {
    var _render17 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        getByText = _render17.getByText;

    _react2.fireEvent.mouseOver(getByText('15'));

    _react2.fireEvent.click(getByText('15'));

    _react2.fireEvent.keyDown(getByText('15'), {
      key: 'ArrowDown',
      keyCode: 40,
      which: 40
    }); // press enter to change date to active


    _react2.fireEvent.keyDown(getByText('15'), {
      key: 'Enter',
      keyCode: 13,
      which: 13
    }); // Jan 22th is set to active


    expect(onSelect).toBeCalledWith(expect.stringMatching(/^2020-01-22T/));
  });
  test('onKeyLeft', function () {
    var _render18 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        getByText = _render18.getByText;

    _react2.fireEvent.mouseOver(getByText('15'));

    _react2.fireEvent.click(getByText('15'));

    _react2.fireEvent.keyDown(getByText('15'), {
      key: 'ArrowLeft',
      keyCode: 37,
      which: 37
    }); // press enter to change date to active


    _react2.fireEvent.keyDown(getByText('15'), {
      key: 'Enter',
      keyCode: 13,
      which: 13
    }); // Jan 14th is set to active


    expect(onSelect).toBeCalledWith(expect.stringMatching(/^2020-01-14T/));
  });
  test('onKeyRight', function () {
    var _render19 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        getByText = _render19.getByText;

    _react2.fireEvent.mouseOver(getByText('15'));

    _react2.fireEvent.click(getByText('15'));

    _react2.fireEvent.keyDown(getByText('15'), {
      key: 'ArrowRight',
      keyCode: 39,
      which: 39
    }); // press enter to change date to active


    _react2.fireEvent.keyDown(getByText('15'), {
      key: 'Enter',
      keyCode: 13,
      which: 13
    }); // Jan 16th is set to active


    expect(onSelect).toBeCalledWith(expect.stringMatching(/^2020-01-16T/));
  });
});