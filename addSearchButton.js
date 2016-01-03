// Get elements from YouTube website
var videoTitle = document.getElementById("eow-title").innerHTML.trim();
var button = document.getElementsByClassName("action-panel-trigger-share")[0];
var buttonDiv = document.getElementById("watch8-secondary-actions");

// Clone Share button and edit it's data
var clonedButton = button.cloneNode(true);
clonedButton.className = "yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup pause-resume-autoplay yt-uix-tooltip";
delete clonedButton.dataset.buttonToggle;
delete clonedButton.dataset.triggerFor;
clonedButton.title = "Google Music";
clonedButton.dataset.tooltipText = "Search in Google Music";

var childSpan = clonedButton.getElementsByClassName("yt-uix-button-content")[0];
childSpan.innerHTML = "Music Search"

// Add click listener to sarch button
clonedButton.addEventListener('click', function() {
  var searchUrl = "https://play.google.com/music/listen?u=0#/sr/" + videoTitle;
  window.open(searchUrl);
});

// Add new button to website
buttonDiv.appendChild(clonedButton);
