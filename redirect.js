function checkbrowser() {
    console.log(navigator.userAgent.indexOf("Safari"))
    if (navigator.userAgent.indexOf("Safari") === -1) {
    document.location.href = "https://xn--98h.madebyesmel.com"
}
};