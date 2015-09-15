/*!
 * bespoke-nav-touch v1.0.0
 *
 * Copyright 2015, Dan Allen
 * This content is released under the MIT license
 */

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.bespoke||(g.bespoke = {}));g=(g.plugins||(g.plugins = {}));g.navtouch = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(opts) {
  return function(deck) {
    opts = opts || {};
    var TOUCHSTART = 'touchstart', TOUCHMOVE = 'touchmove', start = null,
      axis = 'page' + (opts.axis && ['x', 'y'].indexOf(opts.axis) !== -1 ? opts.axis.toUpperCase() : 'X'),
      gap = (typeof opts.threshold === 'number' ? Math.abs(opts.threshold) : Math.ceil(50 / window.devicePixelRatio)),
      onTouchstart = function(e) {
        if (e.touches.length === 1) start = e.touches[0][axis];
      },
      onTouchmove = function(e) {
        if (start === null) return;
        var delta = e.touches[0][axis] - start;
        if (Math.abs(delta) > gap) {
          deck[delta > 0 ? 'prev' : 'next']();
          start = null;
        }
      };
    deck.on('destroy', function() {
      deck.parent.removeEventListener(TOUCHSTART, onTouchstart);
      deck.parent.removeEventListener(TOUCHMOVE, onTouchmove);
    });
    deck.parent.addEventListener(TOUCHSTART, onTouchstart);
    deck.parent.addEventListener(TOUCHMOVE, onTouchmove);
  };
};

},{}]},{},[1])(1)
});