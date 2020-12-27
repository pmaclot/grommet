"use strict";

var _utils = require("../utils");

describe('utils', function () {
  test('areNormalizedValuesEquals', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');
    expect((0, _utils.areNormalizedValuesEquals)([{
      value: [1]
    }], [{
      value: [1]
    }])).toBeTruthy();
    expect((0, _utils.areNormalizedValuesEquals)([{
      value: [1]
    }], undefined)).toBeFalsy();
    expect((0, _utils.areNormalizedValuesEquals)([{
      value: [1]
    }], [{
      value: [1]
    }, {
      value: [2]
    }])).toBeFalsy();
    expect((0, _utils.areNormalizedValuesEquals)([], [])).toBeTruthy();
    expect((0, _utils.areNormalizedValuesEquals)([{
      test: 'test'
    }], [{
      value: [2]
    }])).toBeFalsy();
    expect((0, _utils.areNormalizedValuesEquals)([{
      value: [1]
    }], [{
      test: 'test'
    }])).toBeFalsy();
    expect(warnSpy).toBeCalledTimes(6);
    expect(warnSpy).toHaveBeenCalledWith("This function will be removed in the upcoming releases.\nPlease get in touch with us if you have concerns.");
  });
  test('areNormalizedBoundsEquals', function () {
    console.warn = jest.fn();
    var warnSpy = jest.spyOn(console, 'warn');
    expect((0, _utils.areNormalizedBoundsEquals)([[0, 1], [0, 1]], [[0, 1], [0, 1]])).toBeTruthy();
    expect((0, _utils.areNormalizedBoundsEquals)([[0, 1], [0, 1]], undefined)).toBeFalsy();
    expect((0, _utils.areNormalizedBoundsEquals)(undefined, [[0, 1], [0, 1]])).toBeFalsy();
    expect((0, _utils.areNormalizedBoundsEquals)([], [[0, 1], [0, 1]])).toBeFalsy();
    expect((0, _utils.areNormalizedBoundsEquals)([], [])).toBeFalsy();
    expect(warnSpy).toBeCalledTimes(5);
    expect(warnSpy).toHaveBeenCalledWith("This function will be removed in the upcoming releases.\nPlease get in touch with us if you have concerns.");
  });
});