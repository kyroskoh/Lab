// Generated by CoffeeScript 1.11.1
var Stream, Symbol, draw, fadeInterval, setup, streams, symbolSize;

streams = [];

fadeInterval = 1.6;

symbolSize = 14;

setup = function() {
  var i, j, len, ref, stream, x;
  createCanvas(window.innerWidth, window.innerHeight);
  x = 0;
  ref = range(width / symbolSize);
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize;
  }
  textFont('Consolas');
  return textSize(symbolSize);
};

draw = function() {
  var j, len, results, stream;
  bg(0);
  results = [];
  for (j = 0, len = streams.length; j < len; j++) {
    stream = streams[j];
    results.push(stream.render());
  }
  return results;
};

Symbol = (function() {
  function Symbol(x1, y1, speed, first1, opacity1) {
    this.x = x1;
    this.y = y1;
    this.speed = speed;
    this.first = first1;
    this.opacity = opacity1;
    this.switchInterval = round(random(2, 25));
  }

  Symbol.prototype.rain = function() {
    return this.y = this.y >= height ? 0 : this.y += this.speed;
  };

  Symbol.prototype.setToRandomSymbol = function() {
    if (frameCount % this.switchInterval === 0) {
      if (random(0, 5) > 1) {
        return this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
      } else {
        return this.value = round(random(0, 9));
      }
    }
  };

  return Symbol;

})();

Stream = (function() {
  function Stream() {
    this.symbols = [];
    this.totalSymbols = round(random(5, 35));
    this.speed = random(5, 22);
  }

  Stream.prototype.generateSymbols = function(x, y) {
    var first, i, j, len, opacity, ref, results, symbol;
    opacity = 1;
    first = 1 === round(random(0, 4));
    ref = range(this.totalSymbols);
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      symbol = new Symbol(x, y, this.speed, first, opacity);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity -= 1 / this.totalSymbols / fadeInterval;
      y -= symbolSize;
      results.push(first = false);
    }
    return results;
  };

  Stream.prototype.render = function() {
    var j, len, ref, results, symbol;
    ref = this.symbols;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      symbol = ref[j];
      if (symbol.first) {
        fc(0.55, 1, 0.67, symbol.opacity);
      } else {
        fc(0, 1, 0.27, symbol.opacity);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      results.push(symbol.setToRandomSymbol());
    }
    return results;
  };

  return Stream;

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2tldGNoLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBQSxPQUFBLEdBQVU7O0FBQ1YsWUFBQSxHQUFlOztBQUNmLFVBQUEsR0FBYTs7QUFFYixLQUFBLEdBQVEsU0FBQTtBQUNOLE1BQUE7RUFBQSxZQUFBLENBQWEsTUFBTSxDQUFDLFVBQXBCLEVBQWdDLE1BQU0sQ0FBQyxXQUF2QztFQUNBLENBQUEsR0FBSTtBQUNKO0FBQUEsT0FBQSxxQ0FBQTs7SUFDRSxNQUFBLEdBQWEsSUFBQSxNQUFBLENBQUE7SUFDYixNQUFNLENBQUMsZUFBUCxDQUF1QixDQUF2QixFQUEwQixNQUFBLENBQU8sQ0FBQyxJQUFSLEVBQWMsQ0FBZCxDQUExQjtJQUNBLE9BQU8sQ0FBQyxJQUFSLENBQWEsTUFBYjtJQUNBLENBQUEsSUFBSztBQUpQO0VBS0EsUUFBQSxDQUFTLFVBQVQ7U0FDQSxRQUFBLENBQVMsVUFBVDtBQVRNOztBQVdSLElBQUEsR0FBTyxTQUFBO0FBQ0wsTUFBQTtFQUFBLEVBQUEsQ0FBRyxDQUFIO0FBQ0E7T0FBQSx5Q0FBQTs7aUJBQ0UsTUFBTSxDQUFDLE1BQVAsQ0FBQTtBQURGOztBQUZLOztBQUtEO0VBQ1UsZ0JBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxLQUFULEVBQWlCLE1BQWpCLEVBQXlCLFFBQXpCO0lBQUMsSUFBQyxDQUFBLElBQUQ7SUFBSSxJQUFDLENBQUEsSUFBRDtJQUFJLElBQUMsQ0FBQSxRQUFEO0lBQVEsSUFBQyxDQUFBLFFBQUQ7SUFBUSxJQUFDLENBQUEsVUFBRDtJQUFhLElBQUMsQ0FBQSxjQUFELEdBQWtCLEtBQUEsQ0FBTSxNQUFBLENBQU8sQ0FBUCxFQUFVLEVBQVYsQ0FBTjtFQUF4RDs7bUJBQ2QsSUFBQSxHQUFPLFNBQUE7V0FBRyxJQUFDLENBQUEsQ0FBRCxHQUFRLElBQUMsQ0FBQSxDQUFELElBQU0sTUFBVCxHQUFxQixDQUFyQixHQUE0QixJQUFDLENBQUEsQ0FBRCxJQUFNLElBQUMsQ0FBQTtFQUEzQzs7bUJBQ1AsaUJBQUEsR0FBb0IsU0FBQTtJQUNsQixJQUFHLFVBQUEsR0FBYSxJQUFDLENBQUEsY0FBZCxLQUFnQyxDQUFuQztNQUNFLElBQUcsTUFBQSxDQUFPLENBQVAsRUFBVSxDQUFWLENBQUEsR0FBZSxDQUFsQjtlQUF5QixJQUFDLENBQUEsS0FBRCxHQUFTLE1BQU0sQ0FBQyxZQUFQLENBQW9CLE1BQUEsR0FBUyxLQUFBLENBQU0sTUFBQSxDQUFPLENBQVAsRUFBVSxFQUFWLENBQU4sQ0FBN0IsRUFBbEM7T0FBQSxNQUFBO2VBQ0ssSUFBQyxDQUFBLEtBQUQsR0FBUyxLQUFBLENBQU0sTUFBQSxDQUFPLENBQVAsRUFBUyxDQUFULENBQU4sRUFEZDtPQURGOztFQURrQjs7Ozs7O0FBS2hCO0VBQ1MsZ0JBQUE7SUFDWixJQUFDLENBQUEsT0FBRCxHQUFXO0lBQ1gsSUFBQyxDQUFBLFlBQUQsR0FBZ0IsS0FBQSxDQUFNLE1BQUEsQ0FBTyxDQUFQLEVBQVUsRUFBVixDQUFOO0lBQ2hCLElBQUMsQ0FBQSxLQUFELEdBQVMsTUFBQSxDQUFPLENBQVAsRUFBVSxFQUFWO0VBSEc7O21CQUliLGVBQUEsR0FBaUIsU0FBQyxDQUFELEVBQUksQ0FBSjtBQUNmLFFBQUE7SUFBQSxPQUFBLEdBQVU7SUFDVixLQUFBLEdBQVEsQ0FBQSxLQUFLLEtBQUEsQ0FBTSxNQUFBLENBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBTjtBQUNiO0FBQUE7U0FBQSxxQ0FBQTs7TUFDRSxNQUFBLEdBQWEsSUFBQSxNQUFBLENBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxJQUFDLENBQUEsS0FBWixFQUFrQixLQUFsQixFQUF3QixPQUF4QjtNQUNiLE1BQU0sQ0FBQyxpQkFBUCxDQUFBO01BQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsTUFBZDtNQUNBLE9BQUEsSUFBVyxDQUFBLEdBQUksSUFBQyxDQUFBLFlBQUwsR0FBb0I7TUFDL0IsQ0FBQSxJQUFLO21CQUNMLEtBQUEsR0FBUTtBQU5WOztFQUhlOzttQkFVakIsTUFBQSxHQUFTLFNBQUE7QUFDUCxRQUFBO0FBQUE7QUFBQTtTQUFBLHFDQUFBOztNQUNFLElBQUcsTUFBTSxDQUFDLEtBQVY7UUFBcUIsRUFBQSxDQUFHLElBQUgsRUFBUyxDQUFULEVBQVksSUFBWixFQUFrQixNQUFNLENBQUMsT0FBekIsRUFBckI7T0FBQSxNQUFBO1FBQ0ssRUFBQSxDQUFHLENBQUgsRUFBTSxDQUFOLEVBQVMsSUFBVCxFQUFlLE1BQU0sQ0FBQyxPQUF0QixFQURMOztNQUVBLElBQUEsQ0FBSyxNQUFNLENBQUMsS0FBWixFQUFtQixNQUFNLENBQUMsQ0FBMUIsRUFBNkIsTUFBTSxDQUFDLENBQXBDO01BQ0EsTUFBTSxDQUFDLElBQVAsQ0FBQTttQkFDQSxNQUFNLENBQUMsaUJBQVAsQ0FBQTtBQUxGOztFQURPIiwic291cmNlc0NvbnRlbnQiOlsic3RyZWFtcyA9IFtdXHJcbmZhZGVJbnRlcnZhbCA9IDEuNlxyXG5zeW1ib2xTaXplID0gMTRcclxuXHJcbnNldHVwID0gLT4gXHJcbiAgY3JlYXRlQ2FudmFzIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICB4ID0gMFxyXG4gIGZvciBpIGluIHJhbmdlIHdpZHRoIC8gc3ltYm9sU2l6ZVxyXG4gICAgc3RyZWFtID0gbmV3IFN0cmVhbSgpXHJcbiAgICBzdHJlYW0uZ2VuZXJhdGVTeW1ib2xzIHgsIHJhbmRvbSAtMjAwMCwgMFxyXG4gICAgc3RyZWFtcy5wdXNoIHN0cmVhbVxyXG4gICAgeCArPSBzeW1ib2xTaXplXHJcbiAgdGV4dEZvbnQgJ0NvbnNvbGFzJ1xyXG4gIHRleHRTaXplIHN5bWJvbFNpemVcclxuXHJcbmRyYXcgPSAtPlxyXG4gIGJnIDBcclxuICBmb3Igc3RyZWFtIGluIHN0cmVhbXNcclxuICAgIHN0cmVhbS5yZW5kZXIoKVxyXG5cclxuY2xhc3MgU3ltYm9sXHJcbiAgY29uc3RydWN0b3IgOiAoQHgsIEB5LCBAc3BlZWQsIEBmaXJzdCwgQG9wYWNpdHkpIC0+XHRAc3dpdGNoSW50ZXJ2YWwgPSByb3VuZCByYW5kb20gMiwgMjVcclxuICByYWluIDogLT4gQHkgPSBpZiBAeSA+PSBoZWlnaHQgdGhlbiAwIGVsc2UgQHkgKz0gQHNwZWVkXHJcbiAgc2V0VG9SYW5kb21TeW1ib2wgOiAoKSAtPlxyXG4gICAgaWYgZnJhbWVDb3VudCAlIEBzd2l0Y2hJbnRlcnZhbCA9PSAwXHJcbiAgICAgIGlmIHJhbmRvbSgwLCA1KSA+IDEgdGhlbiBAdmFsdWUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlIDB4MzBBMCArIHJvdW5kIHJhbmRvbSAwLCA5NlxyXG4gICAgICBlbHNlIEB2YWx1ZSA9IHJvdW5kIHJhbmRvbSAwLDlcclxuXHJcbmNsYXNzIFN0cmVhbVxyXG5cdGNvbnN0cnVjdG9yIDogLT5cclxuXHQgIEBzeW1ib2xzID0gW11cclxuXHQgIEB0b3RhbFN5bWJvbHMgPSByb3VuZCByYW5kb20gNSwgMzVcclxuXHQgIEBzcGVlZCA9IHJhbmRvbSA1LCAyMlxyXG4gIGdlbmVyYXRlU3ltYm9scyA6KHgsIHkpIC0+XHJcbiAgICBvcGFjaXR5ID0gMVxyXG4gICAgZmlyc3QgPSAxID09IHJvdW5kIHJhbmRvbSAwLCA0XHJcbiAgICBmb3IgaSBpbiByYW5nZSBAdG90YWxTeW1ib2xzXHJcbiAgICAgIHN5bWJvbCA9IG5ldyBTeW1ib2wgeCx5LEBzcGVlZCxmaXJzdCxvcGFjaXR5XHJcbiAgICAgIHN5bWJvbC5zZXRUb1JhbmRvbVN5bWJvbCgpXHJcbiAgICAgIEBzeW1ib2xzLnB1c2ggc3ltYm9sXHJcbiAgICAgIG9wYWNpdHkgLT0gMSAvIEB0b3RhbFN5bWJvbHMgLyBmYWRlSW50ZXJ2YWwgXHJcbiAgICAgIHkgLT0gc3ltYm9sU2l6ZVxyXG4gICAgICBmaXJzdCA9IGZhbHNlXHJcbiAgcmVuZGVyIDogKCkgLT5cclxuICAgIGZvciBzeW1ib2wgaW4gQHN5bWJvbHNcclxuICAgICAgaWYgc3ltYm9sLmZpcnN0IHRoZW4gZmMgMC41NSwgMSwgMC42Nywgc3ltYm9sLm9wYWNpdHlcclxuICAgICAgZWxzZSBmYyAwLCAxLCAwLjI3LCBzeW1ib2wub3BhY2l0eVxyXG4gICAgICB0ZXh0IHN5bWJvbC52YWx1ZSwgc3ltYm9sLngsIHN5bWJvbC55XHJcbiAgICAgIHN5bWJvbC5yYWluKClcclxuICAgICAgc3ltYm9sLnNldFRvUmFuZG9tU3ltYm9sKCkiXX0=
//# sourceURL=C:\Lab\2017\018-Green Rain\sketch.coffee