
function messageReceiver(request, sender, sendResponse) {
    if(request.url) {
        if(request.url.includes("https://namu.wiki/w/")) {
            removeBadge()
            buildBadge()
        }
        else {
            removeBadge()
        }
    }
}

chrome.runtime.onMessage.addListener(messageReceiver);