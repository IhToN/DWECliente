// 1
var clientInfo = () => {
    document.write("<table>");

    document.write("<tr><td>AppCodeName</td><td>" + window.navigator.appCodeName + "</td></tr>");
    document.write("<tr><td>AppName</td><td>" + window.navigator.appName + "</td></tr>");
    document.write("<tr><td>AppVersion</td><td>" + window.navigator.appVersion + "</td></tr>");
    document.write("<tr><td>Language</td><td>" + window.navigator.language + "</td></tr>");
    document.write("<tr><td>Cookies Enabled</td><td>" + window.navigator.cookieEnabled + "</td></tr>");

    document.write("</table>");
};

// 2
var screenInfo = () => {
    document.write("<table>");

    document.write("<tr><td>Height</td><td>" + window.screen.height + "</td></tr>");
    document.write("<tr><td>Width</td><td>" + window.screen.width + "</td></tr>");
    document.write("<tr><td>Color Depth</td><td>" + window.screen.colorDepth + "</td></tr>");
    document.write("<tr><td>Pixel Depth</td><td>" + window.screen.pixelDepth + "</td></tr>");

    document.write("</table>");
};