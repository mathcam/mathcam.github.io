
  /****************************************************************************************
  *************************                                  ******************************
  *************************     RSAlert - Вслывающие окна    ******************************
  *************************                                  ******************************
  *****************************************************************************************
  ********************  RSAlert(                                     ******* primary ******
  ********************    'style',      - Стиль вызываемого объекта  ****** secondary *****
  ********************    'text',       - Текст для вставки          ******* success ******
  ********************    '9'           - Время до исчезание объекта ******* danger *******
  ****** Ruslan ******  );                                           ******* warning ******
  **** Sayfutdinov ********************************************************** light *******
  ********************  RSAlert(                                     ******** dark ********
  ********************    'unset',      - Без стандартного стиля     ******** info ********
  ********************    'text',       - Текст для вставки          ******** unset *******
  ********************    '9'           - Время до исчезание объекта **********************
  ********************    'color',      - Цвет текста                **********************
  ********************    'background', - Цвет заливки               **********************
  ********************    'shadow'      - Цвет тени                  **********************
  ********************  );                                           **********************
  ****************************************************************************************/

function RSAlert(requestStyle, requestText, requestTime, reqColor, reqBackground, reqShadow) {
    var place       = 'body';
    var close        = '<button class="closersalert">&times;</button>';
    var time        = requestTime * 1000;
    var style       = {
        "primary"   : ['<div id="rsalert" class="rsalert-primary"><span>','</span>','</div>'],
        "secondary" : ['<div id="rsalert" class="rsalert-secondary"><span>','</span>','</div>'],
        "success"   : ['<div id="rsalert" class="rsalert-success"><span>','</span>','</div>'],
        "danger"    : ['<div id="rsalert" class="rsalert-danger"><span>','</span>','</div>'],
        "warning"   : ['<div id="rsalert" class="rsalert-warning"><span>','</span>','</div>'],
        "light"     : ['<div id="rsalert" class="rsalert-light"><span>','</span>','</div>'],
        "dark"      : ['<div id="rsalert" class="rsalert-dark"><span>','</span>','</div>'],
        "info"      : ['<div id="rsalert" class="rsalert-info"><span>','</span>','</div>'],
        "unset"     : ['<div id="rsalert" style="','"><span>','</span>','</div>'],
    };

   // Создаем объект для вывода
   if (requestStyle == 'unset') {
     var result = style["unset"][0] +
                                      'color: ' + reqColor + '; ' +
                                      'background-color: ' + reqBackground + '; ' +
                                      'box-shadow: 1px 1px 5px ' + reqShadow + '; ' +
                  style["unset"][1] + requestText + style["unset"][2] + close + style["unset"][3];
   } else {
     var result = style[requestStyle][0] + requestText + style[requestStyle][1] + close + style[requestStyle][2];
   }

   if ($('#rsalert').length) {
       $('#rsalert').remove();
   }

   $(place).after(result);
   var height = $('#rsalert').outerHeight();

   // Выводим созданный объект используя стили CSS
    $('#rsalert').css('top','-' + height + 'px');
      setTimeout(function(){
        $('#rsalert').css({
          'opacity'   : '1',
          'top'       : '0px',
        });
    }, 200);

    // Прячем объект в зависимости от заданного времени и удаляем через 1 секунду
    setTimeout(function(){
      $('#rsalert').css({
        'opacity'   : '0',
        'top'       : '-' + height + 'px',
      });
      setTimeout(function(){
        $('#rsalert').remove();
      }, 1000);
    }, time);

    // Отлавливаем клик по закрывающей кнопке - прячем объект и удаялем через секунду
    $("button.closersalert").on("click", function() {
      var height = $('#rsalert').outerHeight();
      $('#rsalert').css({
        'opacity'   : '0',
        'top'       : '-' + height + 'px',
      });
      setTimeout(function(){
        $('#rsalert').remove();
      }, 1000);
    });
}
