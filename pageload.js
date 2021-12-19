let htmlSpeedMbps = document.getElementsByTagName('h3')[0];
let htmlSpeedKbps = document.getElementsByTagName('h3')[1];
let htmlSpeedBps = document.getElementsByTagName('h3')[2];

var imageAddr = "https://jorit.vasconezgerlach.de/assets/imgs/jorit-portrait-photo-landingsection-compressed.png" + "?r=" + Math.random();
var download = new Image();
var downloadSize = 854585;
var startTime, endTime;

download.onload = function () {
          endTime = (new Date()).getTime();
          showResults();
}

startTime = (new Date()).getTime();
download.src = imageAddr;

function showResults() {
          var duration = (endTime - startTime) / 1000;
          var bitsLoaded = downloadSize * 8;
          var speedBps = (bitsLoaded / duration).toFixed(2);
          var speedKbps = (speedBps / 1024).toFixed(2);
          var speedMbps = (speedKbps / 1024).toFixed(2);
          htmlSpeedMbps.textContent = speedMbps;
          htmlSpeedKbps.textContent = speedKbps;
          htmlSpeedBps.textContent = speedBps;
}