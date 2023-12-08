import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вес: DS.attr('decimal'),
  датаОтгрузки: DS.attr('date'),
  примечание: DS.attr('string'),
  статус: DS.attr('i-i-s-sklad2-состояние-накладной'),
  сумма: DS.attr('decimal'),
  фИОПолучателя: DS.attr('string'),
  материальноОтветственноеЛицо: DS.belongsTo('i-i-s-sklad2-сотрудник', { inverse: null, async: false }),
  записьВНакладной: DS.hasMany('i-i-s-sklad2-запись-в-накладной', { inverse: 'накладная', async: false })
});

export let ValidationRules = {
  вес: {
    descriptionKey: 'models.i-i-s-sklad2-накладная.validations.вес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  датаОтгрузки: {
    descriptionKey: 'models.i-i-s-sklad2-накладная.validations.датаОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  примечание: {
    descriptionKey: 'models.i-i-s-sklad2-накладная.validations.примечание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-sklad2-накладная.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-sklad2-накладная.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  фИОПолучателя: {
    descriptionKey: 'models.i-i-s-sklad2-накладная.validations.фИОПолучателя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  материальноОтветственноеЛицо: {
    descriptionKey: 'models.i-i-s-sklad2-накладная.validations.материальноОтветственноеЛицо.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьВНакладной: {
    descriptionKey: 'models.i-i-s-sklad2-накладная.validations.записьВНакладной.__caption__',
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
  modelClass.defineProjection('НакладнаяE', 'i-i-s-sklad2-накладная', {
    примечание: attr('Примечание', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    датаОтгрузки: attr('Дата отгрузки', { index: 2 }),
    вес: attr('Вес', { index: 3 }),
    статус: attr('Статус', { index: 4 }),
    фИОПолучателя: attr('Ф и о получателя', { index: 5 }),
    датаЗаполнения: attr('Дата заполнения', { index: 6 }),
    номер: attr('Номер', { index: 7 }),
    материальноОтветственноеЛицо: belongsTo('i-i-s-sklad2-сотрудник', 'Материально ответственное лицо', {
      отчество: attr('Отчество', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'отчество' }),
    записьВНакладной: hasMany('i-i-s-sklad2-запись-в-накладной', 'Запись в накладной', {
      сумма: attr('Сумма', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      цена: attr('Цена', { index: 2 }),
      вес: attr('Вес', { index: 3 }),
      товар: belongsTo('i-i-s-sklad2-товар', 'Товар', {
        название: attr('Название', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('НакладнаяL', 'i-i-s-sklad2-накладная', {
    примечание: attr('Примечание', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    датаОтгрузки: attr('Дата отгрузки', { index: 2 }),
    вес: attr('Вес', { index: 3 }),
    статус: attr('Статус', { index: 4 }),
    фИОПолучателя: attr('Ф и о получателя', { index: 5 }),
    датаЗаполнения: attr('Дата заполнения', { index: 6 }),
    номер: attr('Номер', { index: 7 }),
    материальноОтветственноеЛицо: belongsTo('i-i-s-sklad2-сотрудник', 'Отчество', {
      отчество: attr('Отчество', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
