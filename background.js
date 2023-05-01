chrome.action.onClicked.addListener(function(tab) {
  var redirectUrl = 'https://myezproxy.vub.ac.be/login?url=' + tab.url;
  chrome.tabs.update({url: redirectUrl});
});