let output = document.querySelector('#output');

//Custom logging function
function log(msg) {
  output.appendChild(document.createTextNode(msg));
  output.appendChild(document.createElement('br'));
}

//Selecting Nodes
function selectingNodes() {
  output.innerHTML = '';
  log('Display Log clicked!');
  log('tested div: ' + document.getElementById('testHead').outerHTML);
  log('document.getElementById("testHead").outerHTML = ' + document.getElementById('testHead').outerHTML);
  log('document.getElementsByClassName("testClass")[0].outerHTML = ' + document.getElementsByClassName('testClass')[0].outerHTML);
  log('document.getElementsByTagName("h1")[0].outerHTML = ' + document.getElementsByTagName('h1')[0].outerHTML);
  log("document.querySelector('h1').outerHTML = " + document.querySelector('h1').outerHTML);
  log("document.querySelectorAll('h1')[0].outerHTML = " +document.querySelectorAll('h1')[0].outerHTML);
}
document.getElementById('testHead').addEventListener('click', selectingNodes); //The generally best method.


//Node properties
function nodeProperties() {
  output.innerHTML = ''
  let div = document.getElementById('1');
  log('tested div: ' + div.outerHTML);
  log('document.nodeName = ' + document.nodeName);
  log("document.nodeType = " + document.nodeType);
  log("div.nodeName = " + div.nodeName);
  log("div.nodeType = " + div.nodeType);
  log('div.textContent = ' + div.textContent);
  log("document.createTextNode('test text').nodeName = " + document.createTextNode('test text').nodeName);
  log("document.createTextNode('test text').nodeType = " + document.createTextNode('test text').nodeType);
  log("document.createTextNode('test text').nodeValue = " + document.createTextNode('test text').nodeValue);
  log("document.createTextNode('test text').textContent = " + document.createTextNode('test text').textContent);
  log("document.createComment('test comment').nodeName = " + document.createComment('test comment').nodeName);
  log("document.createComment('test comment').nodeType = " + document.createComment('test comment').nodeType);
  log("document.createComment('test comment').nodeValue = " + document.createComment('test comment').nodeValue);
  log("document.createComment('test comment').textContent = " + document.createComment('test comment').textContent);
}
//nodeProperties();


//Element properties?
function elementProperties() {
  output.innerHTML = '';
  let div = document.getElementById('4');
  log('tested div: ' + div.outerHTML);
  log('div.outerHTML = ' + div.outerHTML);
  log('div.innerHTML = ' + div.innerHTML);
  log('div.tagName = ' + div.tagName);
  log(div.classList);
  log(div.className);
  log(div.attributes);
  log(div.attributes[0].nodeName);
  log(div.attributes[0].nodeType);
  log(div.attributes[0].nodeValue);
  log(div.attributes[0].name);
  log(div.attributes[0].value);
}
elementProperties();

//Traversing the DOM
function traverseDOM() {
  let div = document.getElementById('1');
  log('tested div: ' + div.outerHTML);
  log('div.parentNode = ' + div.parentNode);
  log('div.childNodes = ' + div.childNodes);
  log('div.childNodes[0].nodeValue = ' + div.childNodes[0].nodeValue);
  log('div.firstChild.nodeValue = ' + div.firstChild.nodeValue);
  log('div.lastChild.outerHTML = ' + div.lastChild.outerHTML);
  log('div.firstChild.nextSibling.outerHTML = ' + div.firstChild.nextSibling.outerHTML);
  log('div.lastChild.previousSibling.nodeValue = ' + div.lastChild.previousSibling.nodeValue);
  log('');
  log('div.children = ' + div.children);
  log('div.children[0] = ' + div.children[0].outerHTML);
  log('div.firstElementChild.outerHTML = ' + div.firstElementChild.outerHTML);
  log('div.firstElementChild.nextElementSibling.outerHTML = ' + div.firstElementChild.nextElementSibling.outerHTML);
  log('div.lastElementChild.outerHTML = ' + div.lastElementChild.outerHTML);
  log('div.lastElementChild.previousElementSibling.outerHTML = ' + div.lastElementChild.previousElementSibling.outerHTML);
}
//traverseDOM();



//Accessing and modifying HTML attributes and respective DOM properties
function logAttributeNotes() {
  //Accessing and modifying HTML attributes and respective DOM properties
  log('Accessing and modifying HTML attributes and respective DOM properties:')
  let elem1 = document.getElementById('elem1');
  log('elem1.outerHTML = ' + elem1.outerHTML)
  log('');

  //Accessing DOM attribute properties using Element.attributes property
  log('Accessing DOM attribute properties using Element.attributes property:');
  log('elem1.attributes = ' + elem1.attributes); //Using the attributes property which returns a NamedNodeMap object.
  log('elem1.attributes[0] = ' + elem1.attributes[0]);
  log('elem1.attributes[0].name = ' + elem1.attributes[0].name);
  log('elem1.attributes[0].value = ' + elem1.attributes[0].value);
  log('Array.prototype.slice.call(elem1.attributes) = ' + Array.prototype.slice.call(elem1.attributes));
  log('')

  //Setting, accessing, and modifying a new standard attribute:
  log('Setting, accessing, and modifying a new standard attribute:');
  elem1.className = 'class1';
  log("EXECUTED: elem1.className = 'class1'");
  log('elem1.className = ' + elem1.className);
  elem1.className = 'class2';
  log("EXECUTED: elem1.className = 'class2'");
  log('elem1.className = ' + elem1.className);
  log('elem1.outerHTML = ' + elem1.outerHTML);
  log('');

  //Accessing and modifying a custom attribute:
  log('Accessing and modifying a custom attribute:');
  log('elem1.getAttribute("dAtA-cUsTom1") = ' + elem1.getAttribute('dAtA-cUsTom1'));
  log('elem1.dataset.custom1 = ' + elem1.dataset.custom1);
  elem1.dataset.custom1 = 'custVal2';
  log('EXECUTED: elem1.dataset.custom1 = "custVal2"')
  log('elem1.dataset.custom1 = ' + elem1.dataset.custom1);
  log('elem1.outerHTML = ' + elem1.outerHTML);
  log('');

  //Setting, accessing, and modifying a new custom attribute:
  log('Setting, accessing, and modifying a new custom attribute:');
  elem1.dataset.custom2 = 'custVal3';
  log("EXECUTED: elem1.dataset.custom2 = 'custVal3'");
  log('elem1.dataset.custom2 = ' + elem1.dataset.custom2);
  elem1.dataset.custom2 = 'custVal4';
  log("EXECUTED: elem1.dataset.custom2 = 'custVal4'");
  log('elem1.dataset.custom2 = ' + elem1.dataset.custom2);
  log('elem1.outerHTML = ' + elem1.outerHTML);
  log('');

  //Removing attributes:
  log('Removing attributes:')
  log('elem1.outerHTML = ' + elem1.outerHTML);
  elem1.removeAttribute('id');
  elem1.removeAttribute('class');
  elem1.removeAttribute('data-custom1');
  elem1.removeAttribute('data-custom2');
  log("EXECUTED: elem1.removeAttribute('id');")
  log("EXECUTED: elem1.removeAttribute('class');")
  log("EXECUTED: elem1.removeAttribute('data-custom1');")
  log("EXECUTED: elem1.removeAttribute('data-custom2');")
  log('elem1.outerHTML = ' + elem1.outerHTML);
}

function myChange() {
  document.getElementById("demo").innerHTML = "Paragraph <em>changed</em>."; //innerHTML is needed here to parse HTML(slower).
}
document.getElementById("button1").onclick = myChange; //Not to be used as event listeners are better.

function myChange2() {
  document.getElementById('demo2').textContent = 'Text changed!'; //testContent does not parse HTML(faster);
  document.getElementById('demo2').style.color = 'blue';
}


