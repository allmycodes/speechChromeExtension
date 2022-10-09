document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('hello').addEventListener("click",function() {
        chrome.windows.create({
            // Just use the full URL if you need to open an external page
            url: chrome.runtime.getURL("./STT.html")
          });
      });
    });