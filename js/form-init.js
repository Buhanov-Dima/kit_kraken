﻿$(function() {

  var $amount = $('#amount');      // Кэшируем поле ввода для цены
  var $range = $('#price-range');  // Кэшируем элемент div для диапазона цен
  $('#price-range').slider({       // Превращаем этот элемент в ползунковый регулятор
    range: true,                   // Если это диапазон, он имеет два ползунка
    min: 0,                        // Минимальное значение
    max: 20000,                      // Максимальное значение
    values: [2000, 15458],            // Начальные значение
    slide: function(event, ui) {   // При использовании ползунка обновляем amount
      $amount.val(ui.values[0] + ' - ' + ui.values[1]);
    }
  });
  $amount                          // Устанавливаем начальные значения для amount
    .val($range.slider('values', 0)    // Нижняя граница, потом знак ₽
    + ' - ' + $range.slider('values', 1)  ); // Верхняя граница, потом знак ₽

});
