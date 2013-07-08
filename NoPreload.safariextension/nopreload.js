function setNoPreload() {
    var audioElements = document.getElementsByTagName('audio');

    // Set preload attribute to none for each element
    for (var i = 0; i < audioElements.length; i ++) {
        audioElements[i].setAttribute('preload', 'none');
        console.log('Preload unset')
    }
}

function messageHandler(messageEvent) {
    // if we get the stopPreload message, disable preload
    if (messageEvent.name == 'stopPreload') {
        setNoPreload();
    }
}

safari.self.addEventListener('message', messageHandler, true);

// Send a message to check whether blocking preload is allowed on this domain
safari.self.tab.dispatchMessage('shouldStopPreload', window.location.hostname);
