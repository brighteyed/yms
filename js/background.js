/** 
 * Search Yandex Market for selected text
 */
function doSearch(info, tab) {
  if (!info.selectionText || info.selectionText.length == 0)
    return;

  chrome.tabs.create(
    {
      "url": "http://market.yandex.ru/search.xml?text=" + encodeURIComponent(info.selectionText),
      "selected": false
    }
  );
}

// Create context menu item
var id = chrome.contextMenus.create({"title": chrome.i18n.getMessage("contextMenuItem"), 
		       "contexts": ["selection"], 
		       "onclick": doSearch});

