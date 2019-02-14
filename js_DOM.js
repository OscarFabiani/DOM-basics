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

Window node: This is the browser tab.


Node properties: The node interface/object's properties and methods are inherited by the document, element, text, comment, and attribute
nodes. Some common node properties are nodeName, nodeValue, and nodeType which uses numbers as references(1 = element, etc.). Properties that
reference all types of nodes are childNodes, parentNode, firstChild, lastChild, nextSibling, and previousSibling.



NODE INTERFACE:

Properties:

Node.nodeName
Node.nodeValue
Node.nodeType

Node.parentNode: returns the parent Node of Node, else null.

Node.childNodes: returns a live NodeList that contains all children of Node.

Node.firstChild: returns the first child Node of Node, else Null.

Node.lastChild: returns the last child Node of Node, else Null.

Node.nextSibling: returns the next child Node of Node, else Null.

Node.previousSibling: returns the previous child Node of Node, else Null.

Node.textContent:
NOTE: While HTMLElement.innerText is similar though different in ways that may be useful at times, it is not as standardized

Methods:

Node.appendChild()
Node.insertBefore()
Node.replaceChild()
Node.removeChild()
Node.cloneNode()



PARENTNODE MIXIN: Generally better than Node.childNodes/firstChild/lastChild()?

ParentNode.children: returns a live HTMLCollection that contains all child Elements of ParentNode.

ParentNode.firstElementChild: return the first Element node that is child of ParentNode.

ParentNode.lastElementChild: return the last Element node that is child of ParentNode.


DOCUMENT INTERFACE:

Methods:

document.createElement(tagName): creates an HTML element specified by tagName.

document.getElementById(idName): returns an object reference to the identified element.
NOTE: Browsers dump references to all elements with an id attribute into the global namespace using the id as a variable name(technically a
property of the global object). This means it's possible to skip using getElementById() and instead referencing the element node by this
property of the global object but this is not recommended as it can easily cause conflicts(no id causing an error, id's with dashes not
retrievable, global variable names being overidden, etc.). 
NOTE: This method is only available to the global document object(unlike document.querySelector() or document.querySelectorAll()) since id
values are unique throughout the document.

document.getElementsBysTagName(tagName): returns a live HTMLCollection that contains all elements of tagName.

document.getElementsByClassName(classNames): returns a live HTMLCollection that contains all elements that possess classNames.
NOTE: classNames is a space delimited list of class names.

document.querySelector(selectors): returns the first element node within the document, in document order, that matches selectors(string).

document.querySelectorAll(selectors): returns a NodeList of element nodes within the document which match the selectors(string).



ELEMENT INTERFACE:

Properties:

Element.className: A DOMString representing the class of the element.
NOTE: This is a space-delimited string containing all classes. An alternative is to use Element.classList.

Element.classList: Returns a DOMTokenList containing the list of class attributes.
NOTE: While this DOMTokenList has methods that can modify classes it is not yet supported in IEv10 and below. An alternative to modifying
classes is to use className in conjuction with space-delimited lists, string concatenation, and regular expressions to replicate the
functionality of DOMTokenList methods. This alterntive is on it's way outt. Another alternative is to use a polyfill in conjuction wit
DOMTokenList methods.

Element.id: A DOMString representing the id of the element.

Element.tagName: Returns a string with the name of the tag for the given element.

Element.innerHTML: A DOMString representing the markup of the element's content.

Element.outerHTML: A DOMString representing the markup of the element including it's content.

Element.attributes: returns a NamedNodeMap object containing the an attr object for each assigned attribute of the corresponding HTML element.

Element.previousElementSibling:

Element.nextElementSibling:


Methods:

Element.getElementsByClassName(classNames): returns a live HTMLCollection that contains all decendants of the current element that possess
classNames.
NOTE: classNames is a space delimited list of class names.

Element.getElementsByTagName(tagName): returns a live HTMLCollection that contains all decendant elements of tagName.

Element.querySelector(selectors): returns the first node that matches selectors(string) relative to the element.

Element.querySelectorAll(selectors): returns a NodeList of nodes which match the selectors(string) relative to the element.

Element.hasAttribute(name): return true is element has the attribute name passed, else false.

Element.getAttribute(name): gets and attribute(from HTML as opposed to a DOM property from an Element node).
NOTE: DOM properties should be used instead of this except rare cases(custom attributes, etc.).
NOTE: Attribute names are case-insensitive, which means the name parameter can have casing that doesn't match the HTML markup and still
return the attribute.

Element.setAttribute(name, value): sets an attribute.
NOTE: DOM properties should be used instead of this except rare cases(custom attributes, etc.).

Element.removeAttribute(name): removes an attribute.



EVENTTARGET INTERFACE: This interface is implemented by objects that can recieve events and may have listeners for them. Common event targets
are Element, Document, and Window.

Methods:

EventTarget.addEventListener(type, listener):Registers an event handler of a specific event type on the EventTarget.

EventTarget.removeEventListener(type, listener): removes an event listener from the EventTarget.



ATTRIBUTE(ATTR) INTERFACE: This interface represents a DOM element's attribute as an object.

Properties:

Attr.name
Attr.value



DOMTOKENLIST INTERFACE:

Properties:

DOMTokenList.length

Methods:

DOMTokenList.add()
DOMTokenList.remove()
DOMTokenList.contains()
DOMTokenList.toggle()
DOMTokenList.replace()



STYLE PROPERTY/OBJECT:
NOTE: Multi-word styles(seperated by hyphens) are converted to camelCasing when set as properties of the style object(background-color becomes
style.backgroundColor)


//ADDRESS TODO


TO DO:
Add notes for all remaining properties and methods.
Clean up examples UI.

QUESTIONS BEING ASKED:
Have I demonstrated all of these in my DOM-test project?
Am I ready to move on to creating a project(s) utilizing DOM/Vanilla.JS?


querySelector() basically: This method matches an element with one or more CSS selectors and thus can do the job of getElementById(),
getElementsByClassName(), getElementsByTagName() and more including much more specific criteria using the robuts selectors API.


SIDE TOPICS:

Selector API: The selector passed into querySelector() can be a complex DOMString that can select specific elements through many parameters.

Utility of custom attributes: Regarding styling, modifying attributes is sometimes easier than modifying classes. Regarding scripting, custom
attributes can be used to "mark" elements for JavaScript.

Utility of data- attributes and the dataset property: specifies an attribute as custom incase the standard introduces functionality for the
custom name used.
NOTE: custom attributes can't contain capital letters.



ACCESSING AND MODIFYING ATTRIBUTES: Attributes should be accessed and modified through properties in almost all cases(custom attributes being
and exception). Attributes should be removed through the Element.removeAttribute() method.

HTML attributes and DOM properties: The DOM creates nodes/objects for each element in an HTML file. The attributes of these elements mostly
become properties of their respective node/object. Standard attributes, which not only means standard to HTML but also standard to each
specific element(type would be standars for <input> but not for <body>), are set as properties of the corresponding element node. These
properties can be accessed by dot notation but other attributes can't. These can be accessed by the Element.has/get/set/removeAttribute
methods. Most of these properties are derived from their corresponding attributes and synchronize when modified through scripting, but these
are a few which either don't translate identically from attribute to property(class translates to className, href attribute and property values
are different) or don't synchronize(value and checked attributes synchronize once to their respective properties but don't update). Also, DOM
element object properties(names and values) tend to be more consistent across browsers. Lastly, DOM properties are not always strings(checked
property is a boolean, style property is an object) while attribute values are always strings.




onclick HTML property vs addEventListener in JavaScript: It seems like using addEventListener is a better method.




*/