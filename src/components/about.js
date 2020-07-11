(function() {
    'use strict';

    var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      img = new Image(),
      currentFrame = 0,
      totalFrame = 10,
      offset = .01,
      width,
      height,
      imgData,
      data,
        
      pr = window.devicePixelRatio || 1,
      w = window.innerWidth,
      h = window.innerHeight,
        
      requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  
    window.requestAnimationFrame = requestAnimationFrame;
  
    img.crossOrigin = "Anonymous";
    img.src = 'https://zupra.github.io/test/filter.jpg';
    img.onload = function() {
      init();
      glitchAnimation();
    };
  
    var init = function() {
      
      canvas.width = width = w * pr;
      canvas.height = height = h * pr;
      
      //anvas.width = width = img.width; //* .5;
      offset = width * offset;
      //canvas.height = height = ~~(img.height * (width - offset * 2) / img.width);
      
      //document.querySelector('.glitch-image').style.width = width + 'px';
      //document.querySelector('.glitch-image').style.height = height + 'px';
    }.bind(this);
  
    var glitchAnimation = function() {
  
      if (!(currentFrame % totalFrame) || currentFrame > totalFrame) {
  
        clearCanvas();
  
        ctx.drawImage(img,
          0,
          0,
          img.width,
          img.height,
          offset,
          0,
          width - offset * 2,
          height);
  
        imgData = ctx.getImageData(0, 0, width, height);
  
        imgData = pixelProcessor(imgData, 4, pixelCooler);
  
        ctx.putImageData(imgData, 0, 0);
  
        currentFrame = 0;
      }
  
      if (currentFrame === randInt(0, totalFrame)) {
  
        imgData = pixelProcessor(imgData, 1, pixelFlick);
  
        ctx.putImageData(imgData, 0, 0);
  
        drawGlitch(width, height, randInt(3, 10), glitchBlock);
  
        drawGlitch(width, height, randInt(3, 30), glitchLine);
      }
  
      currentFrame++;
  
      window.requestAnimationFrame(glitchAnimation);
  
    };
  
    var pixelFlick = function(i, d) {
      d[i] = d[i + 16];
    };
  
    var pixelCooler = function(i, d) {
      d[i] = 1;
      d[i + 1] += randInt(2, 5);
      d[i + 2] *= randInt(1, 3) + 8;
    };
  
    var glitchBlock = function(i, x, y) {
      if (i > 3) {
        var spliceHeight = 1 + randInt(0, 10);
  
        ctx.drawImage(canvas,
          x,
          y,
          x,
          spliceHeight,
          randInt(0, x),
          y,
          randInt(x, width),
          spliceHeight);
      }
    };
  
    var glitchLine = function(i, x, y) {
      var spliceHeight = 1 + randInt(1, 50);
  
      ctx.drawImage(canvas,
        offset,
        y,
        width - offset * 2,
        spliceHeight,
        1 + randInt(0, offset * 2), //-offset / 3 + randInt(0, offset / 1.5),
        y + randInt(0, 10),
        width - offset,
        spliceHeight);
    };
  
    var pixelProcessor = function(imageData, step, callback) {
      var data = imageData.data || [],
        step = step * 4 || 4;
  
      if (data.length) {
        var rgb = [];
  
        for (var i = 0; i < data.length; i += step) {
          callback && callback(i, data);
        }
  
        return imageData;
      } else {
        return imageData;
      }
    };
  
    var drawGlitch = function(width, height, amount, callback) {
      for (var i = 0; i < (amount || 10); i++) {
        var x = Math.random() * width + 1,
          y = Math.random() * height + 1;
  
        callback(i, x, y);
      }
    };
  
    var randInt = function(a, b) {
      return ~~(Math.random() * (b - a) + a);
    };
  
    var clearCanvas = function() {
      ctx.clearRect(0, 0, width, height);
    };
  })();