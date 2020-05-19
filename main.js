
function addStyleString(str) {
  var node = document.createElement('style');
  node.innerHTML = str;
  document.body.appendChild(node);
}

function addJavascriptString(str) {
  var node = document.createElement('script');
  node.innerHTML = str;
  document.body.appendChild(node);
}

function createNewNode(type, str){
  var node = document.createElement(type);
  node.innerHTML = str;
  return node;
}

function showIP(){
  console.log('IP of the stranger is: ');
}

addStyleString('#videologo{ opacity: 0 !important; }');


document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //TODO: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
    const servers = "serverManager.setServerList(['front1'," +
        "  'front2'," +
        "  'front3'," +
        "  'front4'," +
        "  'front5'," +
        "  'front7'," +
        "  'front8'," +
        "  'front9'," +
        "  'front10'," +
        "  'front11'," +
        "  'front12'," +
        "  'front13'," +
        "  'front14'," +
        "  'front15'," +
        "  'front17'," +
        "  'front18'," +
        "  'front19'," +
        "  'front20'," +
        "  'front22'," +
        "  'front23'," +
        "  'front24'," +
        "  'front25'," +
        "  'front26'," +
        "  'front27'," +
        "  'front28'," +
        "  'front29'," +
        "  'front30'," +
        "  'front31'," +
        "  'front32'])";
    addJavascriptString('antinudeServers = ["you-will-not-report.never"];');
    addJavascriptString('serverManager.unsetKnownGood();');
    addJavascriptString(servers);
    addJavascriptString('serverManager.pickServer();');

    showIP();
  }
}
