window.onload = function() {
  let h1 = document.createElement('h1');
  let h1Text = document.createTextNode('Oh herro');
  h1.appendChild(h1Text);
  document.body.appendChild(h1);
  window.alert('h1 created');
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
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
document.getElementById("button1").onclick = myChange;
function myChange2() {
  document.getElementById('demo2').innerHTML = 'Text changed!';
  document.getElementById('demo2').style.color = 'blue';
}
function log(msg) {
  //let outputDiv = document.getElementById('output'); //This works the same as the line of code below.
  let outputDiv = document.querySelector('#output');
  outputDiv.appendChild(document.createTextNode(msg));
  outputDiv.appendChild(document.createElement('br'));
}
