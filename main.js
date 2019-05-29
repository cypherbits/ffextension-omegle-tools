
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
  var IPmsg = 'IP of the stranger is: 127.0.0.1';

  var logbox = document.getElementsByClassName('logbox')[0];

  logbox.insertBefore(createNewNode('h3', IPmsg), logbox.firstChild);
}

addStyleString('#videologo{ opacity: 0 !important; }');

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    addJavascriptString('antinudeServers = ["you-will-not-report.never"];console.log(antinudeServers);');
    showIP();
  }
}
