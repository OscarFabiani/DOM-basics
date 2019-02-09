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

document.getElementById(idName): returns an object reference to the identified element.
NOTE: Browsers dump references to all elements with an id attribute into the global namespace using the id as a variable name(technically a
property of the global object). This means it's possible to skip using getElementById() and instead referencing the element node by this
property of the global object but this is not recommended as it can easily cause conflicts(no id causing an error, id's with dashes not
retrievable, global variable names being overidden, etc.). 
NOTE: This method is only available to the global document object(unlike Document.querySelector() or Document.querySelectorAll()) since id
values are unique throughout the document.

ELEMENT INTERFACE/OBJECT:

Properties:

ParentNode Mixin:
Element.children
Element.firstElementChild
Element.lastElementChild

Other:
Element.previousElementSibling
Element.nextElementSibling

Element.className: A DOMString representing the class of the element.
NOTE: This is a space-delimited string containing all classes. An alternative is to use Element.classList.

Element.classList: Returns a DOMTokenList containing the list of class attributes.
NOTE: While this DOMTokenList has methods that can modify classes it is not yet supported in IEv10 and below. An alternative to modifying
classes is to use className in conjuction with space-delimited lists, string concatenation, and regular expressions to replicate the
functionality of DOMTokenList methods.

Element.id: A DOMString representing the id of the element.

Element.tagName: Returns a string with the name of the tag for the given element.

Element.innerHTML: A DOMString representing the markup of the element's content.

Element.outerHTML: A DOMString representing the markup of the element including it's content.

Element.attributes: returns a NamedNodeMap object containing the an attr object for each assigned attribute of the corresponding HTML element.


Methods:

Element.getElementsByClassName()
Element.getElementsByTagName()
Element.querySelector();
Element.querySelectorAll();


EVENTTARGET INTERFACE:

Methods:
EventTarget.addEventListener()
EventTarget.removeEventListener()



ATTRIBUTE(ATTR) INTERFACE/OBJECT: This interface represents a DOM element's attribute as an object.

Properties:

Attr.name
Attr.value


DOMTOKENLIST INTERFACE:

Properties:

DOMTokenList.length

Methods:

DOMTokenList.add()
DOMTokenList.remove()
DOMTokenList.conatins()



QUESTIONS BEING ASKED:
How to best remove attributes?
Is it better to use the element specific child properties or the node properties?
Do I have a basic overview of the most common uses of the DOM? 
Have I demonstrated all of these in my DOM-test project?
Am I ready to move on to creating a project(s) utilizing DOM/Vanilla.JS?

ACCESSING AND MODIFYING ATTRIBUTES: Attributes should be accessed and modified through properties in almost all cases(custom attributes being
and exception).

HTML attributes and DOM properties: The DOM creates nodes/objects for each element in an HTML file. The attributes of these elements mostly
become properties of their respective node/object. Standard attributes, which not only means standard to HTML but also standard to each
specific element(type would be standars for <input> but not for <body>), are set as properties of the corresponding element node. These
properties can be accessed by dot notation but other attributes can't. These can be accessed by the Element.has/get/set/removeAttribute
methods. Most of these properties are derived from their corresponding attributes and synchronize when modified through scripting, but these
are a few which either don't translate identically from attribute to property(class translates to className, href attribute and property values
are different) or don't synchronize(value and checked attributes synchronize once to their respective properties but don't update). Also, DOM
element object properties(names and values) tend to be more consistent across browsers.





Common API's in web scripting using the DOM OR Common DOM methods/properties:

document.getElementById(id)
document.getElementsByClassName(name)
document.getElementsByTagName(name)
document/element.querySelector(selector)
document/element.querySelectorAll(selector)
document.createElement(name)
parentNode.appendChild(node)
element.innerHTML
element.style.left
element.addEventListener()
window.content
window.onload
console.log()
window.scrollTo()


onclick HTML property vs addEventListener in JavaScirpt: It seems like using addEventListener is a better method.







*/