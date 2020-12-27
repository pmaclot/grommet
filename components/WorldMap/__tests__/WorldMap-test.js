"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('WorldMap', function () {
  afterEach(_react2.cleanup);
  test('default', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.WorldMap, null)));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      color: "brand"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('continents', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      continents: [{
        name: 'Africa',
        color: 'accent-1',
        onClick: function onClick() {}
      }]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('places', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      places: [{
        name: 'Sydney',
        location: [-33.8830555556, 151.216666667],
        color: 'accent-1',
        onClick: function onClick() {}
      }]
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('onSelectPlace and events of places', function () {
    var onClick = jest.fn();
    var onHover = jest.fn();

    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      places: [{
        'data-testid': 'Sydney',
        name: 'Sydney',
        location: [-33.8830555556, 151.216666667],
        onClick: onClick,
        onHover: onHover
      }],
      "data-testid": "worldmap",
      onSelectPlace: function onSelectPlace() {}
    }))),
        container = _render.container,
        getByTestId = _render.getByTestId;

    _react2.fireEvent.mouseOver(getByTestId('Sydney'));

    expect(container.firstChild).toMatchSnapshot();
    expect(onHover).toHaveBeenCalledTimes(1);

    _react2.fireEvent.mouseOut(getByTestId('Sydney'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByTestId('Sydney'));

    expect(onClick).toHaveBeenCalledTimes(1);

    _react2.fireEvent.focus(getByTestId('Sydney'));

    _react2.fireEvent.blur(getByTestId('Sydney'));

    expect(container.firstChild).toMatchSnapshot();
  });
  test('events on continents', function () {
    var onClick = jest.fn();
    var onHover = jest.fn();

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      continents: [{
        'data-testid': 'Africa',
        name: 'Africa',
        onClick: onClick,
        onHover: onHover
      }]
    }))),
        container = _render2.container,
        getByTestId = _render2.getByTestId;

    _react2.fireEvent.mouseOver(getByTestId('Africa'));

    expect(container.firstChild).toMatchSnapshot();
    expect(onHover).toHaveBeenCalledTimes(1);

    _react2.fireEvent.mouseOut(getByTestId('Africa'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByTestId('Africa'));

    expect(onClick).toHaveBeenCalledTimes(1);

    _react2.fireEvent.focus(getByTestId('Africa'));

    _react2.fireEvent.blur(getByTestId('Africa'));

    expect(container.firstChild).toMatchSnapshot();
  });
  test('fill', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      fill: true
    }), /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      fill: false
    }), /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      fill: "horizontal"
    }), /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      fill: "vertical"
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('onClick handlers', function () {
    var onPlaceClick = jest.fn();
    var onContinentClick = jest.fn();

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      places: [{
        name: 'Sydney',
        location: [-33.8830555556, 151.216666667],
        color: 'accent-1',
        onClick: onPlaceClick
      }],
      continents: [{
        name: 'Africa',
        color: 'accent-1',
        onClick: onContinentClick
      }]
    }))),
        getByLabelText = _render3.getByLabelText;

    _react2.fireEvent.click(getByLabelText('Sydney'));

    expect(onPlaceClick).toHaveBeenCalledTimes(1);
    expect(onPlaceClick).toHaveBeenCalledWith('Sydney');

    _react2.fireEvent.click(getByLabelText('Africa'));

    expect(onContinentClick).toHaveBeenCalledTimes(1);
    expect(onContinentClick).toHaveBeenCalledWith('Africa');
  });
  test('onHover handlers', function () {
    var onPlaceHover = jest.fn();
    var onContinentHover = jest.fn();

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.WorldMap, {
      places: [{
        name: 'Sydney',
        location: [-33.8830555556, 151.216666667],
        color: 'accent-1',
        onHover: onPlaceHover
      }],
      continents: [{
        name: 'Africa',
        color: 'accent-1',
        onHover: onContinentHover
      }]
    }))),
        getByLabelText = _render4.getByLabelText;

    _react2.fireEvent.mouseEnter(getByLabelText('Sydney'));

    expect(onPlaceHover).toHaveBeenCalledTimes(1);
    expect(onPlaceHover).toHaveBeenCalledWith(true);
    expect(onPlaceHover).not.toHaveBeenCalledWith(false);

    _react2.fireEvent.mouseLeave(getByLabelText('Sydney'));

    expect(onPlaceHover).toHaveBeenCalledTimes(2);
    expect(onPlaceHover).toHaveBeenCalledWith(false);

    _react2.fireEvent.mouseEnter(getByLabelText('Africa'));

    expect(onContinentHover).toHaveBeenCalledTimes(1);
    expect(onContinentHover).toHaveBeenCalledWith(true);
    expect(onContinentHover).not.toHaveBeenCalledWith(false);

    _react2.fireEvent.mouseLeave(getByLabelText('Africa'));

    expect(onContinentHover).toHaveBeenCalledTimes(2);
    expect(onContinentHover).toHaveBeenCalledWith(false);
  });
});