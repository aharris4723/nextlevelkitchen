var images = [
  'food1.jpg', 'food2.jpg','food3.jpeg'
]
var wrapper = document.getElementById("wrapper");

var i = 0;
setInterval(function() {
      wrapper.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 3000);