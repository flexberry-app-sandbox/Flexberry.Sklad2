import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номер: DS.attr('number'),
  сотрудник: DS.belongsTo('i-i-s-sklad2-сотрудник', { inverse: null, async: false }),
  товарНаСкладе: DS.hasMany('i-i-s-sklad2-товар-на-складе', { inverse: 'склад', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-sklad2-склад.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-sklad2-склад.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-sklad2-склад.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товарНаСкладе: {
    descriptionKey: 'models.i-i-s-sklad2-склад.validations.товарНаСкладе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладE', 'i-i-s-sklad2-склад', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    сотрудник: belongsTo('i-i-s-sklad2-сотрудник', 'Сотрудник', {
      отчество: attr('Отчество', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'отчество' }),
    товарНаСкладе: hasMany('i-i-s-sklad2-товар-на-складе', 'Товар на складе', {
      количество: attr('Количество', { index: 0 }),
      товар: belongsTo('i-i-s-sklad2-товар', 'Товар', {
        название: attr('Название', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('СкладL', 'i-i-s-sklad2-склад', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    сотрудник: belongsTo('i-i-s-sklad2-сотрудник', 'Отчество', {
      отчество: attr('Отчество', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
