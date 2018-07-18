/*
This script allows to get elements from DOM by ID, name, class or tagname;
change attributes of this elements, innerText and innerHTML.
 */

/**
 * Method allows to get element from DOM by ID.
 * @param {string} ID - ID of element you need to get.
 * @returns {HTMLElement} Element you need to get from DOM.
 */
function getID(ID) {
  var element = document.getElementById(ID);
  return element
}

/**
 * Method allows to get elements from DOM by class.
 * @param {string} className - Class of elements you need to get.
 * @returns {HTMLCollectionOf} Elements you need to get from DOM.
 */
function getClass(className) {
  var elements = document.getElementsByClassName(className);
  return elements
}

/**
 * Method allows to get elements from DOM by name.
 * @param {string} name - Name of elements you need to get.
 * @returns {NodeListOf} Elements you need to get from DOM.
 */
function getName(name) {
  var elements = document.getElementsByName(name);
  return elements
}

/**
 * Method allows to get elements from DOM by tag name.
 * @param {string} tag - Tag name of elements you need to get.
 * @returns {NodeListOf} Elements you need to get from DOM.
 */
function getTag(tag) {
  var elements = document.getElementsByTagName(tag);
  return elements
}


/**
 * Method adds some attribute to element.
 * @param {object} elements - To this element we add attribute.
 * @param {string} attr - Name of attribute.
 * @param {string} value - Value of attribute
 */
function addAttr(elements, attr, value) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute(attr, value)
  }
}

/**
 * Method removes some attribute of element.
 * @param {object} elements - In this element we remove attribute.
 * @param {string} attr - Name of attribute.
 */
function removeAttr(elements, attr) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].removeAttribute(attr)
  }
}

/**
 * Method changes text of element.
 * @param {object} elements - In this element we change text.
 * @param {string} text - New text of element.
 */
function changeInnerText(elements, text) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = text
  }
}

/**
 * Method changes html of element.
 * @param {object} elements - In this element we change html.
 * @param {string} html - New html of element.
 */
function changeInnerHTML(elements, html) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = html
  }
}