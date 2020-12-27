"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var data = [{
  a: 1,
  b: 'one',
  c: 111111,
  d: '2020-06-24'
}, {
  a: 2,
  b: 'two',
  c: 222222,
  d: '2020-06-23'
}];
describe('DataChart', function () {
  test('default', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataChart, {
      data: data,
      series: "a"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('gap', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, ['small', 'medium', 'large'].map(function (gap) {
      return /*#__PURE__*/_react["default"].createElement(_.DataChart, {
        key: gap,
        data: data,
        series: "a",
        gap: gap
      });
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('pad', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, ['small', 'medium', 'large'].map(function (pad) {
      return /*#__PURE__*/_react["default"].createElement(_.DataChart, {
        key: pad,
        data: data,
        series: "a",
        pad: pad
      });
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('size', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, ['fill', {
      width: 'fill'
    }, {
      width: 'auto'
    }].map(function (size, i) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react["default"].createElement(_.DataChart, {
          key: i,
          data: data,
          series: "a",
          size: size
        })
      );
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('axis', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, [true, false, {
      x: {
        property: 'd'
      }
    }, {
      y: {
        property: 'a'
      }
    }, {
      x: {
        property: 'd',
        granularity: 'fine'
      }
    }, {
      y: {
        property: 'a',
        granularity: 'fine'
      }
    }].map(function (axis, i) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react["default"].createElement(_.DataChart, {
          key: i,
          data: data,
          series: "a",
          axis: axis
        })
      );
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('dates', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    var dateData = [];

    for (var i = 0; i < 4; i += 1) {
      var digits = (i % 12 + 1).toString().padStart(2, 0);
      dateData.push({
        second: "2020-05-15T08:04:" + digits,
        minute: "2020-05-15T08:" + digits + ":00",
        hour: "2020-05-15T" + digits + ":00:00",
        day: "2020-05-" + digits + "T08:00:00",
        month: "2020-" + digits + "-15",
        year: "20" + digits + "-01-15",
        percent: Math.abs(i * 10),
        amount: i * 111111
      });
    }

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, ['second', 'minute', 'hour', 'day', 'month', 'year'].map(function (key) {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
        key: key
      }, /*#__PURE__*/_react["default"].createElement(_.DataChart, {
        data: dateData,
        series: [{
          property: key
        }, 'amount'],
        axis: true,
        guide: true
      }));
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('guide', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, [true, false, {
      x: {
        granularity: 'fine'
      }
    }, {
      y: {
        granularity: 'fine'
      }
    }].map(function (guide, i) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react["default"].createElement(_.DataChart, {
          key: i,
          data: data,
          series: "a",
          guide: guide
        })
      );
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('legend', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, [true, false].map(function (legend, i) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react["default"].createElement(_.DataChart, {
          key: i,
          data: data,
          series: "a",
          legend: legend
        })
      );
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('detail', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, [true, false].map(function (detail, i) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react["default"].createElement(_.DataChart, {
          key: i,
          data: data,
          series: "a",
          detail: detail
        })
      );
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('axis x granularity', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(function (count) {
      return /*#__PURE__*/_react["default"].createElement(_.DataChart, {
        key: count,
        data: Array.from({
          length: count
        }, function (x, i) {
          return {
            a: i
          };
        }),
        series: "a",
        axis: {
          x: {
            granularity: 'medium'
          }
        }
      });
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('type', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, ['bar', 'line', 'area'].map(function (type) {
      return /*#__PURE__*/_react["default"].createElement(_.DataChart, {
        key: type,
        data: data,
        series: "a",
        chart: [{
          property: 'a',
          type: type
        }]
      });
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('bars', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataChart, {
      data: data,
      series: ['a', 'c'],
      chart: [{
        property: ['a', 'c'],
        type: 'bars'
      }]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('bars colors', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataChart, {
      data: data,
      series: ['a', 'c'],
      chart: [{
        property: [{
          property: 'a',
          color: 'graph-1'
        }, {
          property: 'c',
          color: 'graph-3'
        }],
        type: 'bars'
      }]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
  test('bars invalid', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataChart, {
      data: data,
      series: ['a'],
      chart: [{
        property: ['a', 'c', ''],
        type: 'bars'
      }]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
});