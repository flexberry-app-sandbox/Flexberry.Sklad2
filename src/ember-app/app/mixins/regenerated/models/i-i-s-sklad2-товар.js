import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицаИзмерения: DS.attr('string'),
  кодТовара: DS.attr('number'),
  название: DS.attr('string'),
  описания: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  единицаИзмерения: {
    descriptionKey: 'models.i-i-s-sklad2-товар.validations.единицаИзмерения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодТовара: {
    descriptionKey: 'models.i-i-s-sklad2-товар.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-sklad2-товар.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описания: {
    descriptionKey: 'models.i-i-s-sklad2-товар.validations.описания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-sklad2-товар.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-sklad2-товар', {
    кодТовара: attr('Код товара', { index: 0 }),
    название: attr('Название', { index: 1 }),
    единицаИзмерения: attr('Единица измерения', { index: 2 }),
    описания: attr('Описания', { index: 3 }),
    цена: attr('Цена', { index: 4 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-sklad2-товар', {
    кодТовара: attr('Код товара', { index: 0 }),
    название: attr('Название', { index: 1 }),
    единицаИзмерения: attr('Единица измерения', { index: 2 }),
    описания: attr('Описания', { index: 3 }),
    цена: attr('Цена', { index: 4 })
  });
};
