module.exports = function(opts) {
  return function(deck) {
    opts = opts || {};
    var TOUCHSTART = 'touchstart', TOUCHMOVE = 'touchmove', TOUCHEND = 'touchend', start, delta,
      axis = 'page' + (opts.axis && ['x', 'y'].indexOf(opts.axis) !== -1 ? opts.axis.toUpperCase() : 'X'),
      gap = (typeof opts.threshold === 'number' ? Math.abs(opts.threshold) : Math.ceil(20 / window.devicePixelRatio)),
      onTouchEvent = function(e) {
        if (e.type === TOUCHEND) {
          if (Math.abs(delta) > gap) deck[delta > 0 ? 'prev' : 'next']();
        }
        else if (e.touches.length === 1) {
          if (e.type === TOUCHSTART) {
            start = e.touches[0][axis];
            delta = 0;
          }
          else { // TOUCHMOVE
            delta = e.touches[0][axis] - start;
          }
        }
      };
    deck.on('destroy', function() {
      [TOUCHSTART, TOUCHMOVE, TOUCHEND].forEach(function(type) { deck.parent.removeEventListener(type, onTouchEvent); });
    });
    [TOUCHSTART, TOUCHMOVE, TOUCHEND].forEach(function(type) { deck.parent.addEventListener(type, onTouchEvent); });
  };
};
