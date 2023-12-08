import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОплаты: DS.attr('date'),
  датаОтгрузки: DS.attr('date'),
  статус: DS.attr('string'),
  цена: DS.attr('decimal'),
  кладовщик: DS.belongsTo('i-i-s-sklad2-сотрудник', { inverse: null, async: false }),
  строкаЗаказа: DS.hasMany('i-i-s-sklad2-строка-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  датаОплаты: {
    descriptionKey: 'models.i-i-s-sklad2-заказ.validations.датаОплаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОтгрузки: {
    descriptionKey: 'models.i-i-s-sklad2-заказ.validations.датаОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-sklad2-заказ.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-sklad2-заказ.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  кладовщик: {
    descriptionKey: 'models.i-i-s-sklad2-заказ.validations.кладовщик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строкаЗаказа: {
    descriptionKey: 'models.i-i-s-sklad2-заказ.validations.строкаЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-sklad2-документ'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-sklad2-заказ', {
    датаОплаты: attr('Дата оплаты', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    датаОтгрузки: attr('Дата отгрузки', { index: 2 }),
    статус: attr('Статус', { index: 3 }),
    кладовщик: belongsTo('i-i-s-sklad2-сотрудник', 'Кладовщик', {
      отчество: attr('Отчество', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'отчество' }),
    строкаЗаказа: hasMany('i-i-s-sklad2-строка-заказа', 'Строка заказа', {
      нДС: attr('НДС', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      сумма: attr('Сумма', { index: 2 }),
      товар: belongsTo('i-i-s-sklad2-товар', 'Товар', {
        название: attr('Название', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-sklad2-заказ', {
    датаОплаты: attr('Дата оплаты', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    датаОтгрузки: attr('Дата отгрузки', { index: 2 }),
    статус: attr('Статус', { index: 3 }),
    кладовщик: belongsTo('i-i-s-sklad2-сотрудник', 'Отчество', {
      отчество: attr('Отчество', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
