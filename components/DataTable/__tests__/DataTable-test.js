"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _Grommet = require("../../Grommet");

var _Text = require("../../Text");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('DataTable', function () {
  afterEach(_react2.cleanup);
  test('empty', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, null))),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('basic', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }]
    }))),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('!primaryKey', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      primaryKey: false
    }))),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('paths', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b.c',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: {
          c: 1
        }
      }, {
        a: 'two',
        b: {
          c: 2
        }
      }]
    }))),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('primaryKey', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      primaryKey: "b"
    }))),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('footer', function () {
    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A',
        footer: 'Total'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }]
    }))),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('sortable', function () {
    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'zero',
        b: 0
      }, {
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      sortable: true
    }))),
        container = _render7.container,
        getByText = _render7.getByText;

    expect(container.firstChild).toMatchSnapshot();
    var headerCell = getByText('A');

    _react2.fireEvent.click(headerCell, {});

    expect(container.firstChild).toMatchSnapshot();
  });
  test('onSort', function () {
    var onSort = jest.fn();

    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'zero',
        b: 0
      }, {
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      onSort: onSort,
      sortable: true
    }))),
        container = _render8.container,
        getByText = _render8.getByText;

    expect(container.firstChild).toMatchSnapshot();
    var headerCell = getByText('A');

    _react2.fireEvent.click(headerCell, {});

    expect(onSort).toBeCalledWith(expect.objectContaining({
      property: 'a',
      direction: 'asc'
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('onSort external', function () {
    var onSort = jest.fn();

    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'zero',
        b: 0
      }, {
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      onSort: onSort,
      sort: {
        property: 'a',
        direction: 'asc',
        external: true
      }
    }))),
        container = _render9.container,
        getByText = _render9.getByText;

    expect(container.firstChild).toMatchSnapshot();
    var headerCell = getByText('A');

    _react2.fireEvent.click(headerCell, {});

    expect(onSort).toBeCalledWith(expect.objectContaining({
      property: 'a',
      direction: 'desc',
      external: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('sort', function () {
    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'zero',
        b: 0
      }, {
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      sort: {
        property: 'a',
        direction: 'asc'
      }
    }))),
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('sort nested object', function () {
    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b.value',
        header: 'Value',
        render: function render(datum) {
          return datum.b && datum.b.value;
        }
      }],
      data: [{
        a: 'zero',
        b: {
          value: 1
        }
      }, {
        a: 'one',
        b: {
          value: 2
        }
      }, {
        a: 'two',
        b: {
          value: 3
        }
      }],
      sort: {
        property: 'b.value',
        direction: 'asc'
      }
    }))),
        container = _render11.container,
        getByText = _render11.getByText;

    expect(container.querySelectorAll('td').item(0).textContent).toBe('1');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('3');

    _react2.fireEvent.click(getByText('Value'));

    expect(container.querySelectorAll('td').item(0).textContent).toBe('3');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('1');
    expect(container.firstChild).toMatchSnapshot();
  });
  test('sort nested object with onSort', function () {
    var onSort = jest.fn();

    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b.value',
        header: 'Value',
        render: function render(datum) {
          return datum.b && datum.b.value;
        }
      }],
      data: [{
        a: 'zero',
        b: {
          value: 1
        }
      }, {
        a: 'one',
        b: {
          value: 2
        }
      }, {
        a: 'two',
        b: {
          value: 3
        }
      }],
      onSort: onSort,
      sort: {
        property: 'b.value',
        direction: 'asc'
      }
    }))),
        container = _render12.container,
        getByText = _render12.getByText;

    expect(container.querySelectorAll('td').item(0).textContent).toBe('1');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('3');

    _react2.fireEvent.click(getByText('Value'));

    expect(onSort).toBeCalledWith(expect.objectContaining({
      property: 'b.value'
    }));
    expect(container.querySelectorAll('td').item(0).textContent).toBe('3');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('1');
    expect(container.firstChild).toMatchSnapshot();
  });
  test('sort external', function () {
    var _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'zero',
        b: 0
      }, {
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      sort: {
        property: 'a',
        direction: 'asc',
        external: true
      }
    }))),
        container = _render13.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('search', function () {
    var _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A',
        search: true
      }],
      data: [{
        a: 'Alpha'
      }, {
        a: 'beta'
      }, {
        a: '[]'
      }]
    }))),
        container = _render14.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(container.querySelector('[aria-label="Open search by a"]'));

    var searchInput = container.querySelector('[name="search-a"]');
    expect(document.activeElement).toBe(searchInput);

    _react2.fireEvent.change(searchInput, {
      target: {
        value: '['
      }
    });

    expect(container.firstChild).toMatchSnapshot();
  });
  test('resizeable', function () {
    var _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      resizeable: true
    }))),
        container = _render15.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('aggregate', function () {
    var _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B',
        aggregate: 'sum',
        footer: {
          aggregate: true
        }
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }]
    }))),
        container = _render16.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('aggregate with nested object', function () {
    var _render17 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'obj.value',
        header: 'object',
        aggregate: 'sum',
        footer: {
          aggregate: true
        }
      }, {
        property: 'obj2.value',
        header: 'object 2',
        render: function render(datum) {
          return datum.obj2.value;
        }
      }],
      data: [{
        a: 'one',
        obj: {
          value: 1
        },
        obj2: {
          value: 10
        }
      }, {
        a: 'two',
        obj: {
          value: 2
        },
        obj2: {
          value: 20
        }
      }]
    }))),
        container = _render17.container,
        getByText = _render17.getByText;

    expect(getByText('3')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  test('groupBy', function () {
    var _render18 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1.1
      }, {
        a: 'one',
        b: 1.2
      }, {
        a: 'two',
        b: 2.1
      }, {
        a: 'two',
        b: 2.2
      }],
      groupBy: "a"
    }))),
        container = _render18.container,
        getByText = _render18.getByText;

    expect(container.firstChild).toMatchSnapshot();
    var headerCell = getByText('A');

    _react2.fireEvent.click(headerCell, {});

    expect(container.firstChild).toMatchSnapshot();
  });
  test('click', function () {
    var onClickRow = jest.fn();

    var _render19 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }],
      data: [{
        a: 'alpha'
      }, {
        a: 'beta'
      }],
      onClickRow: onClickRow
    }))),
        container = _render19.container,
        getByText = _render19.getByText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('beta'));

    expect(onClickRow).toBeCalledWith(expect.objectContaining({
      datum: {
        a: 'beta'
      }
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('background', function () {
    var _render20 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, ['accent-1', ['accent-1', 'accent-2'], {
      header: 'accent-1',
      body: 'accent-2',
      footer: 'accent-3'
    }].map(function (background) {
      return /*#__PURE__*/_react["default"].createElement(_.DataTable, {
        key: JSON.stringify(background),
        columns: [{
          property: 'a',
          header: 'A',
          footer: 'Total'
        }, {
          property: 'b',
          header: 'B'
        }],
        data: [{
          a: 'one',
          b: 1
        }, {
          a: 'two',
          b: 2
        }],
        background: background
      });
    }))),
        container = _render20.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('border', function () {
    var _render21 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, [true, 'top', {
      color: 'accent-1',
      side: 'top',
      size: 'small'
    }, {
      header: 'top',
      body: {
        color: 'accent-1',
        side: 'top',
        size: 'small'
      }
    }].map(function (border) {
      return /*#__PURE__*/_react["default"].createElement(_.DataTable, {
        key: JSON.stringify(border),
        columns: [{
          property: 'a',
          header: 'A',
          footer: 'Total'
        }, {
          property: 'b',
          header: 'B'
        }],
        data: [{
          a: 'one',
          b: 1
        }, {
          a: 'two',
          b: 2
        }],
        border: border
      });
    }))),
        container = _render21.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('pad', function () {
    var _render22 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, ['small', {
      vertical: 'small',
      horizontal: 'medium'
    }, {
      header: 'small',
      body: {
        vertical: 'small',
        horizontal: 'medium'
      }
    }].map(function (pad) {
      return /*#__PURE__*/_react["default"].createElement(_.DataTable, {
        key: JSON.stringify(pad),
        columns: [{
          property: 'a',
          header: 'A',
          footer: 'Total'
        }, {
          property: 'b',
          header: 'B'
        }],
        data: [{
          a: 'one',
          b: 1
        }, {
          a: 'two',
          b: 2
        }],
        pad: pad
      });
    }))),
        container = _render22.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('rowProps', function () {
    var _render23 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A',
        footer: 'Total'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      rowProps: {
        one: {
          background: 'accent-1',
          border: 'bottom',
          pad: 'large'
        }
      }
    }))),
        container = _render23.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('groupBy property', function () {
    var _render24 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1.1
      }, {
        a: 'one',
        b: 1.2
      }, {
        a: 'two',
        b: 2.1
      }, {
        a: 'two',
        b: 2.2
      }],
      groupBy: {
        property: 'a'
      }
    }))),
        container = _render24.container,
        getByText = _render24.getByText;

    expect(container.firstChild).toMatchSnapshot();
    var headerCell = getByText('A');

    _react2.fireEvent.click(headerCell, {});

    expect(container.firstChild).toMatchSnapshot();
  });
  test('groupBy expand', function () {
    var _render25 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1.1
      }, {
        a: 'one',
        b: 1.2
      }, {
        a: 'two',
        b: 2.1
      }, {
        a: 'two',
        b: 2.2
      }],
      primaryKey: "b",
      groupBy: {
        property: 'a',
        expand: ['one']
      }
    }))),
        container = _render25.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('groupBy onExpand', function () {
    var onExpand = jest.fn(function (groupState) {
      return groupState;
    });

    var _render26 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1.1
      }, {
        a: 'one',
        b: 1.2
      }, {
        a: 'two',
        b: 2.1
      }, {
        a: 'two',
        b: 2.2
      }],
      primaryKey: "b",
      groupBy: {
        property: 'a',
        onExpand: onExpand
      }
    }))),
        getAllByLabelText = _render26.getAllByLabelText;

    var expandButtons = getAllByLabelText('expand');

    _react2.fireEvent.click(expandButtons[1], {});

    expect(onExpand).toBeCalled();
    expect(onExpand.mock.results[0].value).toEqual(['one']);
    expect(onExpand.mock.results[0].value).toMatchSnapshot();
  });
  test('replace', function () {
    var _render27 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1.1
      }, {
        a: 'one',
        b: 1.2
      }, {
        a: 'two',
        b: 2.1
      }, {
        a: 'two',
        b: 2.2
      }],
      primaryKey: "b",
      step: 2,
      replace: true
    }))),
        container = _render27.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('themeColumnSizes', function () {
    var _render28 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A',
        size: 'medium'
      }, {
        property: 'b',
        header: 'B',
        size: 'small'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }]
    }))),
        container = _render28.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('absoluteColumnSizes', function () {
    var _render29 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A',
        size: '400px'
      }, {
        property: 'b',
        header: 'B',
        size: '200px'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }]
    }))),
        container = _render29.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('relativeColumnSizes', function () {
    var _render30 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A',
        size: '2/3'
      }, {
        property: 'b',
        header: 'B',
        size: '1/3'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }]
    }))),
        container = _render30.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('fill', function () {
    var _render31 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, [true, 'horizontal', 'vertical'].map(function (fill) {
      return /*#__PURE__*/_react["default"].createElement(_.DataTable, {
        key: JSON.stringify(fill),
        columns: [{
          property: 'a',
          header: 'A',
          footer: 'Total'
        }, {
          property: 'b',
          header: 'B'
        }],
        data: [{
          a: 'one',
          b: 1
        }, {
          a: 'two',
          b: 2
        }],
        fill: fill
      });
    }))),
        container = _render31.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('pin', function () {
    var _render32 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, [true, 'header', 'footer'].map(function (pin) {
      return /*#__PURE__*/_react["default"].createElement(_.DataTable, {
        key: JSON.stringify(pin),
        columns: [{
          property: 'a',
          header: 'A',
          footer: 'Total',
          pin: true
        }, {
          property: 'b',
          header: 'B'
        }],
        data: [{
          a: 'one',
          b: 1
        }, {
          a: 'two',
          b: 2
        }],
        pin: pin
      });
    }))),
        container = _render32.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('pin + background', function () {
    var theme = {
      dataTable: {
        pinned: {
          header: {
            background: {
              color: 'blue'
            }
          },
          footer: {
            background: {
              color: 'green'
            }
          }
        }
      }
    };

    var _render33 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: theme
    }, [true, 'header', 'footer'].map(function (pin) {
      return /*#__PURE__*/_react["default"].createElement(_.DataTable, {
        background: {
          pinned: 'red'
        },
        key: JSON.stringify(pin),
        columns: [{
          property: 'a',
          header: 'A',
          footer: 'Total',
          pin: true
        }, {
          property: 'b',
          header: 'B'
        }],
        data: [{
          a: 'one',
          b: 1
        }, {
          a: 'two',
          b: 2
        }],
        pin: pin
      });
    }))),
        container = _render33.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('select', function () {
    var onSelect = jest.fn();

    var _render34 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }],
      data: [{
        a: 'alpha'
      }, {
        a: 'beta'
      }],
      primaryKey: "a",
      select: ['alpha'],
      onSelect: onSelect
    }))),
        container = _render34.container,
        getByLabelText = _render34.getByLabelText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByLabelText('select beta'));

    expect(onSelect).toBeCalledWith(expect.arrayContaining(['alpha', 'beta']));
    expect(container.firstChild).toMatchSnapshot();
  });
  test('custom theme', function () {
    var customTheme = {
      dataTable: {
        header: {
          background: 'skyblue',
          border: {
            color: 'brand',
            size: 'medium'
          },
          gap: 'none',
          pad: {
            horizontal: 'small',
            vertical: 'xsmall'
          },
          font: {
            weight: 'bold'
          },
          hover: {
            background: {
              color: 'light-2'
            }
          }
        },
        resize: {
          hover: {
            border: {
              color: 'red',
              side: 'end',
              size: 'xsmall'
            }
          }
        }
      }
    };

    var _render35 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, {
      theme: customTheme
    }, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }],
      data: [{
        a: 'alpha'
      }, {
        a: 'beta'
      }],
      primaryKey: "a",
      select: ['alpha'],
      sortable: true,
      resizeable: true
    }))),
        container = _render35.container,
        getByLabelText = _render35.getByLabelText;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOver(getByLabelText('select beta'));

    expect(container.firstChild).toMatchSnapshot();
  });
  test('units', function () {
    var _render36 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A',
        footer: 'Total'
      }, {
        property: 'b',
        header: 'B',
        units: '(TiB)'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }]
    }))),
        container = _render36.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('placeholder', function () {
    var _render37 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A',
        footer: 'Total'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      placeholder: "test placeholder"
    }), /*#__PURE__*/_react["default"].createElement(_.DataTable, {
      columns: [{
        property: 'a',
        header: 'A'
      }, {
        property: 'b',
        header: 'B'
      }],
      data: [{
        a: 'one',
        b: 1
      }, {
        a: 'two',
        b: 2
      }],
      placeholder: /*#__PURE__*/_react["default"].createElement(_Text.Text, {
        weight: "bold"
      }, "test placeholder")
    }))),
        container = _render37.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});