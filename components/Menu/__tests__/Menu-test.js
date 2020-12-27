"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-axe/extend-expect");

require("regenerator-runtime/runtime");

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

var _dom = require("@testing-library/dom");

require("@testing-library/jest-dom/extend-expect");

var _portal = require("../../../utils/portal");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var customTheme = {
  menu: {
    icons: {
      color: '#F08080'
    }
  }
};
var defaultButtonTheme = {
  button: {
    "default": {
      color: 'text-strong',
      border: undefined,
      padding: {
        horizontal: '12px',
        vertical: '6px'
      }
    }
  }
};
describe('Menu', function () {
  beforeEach(_portal.createPortal);
  afterEach(_react2.cleanup);
  test('should have no accessibility violations', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, null))), container = _render.container;
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
  test('basic', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      label: "Test Menu",
      id: "test-menu",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('custom message', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      label: "Test Menu",
      messages: {
        openMenu: 'Abrir Menu'
      },
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('custom a11yTitle', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      a11yTitle: "My Menu",
      label: "Test Menu",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    }))),
        container = _render2.container,
        getByLabelText = _render2.getByLabelText;

    var menuWithLabel = getByLabelText('My Menu');
    expect(menuWithLabel).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
  test('justify content', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, ['start', 'center', 'end', 'between', 'around', 'stretch'].map(function (justifyContent) {
      return /*#__PURE__*/_react["default"].createElement(_.Menu, {
        key: justifyContent,
        label: justifyContent + " Menu",
        messages: {
          openMenu: 'Abrir Menu'
        },
        items: [{
          label: 'Item 1'
        }, {
          label: 'Item 2'
        }],
        justifyContent: justifyContent
      });
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('gap between icon and label', function () {
    window.scrollTo = jest.fn();

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      open: true,
      label: "actions",
      items: [{
        label: 'Item 1',
        icon: /*#__PURE__*/_react["default"].createElement("svg", null),
        gap: 'xlarge'
      }, {
        label: 'Item 2'
      }]
    }))),
        container = _render3.container,
        getByText = _render3.getByText;

    var firstItem = getByText('Item 1');
    expect(firstItem.querySelector('div[class^=StyledBox__StyledBoxGap]')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('open and close on click', function () {
    window.scrollTo = jest.fn();

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2',
        onClick: function onClick() {}
      }, {
        label: 'Item 3',
        href: '/test'
      }]
    }))),
        getByLabelText = _render4.getByLabelText,
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('test-menu__drop')).toBeNull();

    _react2.fireEvent.click(getByLabelText('Open Menu'));

    expect(container.firstChild).toMatchSnapshot();
    (0, _portal.expectPortal)('test-menu__drop').toMatchSnapshot();

    _react2.fireEvent.click(getByLabelText('Close Menu'));

    expect(document.getElementById('test-menu__drop')).toBeNull();
    expect(window.scrollTo).toBeCalled();
  });
  test('close by clicking outside', function (done) {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    }))),
        getByText = _render5.getByText,
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('test-menu__drop')).toBeNull();

    _react2.fireEvent.click(getByText('Test'));

    (0, _portal.expectPortal)('test-menu__drop').toMatchSnapshot();
    (0, _react2.fireEvent)(document, new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true
    }));
    setTimeout(function () {
      expect(document.getElementById('test-menu__drop')).toBeNull();
      done();
    }, 50);
  });
  test('select an item', function () {
    var onClick = jest.fn();

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      label: "Test",
      items: [{
        label: 'Item 1',
        onClick: onClick
      }, {
        label: 'Item 2'
      }]
    }))),
        getByText = _render6.getByText,
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Test')); // click in the first menu item


    _react2.fireEvent.click((0, _dom.getByText)(document, 'Item 1'));

    expect(onClick).toBeCalled();
    expect(document.getElementById('test-menu__drop')).toBeNull();
  });
  test('navigate through suggestions and select', function () {
    var onClick = jest.fn();

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2',
        onClick: onClick
      }]
    }))),
        getByLabelText = _render7.getByLabelText,
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot(); // Pressing space opens drop
    // First tab moves to first item
    // Second tab moves to second item
    // Enter selects the item

    _react2.fireEvent.keyDown(getByLabelText('Open Menu'), {
      key: 'Space',
      keyCode: 32,
      which: 32
    });

    _react2.fireEvent.keyDown(document.activeElement.firstChild, {
      key: 'Tab',
      keyCode: 9,
      which: 9
    });

    _react2.fireEvent.keyDown(document.activeElement, {
      key: 'Tab',
      keyCode: 9,
      which: 9
    });

    _react2.fireEvent.keyDown(document.activeElement, {
      key: 'Enter',
      keyCode: 13,
      which: 13
    });

    expect(onClick).toBeCalled();
    expect(document.getElementById('test-menu__drop')).toBeNull();
  });
  test('tab through menu until it closes', function () {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    }))),
        getByLabelText = _render8.getByLabelText,
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot(); // Pressing space opens drop
    // First tab moves to first item
    // Second tab moves to second item
    // Third tab moves beyond last menu item and closes menu

    _react2.fireEvent.keyDown(getByLabelText('Open Menu'), {
      key: 'Space',
      keyCode: 32,
      which: 32
    });

    _react2.fireEvent.keyDown(document.activeElement.firstChild, {
      key: 'Tab',
      keyCode: 9,
      which: 9
    });

    _react2.fireEvent.keyDown(document.activeElement, {
      key: 'Tab',
      keyCode: 9,
      which: 9
    });

    _react2.fireEvent.keyDown(document.activeElement, {
      key: 'Tab',
      keyCode: 9,
      which: 9
    });

    expect(document.getElementById('test-menu__drop')).toBeNull();
  });
  test('shift + tab through menu until it closes', function () {
    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    }))),
        getByLabelText = _render9.getByLabelText,
        getByText = _render9.getByText,
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot(); // Pressing space opens drop
    // First tab moves to first item
    // Second tab moves to second item
    // Next 3 Tabs + Shifts go back through menu in reverse order and close it

    _react2.fireEvent.keyDown(getByLabelText('Open Menu'), {
      key: 'Space',
      keyCode: 32,
      which: 32
    });

    _react2.fireEvent.keyDown(document.activeElement.firstChild, {
      key: 'Tab',
      keyCode: 9,
      which: 9
    });

    expect(getByText('Item 1').parentElement).toHaveFocus();

    _react2.fireEvent.keyDown(document.activeElement, {
      key: 'Tab',
      keyCode: 9,
      which: 9
    });

    expect(getByText('Item 2').parentElement).toHaveFocus();

    _react2.fireEvent.keyDown(document.activeElement, {
      key: 'Tab',
      keyCode: 9,
      which: 9,
      shiftKey: true
    });

    expect(getByText('Item 1').parentElement).toHaveFocus();

    _react2.fireEvent.keyDown(document.activeElement, {
      key: 'Tab',
      keyCode: 9,
      which: 9,
      shiftKey: true
    });

    expect(getByLabelText('Close Menu')).toHaveFocus();

    _react2.fireEvent.keyDown(document.activeElement, {
      key: 'Tab',
      keyCode: 9,
      which: 9,
      shiftKey: true
    });

    expect(document.getElementById('test-menu__drop')).toBeNull();
  });
  test('open on down close on esc', function () {
    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    }))),
        getByLabelText = _render10.getByLabelText,
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.keyDown(getByLabelText('Open Menu'), {
      key: 'Down',
      keyCode: 40,
      which: 40
    });

    _react2.fireEvent.keyDown(getByLabelText('Close Menu'), {
      key: 'Esc',
      keyCode: 27,
      which: 27
    });

    expect(document.getElementById('test-menu__drop')).toBeNull();
  });
  test('open on up close on esc', function () {
    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    }))),
        getByLabelText = _render11.getByLabelText,
        container = _render11.container;

    expect(container.firstChild).toMatchSnapshot(); // Pressing up opens the menu
    // Pressing escape closes it

    _react2.fireEvent.keyDown(getByLabelText('Open Menu'), {
      key: 'Up',
      keyCode: 38,
      which: 38
    });

    (0, _portal.expectPortal)('test-menu__drop').toMatchSnapshot();

    _react2.fireEvent.keyDown(getByLabelText('Close Menu'), {
      key: 'Esc',
      keyCode: 27,
      which: 27
    });

    expect(document.getElementById('test-menu__drop')).toBeNull();
  });
  test('close on tab', function () {
    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    }))),
        getByLabelText = _render12.getByLabelText,
        container = _render12.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.keyDown(getByLabelText('Open Menu'), {
      key: 'Down',
      keyCode: 40,
      which: 40
    });

    _react2.fireEvent.keyDown(getByLabelText('Open Menu'), {
      key: 'Tab',
      keyCode: 9,
      which: 9
    });

    expect(document.getElementById('test-menu__drop')).toBeNull();
  });
  test('with dropAlign top renders', function () {
    var _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      dropAlign: {
        top: 'top',
        right: 'right'
      },
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    }))),
        getByText = _render13.getByText,
        container = _render13.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.keyDown(getByText('Test'), {
      key: 'Down',
      keyCode: 40,
      which: 40
    });

    (0, _portal.expectPortal)('test-menu__drop').toMatchSnapshot();
  });
  test('with dropAlign bottom renders', function () {
    var _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      dropAlign: {
        bottom: 'bottom',
        left: 'left'
      },
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    }))),
        getByText = _render14.getByText,
        container = _render14.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.keyDown(getByText('Test'), {
      key: 'Down',
      keyCode: 40,
      which: 40
    });

    (0, _portal.expectPortal)('test-menu__drop').toMatchSnapshot();
  });
  test('disabled', function () {
    var _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      id: "test-menu",
      disabled: true,
      label: "Test",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2',
        onClick: function onClick() {}
      }, {
        label: 'Item 3',
        href: '/test'
      }]
    })), {
      attachTo: document.body.firstChild
    }),
        getByText = _render15.getByText,
        container = _render15.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('test-menu__drop')).toBeNull();

    _react2.fireEvent.click(getByText('Test'));

    expect(document.getElementById('test-menu__drop')).toBeNull();
  });
  test('reverse icon and label', function () {
    window.scrollTo = jest.fn();

    var _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      open: true,
      label: "Test Menu",
      items: [{
        label: 'Item 1',
        icon: /*#__PURE__*/_react["default"].createElement("svg", null),
        reverse: true
      }, {
        label: 'Item 2'
      }]
    }))),
        container = _render16.container,
        getByText = _render16.getByText; // Label should come before icon


    expect(getByText('Item 1').innerHTML).toEqual(expect.stringMatching(/^Item 1/));
    expect(container).toMatchSnapshot();
  });
  test('custom theme icon color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      label: "Test Menu",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('custom theme with default button', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: defaultButtonTheme
    }, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      label: "Test Menu",
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('menu with children when custom theme has default button', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.Grommet, {
      theme: defaultButtonTheme
    }, /*#__PURE__*/_react["default"].createElement(_.Menu, {
      items: [{
        label: 'Item 1'
      }, {
        label: 'Item 2'
      }]
    }, function () {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Test Menu");
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
});