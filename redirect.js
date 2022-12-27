//let safariAgent = userAgentString.indexOf("Safari") > -1;

/*window.onload = function() {
    console.log(navigator.userAgent.indexOf("Safari"))
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        document.location.href = "https://xn--9x8h.madebyesmel.com"
    }
};*/

if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
    document.location = "https://xn--9x8h.madebyesmel.com"
  }