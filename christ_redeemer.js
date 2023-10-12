function addPixelsToScreen(pixels) {
  for (var i = 0; i < pixels.length; i++) {
    var pixelInfo = pixels[i];
    var x = pixelInfo[0];
    var y = pixelInfo[1];
    var color = pixelInfo[2];

    var pixel = new Circle(1); // Create a small circle as a pixel
    pixel.setPosition(x, y);
    pixel.setColor(color);
    add(pixel);
  }
}


addPixelsToScreen(pixel);