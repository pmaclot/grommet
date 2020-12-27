"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var customTheme = {
  accordion: {
    heading: {
      level: '3'
    }
  }
};
describe('Accordion', function () {
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Accordion, null, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, null, "Panel body 1")))), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container).toMatchSnapshot();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('no AccordionPanel', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Accordion, null)));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('AccordionPanel', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Accordion, null, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1"
    }, "Panel body 1"), /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 2"
    }, "Panel body 2"), false && /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 2"
    }, "Panel body 2"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('complex title', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Box, {
      background: "dark-1"
    }, /*#__PURE__*/_react["default"].createElement(_.Accordion, null, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: /*#__PURE__*/_react["default"].createElement("div", null, "Panel 1 complex")
    }, "Panel body 1"), undefined, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: /*#__PURE__*/_react["default"].createElement("div", null, "Panel 2 complex")
    }, "Panel body 2")))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('complex header', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Accordion, {
      activeIndex: 1,
      animate: false
    }, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      header: /*#__PURE__*/_react["default"].createElement("div", null, "Panel 1 header")
    }, "Panel body 1"), undefined, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      header: /*#__PURE__*/_react["default"].createElement("div", null, "Panel 2 header")
    }, "Panel body 2"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('change to second Panel', function () {
    jest.useFakeTimers();
    var onActive = jest.fn();

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Accordion, {
      onActive: onActive
    }, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1"
    }, "Panel body 1"), /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 2"
    }, "Panel body 2")))),
        getByText = _render2.getByText,
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Panel 2')); // wait for panel animation to finish


    (0, _react2.act)(function () {
      jest.advanceTimersByTime(500);
    });
    expect(onActive).toBeCalled();
    expect(container.firstChild).toMatchSnapshot();
  });
  test('change to second Panel without onActive', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Accordion, {
      animate: false
    }, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1"
    }, "Panel body 1"), /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 2"
    }, "Panel body 2")))),
        getByText = _render3.getByText,
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Panel 2'));

    expect(container.firstChild).toMatchSnapshot();
  });
  test('multiple panels', function () {
    var onActive = jest.fn();

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Accordion, {
      animate: false,
      multiple: true,
      onActive: onActive
    }, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1"
    }, "Panel body 1"), /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 2"
    }, "Panel body 2")))),
        getByText = _render4.getByText,
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Panel 2'));

    expect(onActive).toBeCalledWith([1]);
    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Panel 1'));

    expect(onActive).toBeCalledWith([1, 0]);
    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Panel 2'));

    expect(onActive).toBeCalledWith([0]);
    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Panel 1'));

    expect(onActive).toBeCalledWith([]);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('custom accordion', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_.Accordion, null, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1"
    }, "Panel body 1"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('accordion border', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        accordion: {
          border: undefined,
          panel: {
            border: {
              side: 'horizontal'
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Accordion, null, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1"
    }, "Panel body 1"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('change active index', function () {
    var onActive = jest.fn();

    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Accordion, {
      animate: false,
      activeIndex: 1,
      onActive: onActive
    }, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1"
    }, "Panel body 1"), /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 2"
    }, "Panel body 2")))),
        getByText = _render5.getByText,
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Panel 1'));

    expect(onActive).toBeCalledWith([0]);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('focus and hover styles', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        accordion: {
          hover: {
            color: 'red'
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Accordion, null, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1",
      onMouseOver: function onMouseOver() {},
      onMouseOut: function onMouseOut() {},
      onFocus: function onFocus() {},
      onBlur: function onBlur() {}
    }, "Panel body 1")))),
        getByText = _render6.getByText,
        container = _render6.container;

    _react2.fireEvent.focus(getByText('Panel 1'));

    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });
  test('backward compatibility of hover.color = undefined', function () {
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        accordion: {
          hover: {
            color: undefined
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Accordion, null, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1",
      onMouseOver: function onMouseOver() {},
      onMouseOut: function onMouseOut() {},
      onFocus: function onFocus() {},
      onBlur: function onBlur() {}
    }, "Panel body 1")))),
        getByText = _render7.getByText,
        container = _render7.container;

    _react2.fireEvent.focus(getByText('Panel 1')); // hover color should be undefined


    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });
  test('theme hover of hover.heading.color', function () {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        accordion: {
          hover: {
            heading: {
              color: 'teal'
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Accordion, null, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1",
      onMouseOver: function onMouseOver() {},
      onMouseOut: function onMouseOut() {},
      onFocus: function onFocus() {},
      onBlur: function onBlur() {}
    }, "Panel body 1")))),
        getByText = _render8.getByText,
        container = _render8.container;

    _react2.fireEvent.focus(getByText('Panel 1')); // hover color should be undefined


    expect(container.firstChild).toMatchSnapshot();
  });
  test('set on hover', function () {
    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Accordion, null, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1",
      onMouseOver: function onMouseOver() {},
      onMouseOut: function onMouseOut() {},
      onFocus: function onFocus() {},
      onBlur: function onBlur() {}
    }, "Panel body 1"), /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 2",
      onMouseOver: function onMouseOver() {},
      onMouseOut: function onMouseOut() {},
      onFocus: function onFocus() {},
      onBlur: function onBlur() {}
    }, "Panel body 2")))),
        getByText = _render9.getByText,
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOver(getByText('Panel 1'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOver(getByText('Panel 2'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOut(getByText('Panel 1'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOut(getByText('Panel 2'));

    expect(container.firstChild).toMatchSnapshot();
  });
  test('wrapped panel', function () {
    var onActive = jest.fn();

    var Panel = function Panel(_ref2) {
      var index = _ref2.index;
      return /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
        label: "Panel " + index
      }, "Panel body ", index);
    };

    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Accordion, {
      animate: false,
      onActive: onActive
    }, [1, 2].map(function (index) {
      return /*#__PURE__*/_react["default"].createElement(Panel, {
        key: index,
        index: index
      });
    })))),
        getByText = _render10.getByText,
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Panel 1'));

    expect(onActive).toBeCalledWith([0]);
    expect(getByText('Panel body 1')).not.toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
  test('blur styles', function () {
    var onBlur = jest.fn();

    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        accordion: {
          hover: {
            heading: {
              color: 'red'
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Accordion, null, /*#__PURE__*/_react["default"].createElement(_.AccordionPanel, {
      label: "Panel 1",
      onMouseOver: function onMouseOver() {},
      onMouseOut: function onMouseOut() {},
      onFocus: function onFocus() {},
      onBlur: onBlur
    }, "Panel body 1")))),
        container = _render11.container,
        getByText = _render11.getByText; // focus first then call blur


    _react2.fireEvent.focus(getByText('Panel 1'));

    _react2.fireEvent.blur(getByText('Panel 1'));

    expect(container.firstChild).toMatchSnapshot();
    expect(onBlur).toHaveBeenCalled();
  });
});