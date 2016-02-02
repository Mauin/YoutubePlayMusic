var itemId = "googleMusicSearch";

function createContextMenu() {
  chrome.contextMenus.create({
    title: "Search in Google Music",
    id: itemId,
    contexts: ['selection']
  });
}

chrome.runtime.onInstalled.addListener(function() {
  createContextMenu();
});

chrome.contextMenus.onClicked.addListener(function(itemData) {
  if (itemData.menuItemId != itemId) {
    return;
  }
  var searchUrl = "https://play.google.com/music/listen?u=0#/sr/" + itemData.selectionText;
  window.open(searchUrl);
});
