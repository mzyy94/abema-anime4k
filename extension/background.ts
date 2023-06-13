chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        files: ['dist/anime4k.js', 'dist/index.js']
    });
});
