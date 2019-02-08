/*
This file explores the Document Object Model

DOM: The W3C Document Object Model is a platform and language-neutral interface that allows programs and scripts to dynamically access and
update the content, structure, and style of a document. The DOM interface defines HTML elements as objects, properties of all HTML elements,
methods to access all HTML elements, and events for all HTML elements.

DOM and JavaScript: JavaScript uses the DOM as a model or notion of web pages, HTML documents, XML documents, and there component
parts(elements). Every element in a document is part of the Document Object Model for that document and can be accessed and manipulated
using the DOM and a scripting language like JavaScript.

Basic DOM tasks: Querying DOM, modifying DOM elements, modifying classes and attributes, listening to events, and animation.

DOM navigation: An HTML page is represented as a node tree with the document itself as the root of the tree.


Nodes/objects: There are 6 different types of nodes/objects in the DOM. These are the document node, root node, element node, text node,
attribute node, and comment node.

Document node: This is the entire document.

Root node: This is the <html> tag.

Element node: Every HTML element.

Text node: text inside HTML.

Attribute node: Every HTML attribute.

Comment node: All comments in the document.


Node properties: The node interface/object's properties and methods are inherited by the document, element, text, comment, and attribute
nodes. Some common node properties are nodeName, nodeValue, and nodeType which uses numbers as references(1 = element, etc.). Properties that
reference all types of nodes are childNodes, parentNode, firstChild, lastChild, nextSibling, and previousSibling.


DOCUMENT INTERFACE/OBJECT:

DOCUMENT METHODS:

document.createElement(tagName): creates an HTML element specified by tagName.


ELEMENT INTERFACE/OBJECT:

ELEMENT PROPERTIES:

Element.children
Element.firstElementChild
Element.lastElementChild
Element.previousElementSibling
Element.nextElementSibling



Common API's in web scripting using the DOM OR Common DOM methods:

document.getElementById(id)
document.getElementsByClassName(name)
document.getElementsByTagName(name)
document/element.querySelector(selector)
document/element.querySelectorAll(selector)
document.createElement(name)
parentNode.appendChild(node)
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()
window.content
window.onload
console.log()
window.scrollTo()


onclick HTML property vs addEventListener in JavaScirpt: It seems like using addEventListener is a better method.







*/