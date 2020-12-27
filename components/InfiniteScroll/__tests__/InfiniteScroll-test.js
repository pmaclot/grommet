"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _2 = require("../..");

var _3 = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var simpleItems = function simpleItems(value) {
  return Array(value).fill().map(function (_, i) {
    return "item " + (i + 1);
  });
};

var createPageItems = function createPageItems(allChildren) {
  var unfiltered = Array.from(allChildren); // Removing any children which are serving as refs

  return unfiltered.filter(function (childItem) {
    return childItem.outerHTML.includes('item');
  });
};

describe('InfiniteScroll', function () {
  var items = [];

  while (items.length < 4) {
    items.push(items.length);
  }

  test('basic', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, null), /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: items
    }, function (item, index, ref) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: ref,
        key: index
      }, item);
    }), /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: items
    }, function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index
      }, item);
    }))),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('step', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: items,
      step: 2
    }, function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index
      }, item);
    }))),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('show', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: items,
      step: 2,
      show: 3
    }, function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index
      }, item);
    }))),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('renderMarker', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: items,
      step: 2,
      renderMarker: function renderMarker(m) {
        return /*#__PURE__*/_react["default"].createElement("div", null, m);
      }
    }, function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index
      }, item);
    }))),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test('replace', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: items,
      step: 2,
      replace: true
    }, function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index
      }, item);
    }))),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  test("should render expected items when supplied\n  assortment of mixed items", function () {
    var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n    sed do eiusmod temporincididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n    ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit\n    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n    occaecat cupidatat non proident, sunt in culpa qui officia\n    deserunt mollit anim id est laborum.";
    var mixedItems = []; // Generate large array of mixed items to test different elements on a page

    for (var i = 0; i < 200; i += 1) {
      switch (i % 5) {
        case 0:
          mixedItems.push( /*#__PURE__*/_react["default"].createElement(_2.Box, null, "Hello World"));
          break;

        case 1:
          mixedItems.push("This is a string at index " + i);
          break;

        case 2:
          mixedItems.push( /*#__PURE__*/_react["default"].createElement(_2.Image, {
            a11yTitle: "Gremlin",
            src: "https://v2.grommet.io/img/stak-hurrah.svg"
          }));
          break;

        case 3:
          switch (i % 4) {
            case 0:
              mixedItems.push(lorem);
              break;

            case 1:
              mixedItems.push(lorem.slice(140));
              break;

            case 2:
              mixedItems.push(lorem + lorem);
              break;

            case 3:
              mixedItems.push(lorem.slice(i, Math.min(i * 3, lorem.length)));
              break;

            default:
              break;
          }

          break;

        case 4:
          mixedItems.push(i * 186282);
          break;

        default:
          break;
      }
    }

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: mixedItems
    }, function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index
      }, item);
    }))),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});
describe('Number of Items Rendered', function () {
  test("Should render items equal to the length of \n  step when step < items.length", function () {
    var step = 50;

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: simpleItems(1000) // show={117}
      ,
      step: step
    }, function (item) {
      return /*#__PURE__*/_react["default"].createElement(_2.Box, {
        key: item
      }, item);
    }))),
        container = _render7.container;

    var pageItems = createPageItems(container.firstChild.children);
    var expectedItems = step;
    expect(pageItems.length).toEqual(expectedItems);
  });
  test("Should render items equal to the length of\n  step when step = array.length", function () {
    var step = 200;

    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: simpleItems(200),
      step: step
    }, function (item) {
      return /*#__PURE__*/_react["default"].createElement(_2.Box, {
        key: item
      }, item);
    }))),
        container = _render8.container;

    var pageItems = createPageItems(container.firstChild.children);
    var expectedItems = step;
    expect(pageItems.length).toEqual(expectedItems);
  });
  test("Should render items equal to the length of\n  item array when step > array", function () {
    var numItems = 1000;

    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: simpleItems(numItems),
      step: 1050
    }, function (item) {
      return /*#__PURE__*/_react["default"].createElement(_2.Box, {
        key: item
      }, item);
    }))),
        container = _render9.container;

    var pageItems = createPageItems(container.firstChild.children);
    var expectedItems = numItems;
    expect(pageItems.length).toEqual(expectedItems);
  });
  test("Should only contain unique items (i.e no duplicates)", function () {
    var step = 25;
    var numItems = 200;

    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: simpleItems(numItems),
      step: step
    }, function (item) {
      return /*#__PURE__*/_react["default"].createElement(_2.Box, {
        key: item
      }, item);
    }))),
        container = _render10.container;

    var pageItems = createPageItems(container.firstChild.children);
    var distinctItems = new Set(pageItems);
    /* Expected number of items should be at the show value rounded
    up to the next step increment/ */

    var expectedItems = step;
    /* If the number of distinct items is equivalent to the length 
    of results, then we have unique items. */

    expect(distinctItems.size).toEqual(expectedItems);
    expect(container.firstChild).toMatchSnapshot();
  });
});
describe('show scenarios', function () {
  test("When show, show item should be visible in window", function () {
    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: simpleItems(300),
      show: 105
    }, function (item) {
      return /*#__PURE__*/_react["default"].createElement(_2.Box, {
        key: item
      }, item);
    }))),
        container = _render11.container; // item(104) = 'item 105' because indexing starts at 0.
    // Need to modify this next selection to only be concerned with the
    // visible window.


    var renderedItems = container.firstChild.children.item(104).outerHTML;
    expect(renderedItems).toContain('item 105');
  });
  test("When show, should only contain unique \n          items (i.e no duplicates)", function () {
    var step = 25;
    var numItems = 200;
    var showIndex = 67;

    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: simpleItems(numItems),
      show: showIndex,
      step: step
    }, function (item) {
      return /*#__PURE__*/_react["default"].createElement(_2.Box, {
        key: item
      }, item);
    }))),
        container = _render12.container;

    var pageItems = createPageItems(container.firstChild.children);
    var distinctItems = new Set(pageItems);
    /* Expected number of items should be at the show value rounded
    up to the next step increment/ */

    var expectedItems = Math.ceil(showIndex / step) * step;
    /* If the number of distinct items is equivalent to the length
    of results, then we have unique items. */

    expect(distinctItems.size).toEqual(expectedItems);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("should display specified item when show is greater than step", function () {
    var step = 8;
    var numItems = 200;
    var showIndex = 41;

    var _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: simpleItems(numItems),
      show: showIndex,
      step: step
    }, function (item) {
      return /*#__PURE__*/_react["default"].createElement(_2.Box, {
        key: item
      }, item);
    }))),
        container = _render13.container,
        getByText = _render13.getByText; // Check to see that expected item exists


    var expectedItem = getByText('item 42').innerHTML;
    expect(expectedItem).toMatch(simpleItems(numItems)[showIndex]); // Check to see that we have the total number of items we expect

    var pageItems = createPageItems(container.firstChild.children);
    /* Expected number of items should be at the show value rounded
    up to the next step increment/ */

    var expectedItems = Math.ceil(showIndex / step) * step;
    expect(pageItems.length).toEqual(expectedItems);
  });
  test("should display specified item when show is less than step", function () {
    var step = 30;
    var numItems = 200;
    var showIndex = 26;

    var _render14 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: simpleItems(numItems),
      show: showIndex,
      step: step
    }, function (item) {
      return /*#__PURE__*/_react["default"].createElement(_2.Box, {
        key: item
      }, item);
    }))),
        container = _render14.container,
        getByText = _render14.getByText; // Check to see that expected item exists


    var expectedItem = getByText('item 27').innerHTML;
    expect(expectedItem).toMatch(simpleItems(numItems)[showIndex]); // Check to see that we have the total number of items we expect

    var pageItems = createPageItems(container.firstChild.children);
    /* Expected number of items should be at the show value rounded
    up to the next step increment/ */

    var expectedItems = Math.ceil(showIndex / step) * step;
    expect(pageItems.length).toEqual(expectedItems);
  });
  test("should display specified item when show is \n        greater than step and replace is true", function () {
    var step = 18;
    var numItems = 200;
    var showIndex = 88;

    var _render15 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: simpleItems(numItems),
      replace: true,
      show: showIndex,
      step: step
    }, function (item) {
      return /*#__PURE__*/_react["default"].createElement(_2.Box, {
        key: item
      }, item);
    }))),
        container = _render15.container,
        getByText = _render15.getByText; // Check to see that expected item exists


    var expectedItem = getByText('item 89').innerHTML;
    expect(expectedItem).toMatch(simpleItems(numItems)[showIndex]); // Check to see that our replace items have been removed from the DOM.

    expect(container.firstChild).not.toContain('item 7');
    /* Check to see that we have the total number of items we expect.
     * When replace is true, the expected number of items should be less
     * than or equal to the step * 2.
     */

    /*
     * The following needs to be uncommented to for this test to pass.
     */
    // const pageItems = createPageItems(container.firstChild.children);
    // const expectedItems = step * 2;
    // expect(pageItems.length).toBeLessThanOrEqual(expectedItems);
  });
  test("should display specified item when show is \n        less than step and replace is true", function () {
    var step = 30;
    var numItems = 200;
    var showIndex = 26;

    var _render16 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_2.Grommet, null, /*#__PURE__*/_react["default"].createElement(_3.InfiniteScroll, {
      items: simpleItems(numItems),
      replace: true,
      show: showIndex,
      step: step
    }, function (item) {
      return /*#__PURE__*/_react["default"].createElement(_2.Box, {
        key: item
      }, item);
    }))),
        container = _render16.container,
        getByText = _render16.getByText; // Check to see that expected item exists


    var expectedItem = getByText('item 27').innerHTML;
    expect(expectedItem).toMatch(simpleItems(numItems)[showIndex]);
    /* Check to see that we have the total number of items we expect.
     * When replace is true, the expected number of items should be less
     * than or equal to the step * 2.
     */

    var pageItems = createPageItems(container.firstChild.children);
    var expectedItems = step * 2;
    expect(pageItems.length).toBeLessThanOrEqual(expectedItems);
  });
});