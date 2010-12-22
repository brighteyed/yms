document.addEventListener("mouseup", function(event) {
  chrome.extension.sendRequest(
    { 
      action: "updateContextMenu", 
      text: window.getSelection().toString()
    }
  );
});
