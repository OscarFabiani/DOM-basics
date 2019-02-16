/*
This file explores the Document Object Model

DOM: The W3C Document Object Model is a platform and language-neutral interface that allows programs and scripts to dynamically access and
update the content, structure, and style of a document. The DOM interface defines HTML elements as objects, properties of all HTML elements,
methods to access all HTML elements, and events for all HTML elements.

DOM and JavaScript: JavaScript uses the DOM as a model or notion of web pages, HTML documents, XML documents, and there component
parts(elements). Every element in a document is part of the Document Object Model for that document and can be accessed and manipulated
using the DOM and a scripting language like JavaScript.

Basic DOM tasks: Querying the DOM, traversing the DOM, modifying DOM elements, modifying classes and attributes, listening to events, and animation.


Nodes/objects: There are 6 different types of nodes/objects in the DOM. These are window object, document node, element node, text node,
attribute node, and comment node.

Document node: This is the entire document.

Element node: Every HTML element.

Text node: text inside HTML.

Attribute node: Every HTML attribute.

Comment node: All comments in the document.

Window object: This is the browser tab.
NOTE: This can also be referenced with document.defaultView.



NODE INTERFACE:

Properties:

Node.nodeName: returns a DOMString representing the name of the node? The structure of this DOMString changes depending on the node type.
Attr: the value of Attr.name
Comment: '#comment'
Document: '#document'
Element: the value of Element.tagName
Text: '#text'

Node.nodeValue: returns or sets text content for Text and Comment nodes and Attr.value for attribute nodes. Returns null for other node types.

Node.nodeType: returns an integer representing the node type.
Node.ELEMENT_NODE: 1
Node.TEXT_NODE: 3
Node.COMMENT_NODE: 8
Node.DOCUMENT_NODE: 9

Node.parentNode: returns the parent Node of Node, else null.

Node.childNodes: returns a live NodeList that contains all children of Node.

Node.firstChild: returns the first child Node of Node, else Null.

Node.lastChild: returns the last child Node of Node, else Null.

Node.nextSibling: returns the next child Node of Node, else Null.

Node.previousSibling: returns the previous child Node of Node, else Null.

Node.textContent:
NOTE: While HTMLElement.innerText is similar though different in ways that may be useful at times, it is not as standardized

Methods:

Node.appendChild(childNode): Adds childNode as the last child of Node.

Node.insertBefore(newNode, referenceNode): Inserts newNode before referenceNode as a childNode of Node.

Node.replaceChild(newChild, oldChild): Replaces oldChild with newChild as a childNode of Node.

Node.removeChild(childNode): removes and returns childNode which must be a child of Node.

Node.cloneNode([deep]): returns a duplicate of Node. Deep is an optional parameter set to false by default. If false, none of Node's children are cloned. If
true, all of Node's children are included in the duplicate.



PARENTNODE MIXIN: Generally better than Node.childNodes/firstChild/lastChild()?

ParentNode.children: returns a live HTMLCollection that contains all child Elements of ParentNode.

ParentNode.firstElementChild: return the first Element node that is child of ParentNode.

ParentNode.lastElementChild: return the last Element node that is child of ParentNode.


DOCUMENT INTERFACE: Inherits from Node and EventTarget.

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
NOTE: Selectors is a complex DOMString that can select specific elements through many parameters.

document.querySelectorAll(selectors): returns a NodeList of element nodes within the document which match the selectors(string).



ELEMENT INTERFACE: Inherits from Node and EventTarget.

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

Element.previousElementSibling: returns the element before Element in it's parent node's children list.

Element.nextElementSibling: returns the element after Element in it's parent node's children list.

HTMLElement.style: An object used to get and set the inline style of HTMLElement.
NOTE: Multi-word styles(seperated by hyphens) are converted to camelCasing when set as properties of the style object(background-color becomes
style.backgroundColor).


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

Attr.name: The attributes name.

Attr.value: The attributes value.



DOMTOKENLIST INTERFACE:

Properties:

DOMTokenList.length: An integer representing the number of tokens within DOMTokenList.

Methods:

DOMTokenList.add(token): Adds token to DOMTokenList.

DOMTokenList.remove(token): Removes token from DOMTokenList.

DOMTokenList.contains(token): Returns true is DOMTokenList contains token, else returns false.

DOMTokenList.toggle(token): If DOMTokenList contains token, removes token from DOMTokenList and returns false, else adds token to DOMTokenList and returns true.

DOMTokenList.replace(oldToken, newToken): Replaces oldToken with newToken and returns true if successful, else returns false.




SIDE TOPICS:

Utility of custom attributes: Regarding styling, modifying attributes is sometimes easier than modifying classes. Regarding scripting, custom
attributes can be used to "mark" elements for JavaScript.

Utility of data- attributes and the dataset property: specifies an attribute as custom incase the standard introduces functionality for the
custom name used.
NOTE: custom attributes can't contain capital letters.

Attributes vs properties: Attributes should be accessed and modified through properties in almost all cases(custom attributes being
an exception). Attributes should be removed through the Element.removeAttribute() method. The DOM creates nodes/objects for each element
in an HTML file. The attributes of these elements mostly become properties of their respective node/object. Standard attributes, which not
only means standard to HTML but also standard to each specific element(type would be standars for <input> but not for <body>), are set as
properties of the corresponding element node. These properties can be accessed by dot notation but other attributes can't. These can be
accessed by the Element.has/get/set/removeAttribute methods. Most of these properties are derived from their corresponding attributes and
synchronizewhen modified through scripting, but these are a few which either don't translate identically from attribute to property(class
translates to className, href attribute and property values are different) or don't synchronize(value and checked attributes synchronize once
to their respective properties but don't update). Also, DOM element object properties(names and values) tend to be more consistent across
browsers. Lastly, DOM properties are not always strings(checked property is a boolean, style property is an object) while attribute values are
always strings.


*/