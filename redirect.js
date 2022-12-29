window.onload = function redirectSafari() {
    if (navigator.userAgent.indexOf('Safari', 'iPhone') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
        window.location.replace("https://xn--9x8h.madebyesmel.com");
    }
}