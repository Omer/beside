'use strict';

var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');

var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

module.exports = { x: x, y: y };
