function addMusicSearchButton() {
  if (buttonNotNeeded()) {
    console.log("button not needed!");
    return;
  }

  // Get elements from YouTube website
  var videoTitle = document.getElementById("eow-title").innerHTML.trim();
  var button = document.getElementsByClassName("action-panel-trigger-share")[0];
  var buttonDiv = document.getElementById("watch8-secondary-actions");

  // Clone Share button and edit it's data
  var clonedButton = button.cloneNode(true);
  clonedButton.className = "yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-gmusic-search yt-uix-button-has-icon no-icon-markup pause-resume-autoplay yt-uix-tooltip";
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
  console.log("added button");
}

function buttonNotNeeded() {
  var buttons = document.getElementsByClassName("yt-uix-button-gmusic-search");
  console.log(buttons.length);
  return ((!('/watch' === location.pathname)) || buttons.length > 0);
}

/**
 * Listen to transition events. i.e. YouTube page has changed and progress bar
 * (thin loading indicator at top) has shown.
 */
(document.body || document.documentElement).addEventListener('transitionend', function(event) {
  console.log("transition event");
  if (event.propertyName === 'width' && event.target.id === 'progress') {
    addMusicSearchButton();
  }
}, true);

/**
 * Add the button whenever window gains focus
 */
window.onfocus = function() {
  addMusicSearchButton();
};

// For regular page-open as we execute after page load
addMusicSearchButton();
