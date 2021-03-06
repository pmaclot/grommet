"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Heading renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Heading, null)));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Heading accepts ref', function () {
  var ref = /*#__PURE__*/_react["default"].createRef();

  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    ref: ref
  })), {
    createNodeMock: function createNodeMock(el) {
      return el;
    }
  });

  expect(ref.current).not.toBeNull();
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Heading level renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 1
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 2
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 3
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 4
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: "1"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: "2"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: "3"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: "4"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Heading size renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 1,
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 1,
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 1,
    size: "large"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 1,
    size: "xlarge"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 2,
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 2,
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 2,
    size: "large"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 2,
    size: "xlarge"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 3,
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 3,
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 3,
    size: "large"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 3,
    size: "xlarge"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 4,
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 4,
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 4,
    size: "large"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 4,
    size: "xlarge"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 1,
    size: "77px"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Heading textAlign renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    textAlign: "start"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    textAlign: "center"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    textAlign: "end"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Heading margin renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    margin: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    margin: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    margin: "large"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    margin: "none"
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    margin: {
      bottom: 'small'
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    margin: {
      top: 'small'
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    margin: {
      bottom: 'none'
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    margin: {
      top: 'none'
    }
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Heading color renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    color: "brand"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
var LONG = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
test('Heading truncate renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    truncate: false
  }, LONG), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    truncate: true
  }, LONG)));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('responsive renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    responsive: true
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    responsive: false
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Theme based font family renders', function () {
  var customTheme = {
    heading: {
      font: {
        family: 'Fira Sans'
      },
      level: {
        1: {
          font: {
            family: 'Arial'
          }
        },
        2: {
          font: {
            family: 'Roboto'
          }
        },
        3: {
          font: {
            family: 'Ubuntu'
          }
        }
      }
    }
  };

  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
    theme: customTheme
  }, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 1
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 2
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 3
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 4
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Theme based font weight renders', function () {
  var customTheme = {
    heading: {
      weight: 600,
      level: {
        1: {
          font: {
            weight: '700'
          }
        },
        2: {
          font: {
            weight: '400'
          }
        },
        3: {
          font: {
            weight: '200'
          }
        }
      }
    }
  };

  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
    theme: customTheme
  }, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 1
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 2
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 3
  }), /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 4
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Throws a warning when heading.level is undefined in the theme.', function () {
  global.console = {
    warn: jest.fn()
  };
  var customTheme = {
    heading: {
      level: {
        '6': undefined
      }
    }
  };

  _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
    theme: customTheme
  }, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    level: 6
  })));

  var consoleMsg = 'Heading level 6 is not defined in your theme.';
  expect(global.console.warn).toHaveBeenCalledWith(consoleMsg);
});
test('Heading fill renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Heading, {
    fill: true
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});