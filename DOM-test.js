window.onload = function() {
  let h1 = document.createElement('h1');
  let h1Text = document.createTextNode('Oh herro');
  h1.appendChild(h1Text);
  document.body.appendChild(h1);
  //window.alert('h1 created');
}
function myAlert() {
  log('Test header clicked!');
  log(document.getElementById('start')); //logs [object HTMLButtonElement]
  log(document.getElementsByClassName('container')); //logs [object HTMLCollection]
  log(document.getElementsByTagName('button')); //logs [object HTMLCollection]
  log(document.querySelector('h1')); //logs [object HTMLHeadingElement]
  log(document.querySelectorAll('h1')); //logs [object NodeList]
  log(document.getElementById('start').nodeName); //logs BUTTON
  log(document.createTextNode('text').nodeValue); //logs text
  log(document.getElementById('start').nodeType); //logs 1
}
document.getElementById('testHead').addEventListener('click', myAlert); //The generally best method
function myChange() {
  document.getElementById("demo").innerHTML = "Paragraph <em>changed</em>."; //innerHTML is needed here to parse HTML(slower).
}
document.getElementById("button1").onclick = myChange;
function myChange2() {
  document.getElementById('demo2').textContent = 'Text changed!'; //testContent does not parse HTML(faster);
  document.getElementById('demo2').style.color = 'blue';
}
function log(msg) {
  //let outputDiv = document.getElementById('output'); //This works the same as the line of code below.
  let outputDiv = document.querySelector('#output');
  outputDiv.appendChild(document.createTextNode(msg));
  outputDiv.appendChild(document.createElement('br'));
}

let linkList = document.getElementById('list');
linkList.children[0].addEventListener('click', myAlert2);
log(linkList.children[0]);
function myAlert2() {
  log(linkList); //logs [object HTMLUListElement]
  log(linkList.childNodes[0]); //logs [object Text]
  log(linkList.childNodes[0].childNodes[0]); //logs undefined
  log(linkList.firstChild.firstChild); //logs null
  log(linkList.nextSibling.previousSibling); //logs [object HTMLUListElement]
  log('');
  log(linkList.firstElementChild); //logs [object HTMLLIElement]
  log(linkList.firstElementChild.firstChild); //logs http://127.0.0.1:5500/DOM-test.html#
  log(linkList.firstElementChild.firstElementChild); //logs http://127.0.0.1:5500/DOM-test.html#
  log(linkList.firstElementChild.firstElementChild.firstChild); //logs [object Text]
  log('break');
  log(linkList.className);
  log(linkList.getAttribute('class'));
  log(linkList.children[0].className);
  log(linkList.children[0].getAttribute('class'));
  log(linkList.firstElementChild.className);
  log(linkList.firstElementChild.getAttribute('class'));
  log(linkList.firstElementChild.firstElementChild.className);
  log(linkList.firstElementChild.firstElementChild.getAttribute('class'));
}
myAlert2();