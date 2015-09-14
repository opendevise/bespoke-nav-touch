Function.prototype.bind = Function.prototype.bind || require('function-bind');

var bespoke = require('bespoke'),
  navtouch = require('../../lib/bespoke-nav-touch.js');

describe('bespoke-nav-touch', function() {
  var deck,
    threshold = Math.round(20 / window.devicePixelRatio),
    createDeck = function() {
      var parent = document.createElement('article');
      for (var i = 1; i <= 5; i++) {
        var slide = document.createElement('section');
        parent.appendChild(slide);
      }
      deck = bespoke.from(parent, [
        navtouch()
      ]);
    },
    destroyDeck = function() {
      deck.fire('destroy');
      var parentNode = deck.parent.parentNode;
      if (parentNode) {
        parentNode.removeChild(deck.parent);
      }
      deck = null;
    },
    touchEvent = function(type, x, y) {
      var e = document.createEvent('CustomEvent');
      e.initEvent('touch' + type, true, true);
      e.touches = [{ pageX: x, pageY: y }];
      deck.parent.dispatchEvent(e);
    },
    swipe = function(axis, amount) {
      touchEvent('start', axis == 'x' ? amount : 0, axis == 'x' ? 0 : amount);
      touchEvent('move', 0, 0);
      touchEvent('end', 0, 0);
    };

  beforeEach(createDeck);
  afterEach(destroyDeck);

  describe('navigate to next slide', function() {
    beforeEach(function() { deck.slide(1); });

    it('should go to next slide when swiping right to left', function() {
      swipe('x', threshold + 1);
      expect(deck.slide()).toBe(2);
    });

    it('should not go to next slide when swiping right to left less than threshold', function() {
      swipe('x', threshold - 1);
      expect(deck.slide()).toBe(1);
    });
  });

  describe('navigate to previous slide', function() {
    beforeEach(function() { deck.slide(1); });

    it('should go to previous slide when swiping left to right', function() {
      swipe('x', 0 - (threshold + 1));
      expect(deck.slide()).toBe(0);
    });

    it('should not go to next slide when swiping left to right less than threshold', function() {
      swipe('x', 0 - (threshold - 1));
      expect(deck.slide()).toBe(1);
    });
  });
});
