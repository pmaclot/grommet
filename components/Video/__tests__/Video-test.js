"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('Video', function () {
  var App;
  beforeEach(function () {
    App = function App(_ref) {
      var props = _extends({}, _ref);

      return /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Video, props, /*#__PURE__*/_react["default"].createElement("source", {
        key: "source",
        src: "small.mp4",
        type: "video/mp4"
      }), /*#__PURE__*/_react["default"].createElement("track", {
        key: "track"
      })));
    };
  });
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)), container = _render.container;
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
  test('renders with theme', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: {
        video: {
          controls: {
            background: '#000000'
          },
          scrubber: {
            track: {
              color: '#444444'
            }
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Video, null, /*#__PURE__*/_react["default"].createElement("source", {
      key: "source",
      src: "small.mp4",
      type: "video/mp4"
    }), /*#__PURE__*/_react["default"].createElement("track", {
      key: "track"
    })))),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('renders', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('autoPlay renders', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      autoPlay: true
    })),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('loop renders', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      loop: true
    })),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('mute renders', function () {
    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      mute: true
    })),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('controls below renders', function () {
    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      controls: "below"
    })),
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('controls over renders', function () {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      controls: "over"
    })),
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('fit  cover renders', function () {
    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      fit: "cover"
    })),
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('fit contain renders', function () {
    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      fit: "contain"
    })),
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('Play and Pause event handlers', function () {
    var onPlay = jest.fn();
    var onPause = jest.fn();

    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      playing: false,
      onPlay: onPlay,
      onPause: onPause
    })),
        container = _render11.container;

    var videoContainer = document.querySelector('video');

    _react2.fireEvent.play(videoContainer);

    expect(container.firstChild).toMatchSnapshot();
    expect(onPlay).toHaveBeenCalled();

    _react2.fireEvent.pause(videoContainer);

    expect(container.firstChild).toMatchSnapshot();
    expect(onPause).toHaveBeenCalled();
  });
  test('mouse events handlers of controls', function () {
    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        container = _render12.container;

    var videoContainer = document.querySelector('video');

    _react2.fireEvent.mouseOver(videoContainer);

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseMove(videoContainer);

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.touchStart(videoContainer);

    expect(container.firstChild).toMatchSnapshot();
  });
  test('End event handler', function () {
    var onEnd = jest.fn();

    var _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      onEnded: onEnd
    })),
        container = _render13.container; // Need to fire play event to get video playing before we fire ended event.


    var videoContainer = document.querySelector('video');

    _react2.fireEvent.play(videoContainer);

    _react2.fireEvent.ended(videoContainer);

    expect(container.firstChild).toMatchSnapshot();
    expect(onEnd).toHaveBeenCalled();
  });
  test('Configure Menu Button', function () {
    window.scrollTo = jest.fn();

    var _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        container = _render14.container,
        getByLabelText = _render14.getByLabelText;

    _react2.fireEvent.click(getByLabelText('open menu'));

    expect(container.firstChild).toMatchSnapshot();
  });
  test('scrubber', function () {
    window.scrollTo = jest.fn();

    var _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        container = _render15.container,
        getByLabelText = _render15.getByLabelText;

    _react2.fireEvent.click(getByLabelText('scrubber')); // targeting scrub function


    _react2.fireEvent.mouseMove(getByLabelText('scrubber'));

    expect(container.firstChild).toMatchSnapshot(); // targeting setScrubTime

    _react2.fireEvent.mouseLeave(getByLabelText('scrubber'));

    expect(container.firstChild).toMatchSnapshot();
  });
  test('fullscreen button', function () {
    window.scrollTo = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    var _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        getByLabelText = _render16.getByLabelText;

    _react2.fireEvent.click(getByLabelText('open menu'));

    _react2.fireEvent.click(getByLabelText('full screen'));
    /* expect warn to have been called because jest doesn't test in any browser,
    will always have warning here due to the jest browser not supporting
     fullscreen */


    expect(warnSpy).toHaveBeenCalledWith("This browser doesn't support fullscreen.");
    warnSpy.mockReset();
    warnSpy.mockRestore();
    window.scrollTo.mockRestore();
  });
  test('play button', function () {
    var playStub = jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(function () {});

    var _render17 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, null)),
        getByLabelText = _render17.getByLabelText;

    _react2.fireEvent.click(getByLabelText('play'));

    expect(playStub).toHaveBeenCalled();
    playStub.mockRestore();
  });
  test('volume controls', function () {
    var volMock = jest.fn();
    window.scrollTo = jest.fn();

    var _render18 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      onVolumeChange: volMock
    })),
        getByLabelText = _render18.getByLabelText;

    _react2.fireEvent.click(getByLabelText('open menu'));

    _react2.fireEvent.click(getByLabelText('volume down'));

    expect(volMock).toHaveBeenCalled();

    _react2.fireEvent.click(getByLabelText('volume up'));

    expect(volMock).toHaveBeenCalledTimes(2);
    window.scrollTo.mockRestore();
  });
  test('timeUpdate event handler', function () {
    var onTimeUpdate = jest.fn();

    var _render19 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      onTimeUpdate: onTimeUpdate
    })),
        container = _render19.container;

    var videoContainer = document.querySelector('video');

    _react2.fireEvent.timeUpdate(videoContainer);

    expect(container.firstChild).toMatchSnapshot();
    expect(onTimeUpdate).toHaveBeenCalled();
  });
  test('duration event handler', function () {
    var onDurationChange = jest.fn();

    var _render20 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(App, {
      onDurationChange: onDurationChange
    })),
        container = _render20.container;

    var videoContainer = document.querySelector('video');

    _react2.fireEvent.durationChange(videoContainer);

    expect(container.firstChild).toMatchSnapshot();
    expect(onDurationChange).toHaveBeenCalled();
  });
});