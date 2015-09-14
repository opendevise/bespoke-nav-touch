module.exports = function(opts) {
  return function(deck) {
    var TOUCHSTART = 'touchstart', TOUCHMOVE = 'touchmove', TOUCHEND = 'touchend', start, delta,
      axis = (opts && ['x', 'y'].indexOf(opts.axis) !== -1 ? 'page' + opts.axis.toUpperCase() : 'pageX'),
      threshold = (opts && opts.threshold === 'number' ? Math.abs(opts.threshold) : Math.round(20 / window.devicePixelRatio)),
      onTouchEvent = function(e) {
        if (e.type !== TOUCHEND && e.touches.length !== 1) return;
        switch(e.type) {
          case TOUCHSTART:
            start = e.touches[0][axis];
            delta = 0;
          break;
          case TOUCHMOVE:
            delta = e.touches[0][axis] - start;
          break;
          case TOUCHEND:
            if (Math.abs(delta) > threshold) deck[delta > 0 ? 'prev' : 'next']();
        }
      };
    deck.on('destroy', function() {
      [TOUCHSTART, TOUCHMOVE, TOUCHEND].forEach(function(type) { deck.parent.removeEventListener(type, onTouchEvent); });
    });
    [TOUCHSTART, TOUCHMOVE, TOUCHEND].forEach(function(type) { deck.parent.addEventListener(type, onTouchEvent); });
  };
};
