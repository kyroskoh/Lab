// Generated by CoffeeScript 1.11.1
var Stream, draw, fade, setup, streams, symbolSize;

streams = [];

fade = 0.95;

symbolSize = 30;

setup = function() {
  var j, len, ref, x;
  createCanvas(window.innerWidth, window.innerHeight);
  ref = range(0, width, symbolSize);
  for (j = 0, len = ref.length; j < len; j++) {
    x = ref[j];
    streams.push(new Stream(x, random(-2000, 0)));
  }
  textFont('Consolas');
  return textSize(symbolSize);
};

draw = function() {
  var j, len, results, stream;
  background(0, 150);
  results = [];
  for (j = 0, len = streams.length; j < len; j++) {
    stream = streams[j];
    results.push(stream.render());
  }
  return results;
};

Stream = (function() {
  function Stream(x1, y1, speed, symbols) {
    var i, j, len, ref;
    this.x = x1;
    this.y = y1;
    this.speed = speed != null ? speed : random(5, 22);
    this.symbols = symbols != null ? symbols : "";
    ref = range(random(5, 35));
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      this.symbols += String.fromCharCode(0x30A0 + round(random(96)));
    }
  }

  Stream.prototype.render = function() {
    var i, j, len, opacity, ref, symbol, y;
    opacity = 255;
    y = this.y;
    ref = this.symbols;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      symbol = ref[i];
      if (i === 0) {
        fill(140, 255, 170, opacity);
      } else {
        fill(0, 255, 70, opacity);
      }
      opacity *= fade;
      text(symbol, this.x, y);
      y -= symbolSize;
    }
    return this.y = this.y >= height + 35 * symbolSize ? 0 : this.y + this.speed;
  };

  return Stream;

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2tldGNoLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBQSxPQUFBLEdBQVU7O0FBQ1YsSUFBQSxHQUFPOztBQUNQLFVBQUEsR0FBYTs7QUFFYixLQUFBLEdBQVEsU0FBQTtBQUNQLE1BQUE7RUFBQSxZQUFBLENBQWEsTUFBTSxDQUFDLFVBQXBCLEVBQWdDLE1BQU0sQ0FBQyxXQUF2QztBQUNBO0FBQUEsT0FBQSxxQ0FBQTs7SUFDQyxPQUFPLENBQUMsSUFBUixDQUFpQixJQUFBLE1BQUEsQ0FBTyxDQUFQLEVBQVUsTUFBQSxDQUFPLENBQUMsSUFBUixFQUFjLENBQWQsQ0FBVixDQUFqQjtBQUREO0VBRUEsUUFBQSxDQUFTLFVBQVQ7U0FDQSxRQUFBLENBQVMsVUFBVDtBQUxPOztBQU9SLElBQUEsR0FBTyxTQUFBO0FBQ04sTUFBQTtFQUFBLFVBQUEsQ0FBVyxDQUFYLEVBQWEsR0FBYjtBQUNBO09BQUEseUNBQUE7O2lCQUFBLE1BQU0sQ0FBQyxNQUFQLENBQUE7QUFBQTs7QUFGTTs7QUFJRDtFQUNTLGdCQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsS0FBVCxFQUE4QixPQUE5QjtBQUNiLFFBQUE7SUFEYyxJQUFDLENBQUEsSUFBRDtJQUFJLElBQUMsQ0FBQSxJQUFEO0lBQUksSUFBQyxDQUFBLHdCQUFELFFBQU8sTUFBQSxDQUFPLENBQVAsRUFBUyxFQUFUO0lBQWMsSUFBQyxDQUFBLDRCQUFELFVBQVM7QUFDcEQ7QUFBQSxTQUFBLHFDQUFBOztNQUNDLElBQUMsQ0FBQSxPQUFELElBQVksTUFBTSxDQUFDLFlBQVAsQ0FBb0IsTUFBQSxHQUFTLEtBQUEsQ0FBTSxNQUFBLENBQU8sRUFBUCxDQUFOLENBQTdCO0FBRGI7RUFEYTs7bUJBR2QsTUFBQSxHQUFTLFNBQUE7QUFDUixRQUFBO0lBQUEsT0FBQSxHQUFVO0lBQ1YsQ0FBQSxHQUFJLElBQUMsQ0FBQTtBQUNMO0FBQUEsU0FBQSw2Q0FBQTs7TUFDQyxJQUFHLENBQUEsS0FBRyxDQUFOO1FBQWEsSUFBQSxDQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixPQUFwQixFQUFiO09BQUEsTUFBQTtRQUE4QyxJQUFBLENBQUssQ0FBTCxFQUFRLEdBQVIsRUFBYSxFQUFiLEVBQWlCLE9BQWpCLEVBQTlDOztNQUNBLE9BQUEsSUFBVztNQUNYLElBQUEsQ0FBSyxNQUFMLEVBQWEsSUFBQyxDQUFBLENBQWQsRUFBaUIsQ0FBakI7TUFDQSxDQUFBLElBQUs7QUFKTjtXQUtBLElBQUMsQ0FBQSxDQUFELEdBQVEsSUFBQyxDQUFBLENBQUQsSUFBTSxNQUFBLEdBQU8sRUFBQSxHQUFHLFVBQW5CLEdBQW1DLENBQW5DLEdBQTBDLElBQUMsQ0FBQSxDQUFELEdBQUssSUFBQyxDQUFBO0VBUjdDIiwic291cmNlc0NvbnRlbnQiOlsic3RyZWFtcyA9IFtdXHJcbmZhZGUgPSAwLjk1XHJcbnN5bWJvbFNpemUgPSAzMFxyXG5cclxuc2V0dXAgPSAtPiBcclxuXHRjcmVhdGVDYW52YXMgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodFxyXG5cdGZvciB4IGluIHJhbmdlIDAsd2lkdGgsc3ltYm9sU2l6ZVxyXG5cdFx0c3RyZWFtcy5wdXNoIG5ldyBTdHJlYW0geCwgcmFuZG9tIC0yMDAwLCAwXHJcblx0dGV4dEZvbnQgJ0NvbnNvbGFzJ1xyXG5cdHRleHRTaXplIHN5bWJvbFNpemVcclxuXHJcbmRyYXcgPSAtPlxyXG5cdGJhY2tncm91bmQgMCwxNTBcclxuXHRzdHJlYW0ucmVuZGVyKCkgZm9yIHN0cmVhbSBpbiBzdHJlYW1zXHJcblxyXG5jbGFzcyBTdHJlYW1cclxuXHRjb25zdHJ1Y3RvciA6IChAeCwgQHksIEBzcGVlZD1yYW5kb20oNSwyMiksIEBzeW1ib2xzPVwiXCIpIC0+XHJcblx0XHRmb3IgaSBpbiByYW5nZSByYW5kb20gNSwgMzVcclxuXHRcdFx0QHN5bWJvbHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSAweDMwQTAgKyByb3VuZCByYW5kb20gOTZcclxuXHRyZW5kZXIgOiAtPlxyXG5cdFx0b3BhY2l0eSA9IDI1NVxyXG5cdFx0eSA9IEB5XHJcblx0XHRmb3Igc3ltYm9sLGkgaW4gQHN5bWJvbHNcclxuXHRcdFx0aWYgaT09MCB0aGVuIGZpbGwgMTQwLCAyNTUsIDE3MCwgb3BhY2l0eSBlbHNlIGZpbGwgMCwgMjU1LCA3MCwgb3BhY2l0eVxyXG5cdFx0XHRvcGFjaXR5ICo9IGZhZGVcclxuXHRcdFx0dGV4dCBzeW1ib2wsIEB4LCB5XHJcblx0XHRcdHkgLT0gc3ltYm9sU2l6ZVxyXG5cdFx0QHkgPSBpZiBAeSA+PSBoZWlnaHQrMzUqc3ltYm9sU2l6ZSB0aGVuIDAgZWxzZSBAeSArIEBzcGVlZCJdfQ==
//# sourceURL=C:\Lab\2017\018-Green Rain\sketch.coffee