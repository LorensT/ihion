(function($){
//определение виджета
	$.widget("mobile.columnSplit", $.mobile.widget, {

		options: { // определение настроек
			width: 200,
			column_number: 2,
			column_gap: 30,
			column_rule: 2,
			rule_color: "#ccc"
		},
		//Внутренние методы
		_create: function () { //функция конструктор
			this._applyWidget();
		},

		_applyWidget: function () {
			var elem = $(this.element);
			if(elem.attr('disable') !== undefined) {
				elem.css({
					"-webkit-column-width" : this.options.width + "px",
				    "-moz-column-width" : this.options.width + "px",
				    "column-width" : this.options.width + "px",

				    "-webkit-column-count" : this.options.column_number.toString(),
				    "-moz-column-count" : this.options.column_number.toString(),
				    "column-count" : this.options.column_number.toString(),

				    "-webkit-column-gap" : this.options.column_gap + "px",
				    "-moz-column-gap" : this.options.column_gap + "px",
				    "column-gap" : this.options.column_gap + "px",

				    "-webkit-column-rule" : this.options.column_rule + "px solid " + this.options.rule_color,
				    "-moz-column-rule" : this.options.column_rule + "px solid " + this.options.rule_color,
				    "column-rule" : this.options.column_rule + "px solid " + this.options.rule_color

				});
			}
		},
		
		//Открытые методы
		enable: function () { //активировать виджет
			$(this.element).attr('disable', '');
			this.refresh();
		},
		
		disable: function () { // деактивировать виджет
			$(this.element).removeAttr('disable');
			this.refresh();
		},

		refresh: function () {	//обновить виджет
			this._applyWidget();
		}
// --- > конец определение виджета
	});

// Инициализация
	
	$(document).on("pagecreate", function (e) {
		// находим значение атрибута date-role  и вызываем конструктор виджетв
		$(e.target).find(':jqmData(role="columnSplit")').columnSplit('enable');
	});

}(jQuery));