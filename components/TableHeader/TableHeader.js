"use strict";

exports.__esModule = true;
exports.TableHeader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TableContext = require("../Table/TableContext");

var _StyledTable = require("../Table/StyledTable");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TableHeader = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_TableContext.TableContext.Provider, {
    value: "header"
  }, /*#__PURE__*/_react["default"].createElement(_StyledTable.StyledTableHeader, _extends({
    ref: ref
  }, props)));
});
TableHeader.displayName = 'TableHeader';
var TableHeaderDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  TableHeaderDoc = require('./doc').doc(TableHeader);
}

var TableHeaderWrapper = TableHeaderDoc || TableHeader;
exports.TableHeader = TableHeaderWrapper;