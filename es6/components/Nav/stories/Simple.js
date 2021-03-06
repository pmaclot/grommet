import React from 'react';
import { Anchor, Grommet, Nav } from 'grommet';
import { grommet } from 'grommet/themes';
var items = [{
  label: 'Item A',
  href: '#'
}, {
  label: 'Item B',
  href: '#'
}, {
  label: 'Item C',
  href: '#'
}, {
  label: 'Item D',
  href: '#'
}];

var SimpleNav = function SimpleNav() {
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet
  }, /*#__PURE__*/React.createElement(Nav, {
    pad: "large"
  }, items.map(function (item) {
    return /*#__PURE__*/React.createElement(Anchor, {
      href: item.href,
      label: item.label,
      key: item.label
    });
  })));
};

export var Simple = function Simple() {
  return /*#__PURE__*/React.createElement(SimpleNav, null);
};