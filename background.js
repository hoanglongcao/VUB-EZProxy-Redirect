chrome.action.onClicked.addListener(function(tab) {
  var redirectUrl;
  if (tab.url.includes('eeexplore.ieee.org')) {
    var arnumber = tab.url.match(/\/(\d+)$/)[1];
    redirectUrl = 'https://ieeexplore-ieee-org.myezproxy.vub.ac.be/stamp/stamp.jsp?tp=&arnumber=' + arnumber;
  } else if (tab.url.includes('dl.acm.org')) {
    var doiParts = tab.url.match(/\/doi\/(.*)\/(.*)$/);
    var doiPart1 = encodeURIComponent(doiParts[1]);
    var doiPart2 = encodeURIComponent(doiParts[2]);
    redirectUrl = 'https://dl-acm-org.myezproxy.vub.ac.be/doi/pdf/' + doiPart1 + '/' + doiPart2;
  } else {
    redirectUrl = 'https://myezproxy.vub.ac.be/login?url=' + tab.url;
  }
  chrome.tabs.create({url: redirectUrl, index: tab.index + 1});
});