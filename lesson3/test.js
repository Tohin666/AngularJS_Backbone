window.onload = function () {

  var elementByID = getID('selectCategory');
  console.log('Получили элемент по ID:');
  console.log(elementByID);

  var elementByClass = getClass('inputAmount');
  console.log('Получили элементы по классу:');
  console.log(elementByClass);

  var elementByName = getName('selectCategory');
  console.log('Получили элементы по имени:');
  console.log(elementByName);

  var elementByTag = getTag('td');
  console.log('Получили элементы по тегу:');
  console.log(elementByTag);

  addAttr(elementByID, 'data-test', 'mytest');

  removeAttr(elementByClass, 'type');

  changeInnerText(elementByTag, 'Другой текст');

  var newHTML = '<h1>Это новый HTML!!!</h1>';
  changeInnerHTML(elementByID, newHTML)

};