// Generated by CoffeeScript 1.11.1
var gissning, meddelande, slump;

slump = Math.floor(16 * Math.random());

gissning = -1;

meddelande = "Gissa ett tal!";

while (gissning !== slump) {
  gissning = parseInt(prompt(meddelande));
  if (gissning < slump) {
    meddelande = "Högre!";
  } else if (gissning > slump) {
    meddelande = "Lägre!";
  }
}

alert("Korrekt!");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2tldGNoLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBQSxLQUFBLEdBQVEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxFQUFBLEdBQUssSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFoQjs7QUFDUixRQUFBLEdBQVcsQ0FBQzs7QUFDWixVQUFBLEdBQWE7O0FBQ2IsT0FBTSxRQUFBLEtBQVksS0FBbEI7RUFDQyxRQUFBLEdBQVcsUUFBQSxDQUFTLE1BQUEsQ0FBTyxVQUFQLENBQVQ7RUFDWCxJQUFHLFFBQUEsR0FBVyxLQUFkO0lBQXlCLFVBQUEsR0FBYSxTQUF0QztHQUFBLE1BQ0ssSUFBRyxRQUFBLEdBQVcsS0FBZDtJQUF5QixVQUFBLEdBQWEsU0FBdEM7O0FBSE47O0FBSUEsS0FBQSxDQUFNLFVBQU4iLCJzb3VyY2VzQ29udGVudCI6WyJzbHVtcCA9IE1hdGguZmxvb3IgMTYgKiBNYXRoLnJhbmRvbSgpXHJcbmdpc3NuaW5nID0gLTFcclxubWVkZGVsYW5kZSA9IFwiR2lzc2EgZXR0IHRhbCFcIlxyXG53aGlsZSBnaXNzbmluZyAhPSBzbHVtcFxyXG5cdGdpc3NuaW5nID0gcGFyc2VJbnQgcHJvbXB0IG1lZGRlbGFuZGVcclxuXHRpZiBnaXNzbmluZyA8IHNsdW1wIHRoZW4gbWVkZGVsYW5kZSA9IFwiSMO2Z3JlIVwiXHJcblx0ZWxzZSBpZiBnaXNzbmluZyA+IHNsdW1wIHRoZW4gbWVkZGVsYW5kZSA9IFwiTMOkZ3JlIVwiXHJcbmFsZXJ0IFwiS29ycmVrdCFcIiJdfQ==
//# sourceURL=C:\Lab\2017\006-GuessNumberText\sketch.coffee