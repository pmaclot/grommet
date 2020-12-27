"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _portal = require("../../../utils/portal");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('DropButton', function () {
  beforeEach(_portal.createPortal);
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.DropButton, {
              a11yTitle: "test",
              dropContent: /*#__PURE__*/_react["default"].createElement("div", {
                id: "drop-contents"
              }, "drop contents")
            })), container = _render.container;
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
  test('closed', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.DropButton, {
      label: "Dropper",
      dropContent: /*#__PURE__*/_react["default"].createElement("div", {
        id: "drop-contents"
      }, "drop contents")
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('opened', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.DropButton, {
      label: "Dropper",
      open: true,
      dropContent: /*#__PURE__*/_react["default"].createElement("div", {
        id: "drop-contents"
      }, "drop contents")
    }));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('open and close', function () {
    window.scrollTo = jest.fn();
    var onClose = jest.fn(function (event) {
      return event.persist();
    });

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.DropButton, {
      label: "Dropper",
      onClose: onClose,
      dropContent: /*#__PURE__*/_react["default"].createElement("div", {
        id: "drop-contents"
      }, "Drop Contents")
    })),
        getByText = _render2.getByText,
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('drop-contents')).toBeNull();

    _react2.fireEvent.click(getByText('Dropper'));

    (0, _portal.expectPortal)('drop-contents').toMatchSnapshot();
    expect(document.getElementById('drop-contents')).not.toBeNull();

    _react2.fireEvent.click(getByText('Dropper'));

    expect(document.getElementById('drop-contents')).toBeNull();
    expect(window.scrollTo).toBeCalled();
    expect(onClose).toBeCalledWith(expect.objectContaining({
      type: 'click'
    }));
  });
  test('close by clicking outside', function (done) {
    var onClose = jest.fn();
    var onOpen = jest.fn(function (event) {
      return event.persist();
    });

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.DropButton, {
      label: "Dropper",
      onClose: onClose,
      onOpen: onOpen,
      dropContent: /*#__PURE__*/_react["default"].createElement("div", {
        id: "drop-contents"
      }, "Drop Contents")
    })),
        getByText = _render3.getByText,
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('drop-contents')).toBeNull();

    _react2.fireEvent.click(getByText('Dropper'));

    (0, _portal.expectPortal)('drop-contents').toMatchSnapshot();
    expect(onOpen).toBeCalledWith(expect.objectContaining({
      type: 'click'
    }));
    expect(document.getElementById('drop-contents')).not.toBeNull();
    (0, _react2.fireEvent)(document, new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true
    }));
    setTimeout(function () {
      expect(document.getElementById('drop-contents')).toBeNull();
      done();
    }, 50);
    expect(onClose).toBeCalledWith(expect.objectContaining({
      type: 'mousedown'
    }));
  });
  test('disabled', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.DropButton, {
      disabled: true,
      label: "Dropper",
      dropContent: /*#__PURE__*/_react["default"].createElement("div", {
        id: "drop-contents"
      }, "Drop Contents")
    })),
        getByText = _render4.getByText,
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('drop-contents')).toBeNull();

    _react2.fireEvent.click(getByText('Dropper'));

    expect(document.getElementById('drop-contents')).toBeNull();
  });
  test('opened ref', function () {
    var ref = /*#__PURE__*/_react["default"].createRef();

    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.DropButton, {
      ref: ref,
      open: true,
      label: "Dropper",
      dropContent: /*#__PURE__*/_react["default"].createElement("div", {
        id: "drop-contents"
      }, "Drop Contents")
    })),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
    (0, _portal.expectPortal)('drop-contents').toMatchSnapshot();
  });
  test('ref function', function () {
    var ref = jest.fn();

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.DropButton, {
      ref: ref,
      open: true,
      label: "Dropper",
      dropContent: /*#__PURE__*/_react["default"].createElement("div", {
        id: "drop-contents"
      }, "Drop Contents")
    })),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(ref).toBeCalled();
    (0, _portal.expectPortal)('drop-contents').toMatchSnapshot();
  });
});