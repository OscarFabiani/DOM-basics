let output = document.querySelector('#output');

//Custom logging function
function log(msg) {
  output.appendChild(document.createTextNode(msg));
  output.appendChild(document.createElement('br'));
}


//Node properties
function nodeProperties() {
  output.innerHTML = ''
  let div = document.getElementById('1');
  log('tested div: ' + div.outerHTML);
  log('');
  log('Node properties:');
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


//Element and Attr properties.
function elementProperties() {
  output.innerHTML = '';
  let div = document.getElementById('4');
  log('tested div: ' + div.outerHTML);
  log('');
  log('Element properties:');
  log('div.outerHTML = ' + div.outerHTML);
  log('div.innerHTML = ' + div.innerHTML);
  log('div.tagName = ' + div.tagName);
  log('div.id = ' + div.id);
  log('div.className = ' + div.className);
  log('div.classList = ' + div.classList);
  log('div.classList[0] = ' + div.classList[0]);
  log('div.attributes = ' + div.attributes);
  log('');
  log('Attr properties:')
  log('div.attributes[0] = ' + div.attributes[0]);
  log('div.attributes[0].nodeType = ' + div.attributes[0].nodeType);
  log('div.attributes[0].name = ' + div.attributes[0].name);
  log('div.attributes[0].value = ' + div.attributes[0].value);
}
//elementProperties();


//Selecting Nodes
function selectingNodes() {
  output.innerHTML = '';
  log('tested div: ' + document.getElementById('testHead').outerHTML);
  log('');
  log('Selecting nodes:');
  log('document.getElementById("testHead").outerHTML = ' + document.getElementById('testHead').outerHTML);
  log('document.getElementsByClassName("testClass")[0].outerHTML = ' + document.getElementsByClassName('testClass')[0].outerHTML);
  log('document.getElementsByTagName("h1")[0].outerHTML = ' + document.getElementsByTagName('h1')[0].outerHTML);
  log("document.querySelector('h1').outerHTML = " + document.querySelector('h1').outerHTML);
  log("document.querySelectorAll('h1')[0].outerHTML = " +document.querySelectorAll('h1')[0].outerHTML);
}
//selectingNodes();

//Traversing the DOM
function traverseDOM() {
  output.innerHTML = '';
  let div = document.getElementById('1');
  log('tested div: ' + div.outerHTML);
  log('');
  log('Traversing the DOM:');
  log('div.parentNode = ' + div.parentNode);
  log('div.childNodes = ' + div.childNodes);
  log('div.childNodes[0].nodeValue = ' + div.childNodes[0].nodeValue);
  log('div.firstChild.nodeValue = ' + div.firstChild.nodeValue);
  log('div.lastChild.outerHTML = ' + div.lastChild.outerHTML);
  log('div.firstChild.nextSibling.outerHTML = ' + div.firstChild.nextSibling.outerHTML);
  log('div.lastChild.previousSibling.nodeValue = ' + div.lastChild.previousSibling.nodeValue);
  log('');
  log('ParentNode mixin and ElementChild methods:');
  log('div.children = ' + div.children);
  log('div.children[0] = ' + div.children[0].outerHTML);
  log('div.firstElementChild.outerHTML = ' + div.firstElementChild.outerHTML);
  log('div.firstElementChild.nextElementSibling.outerHTML = ' + div.firstElementChild.nextElementSibling.outerHTML);
  log('div.lastElementChild.outerHTML = ' + div.lastElementChild.outerHTML);
  log('div.lastElementChild.previousElementSibling.outerHTML = ' + div.lastElementChild.previousElementSibling.outerHTML);
}
//traverseDOM();



//Creating, adding, modifying, and removing nodes
function modifyNodes() {
  output.innerHTML = '';
  let div = document.createElement('div');
  log('tested div: ' + div.outerHTML);
  log('');
  log('Modifying nodes:');
  log("document.createElement('div') = " + document.createElement('div'));
  log('div.outerHTML = ' + div.outerHTML);
  div.appendChild(document.createElement('p'));
  log("EXECUTED: div.appendChild(document.createElement('p'))");
  log('div.outerHTML = ' + div.outerHTML);
  div.insertBefore(document.createElement('h1'), div.firstElementChild);
  log("EXECUTED: div.insertBefore(document.createElement('h1'), div.firstElementChild)");
  log('div.outerHTML = ' + div.outerHTML);
  div.replaceChild(document.createElement('span'), div.lastElementChild);
  log("EXECUTED: div.replaceChild(document.createElement('span'), div.lastElementChild)");
  log('div.outerHTML = ' + div.outerHTML);
  div.removeChild(div.lastElementChild);
  log("EXECUTED: div.removeChild(div.lastElementChild)");
  log('div.outerHTML = ' + div.outerHTML);
  div.appendChild(div.cloneNode(true));
  log("EXECUTED: div.appendChild(div.cloneNode(true));");
  log('div.outerHTML = ' + div.outerHTML);
  div.appendChild(div.cloneNode());
  log("EXECUTED: div.appendChild(div.cloneNode());");
  log('div.outerHTML = ' + div.outerHTML);
}
//modifyNodes();


//Accessing and modifying HTML attributes and respective DOM properties
function modifyAttributes() {
  output.innerHTML = '';
  log('Accessing and modifying HTML attributes and respective DOM properties:')
  log('');
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
  elem1.removeAttribute('data-custom1');
  elem1.removeAttribute('data-custom2');
  log("EXECUTED: elem1.removeAttribute('id');")
  log("EXECUTED: elem1.removeAttribute('data-custom1');")
  log("EXECUTED: elem1.removeAttribute('data-custom2');")
  log('elem1.outerHTML = ' + elem1.outerHTML);
  log('');

  //Modifying classes with classList
  log('Modifying classes with classList:');
  log('elem1.outerHTML = ' + elem1.outerHTML);
  log('elem1.classList = ' + elem1.classList);
  log('elem1.classList.length = ' + elem1.classList.length);
  elem1.classList.add('class3')
  log("EXECUTED: elem1.classList.add('class3')");
  log('elem1.classList = ' + elem1.classList);
  elem1.classList.remove('class2');
  log("EXECUTED: elem1.remove('class2')");
  log(elem1.classList);
  log("elem1.contains('class3') = " + elem1.classList.contains('class3'));
  elem1.classList.replace('class3', 'class5');
  log("EXECUTED: elem1.classList.replace('class3', 'class5')");
  log(elem1.classList);
  elem1.classList.toggle('class6');
  log("EXECUTED: elem1.classList.toggle('class6')");
  log(elem1.classList);
}
//modifyAttributes();


//Events
function events() {
  output.innerHTML = '';
  log('Events:');
  log('');
  log("EXECUTED: let par = document.getElementById('par')");
  log("EXECUTED: let button = document.getElementById('button')");
  log("EXECUTED: let myChange = () => par.innerHTML = 'Test text changed'");
  log("EXECUTED: button.addEventListener('click', myChange)");
  let par = document.getElementById('par');
  let button = document.getElementById('button');
  let myChange = () => par.innerHTML = 'Test text changed';
  button.addEventListener('click', myChange);
}
//events();


