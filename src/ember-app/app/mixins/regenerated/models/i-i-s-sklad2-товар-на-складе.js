import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('string'),
  товар: DS.belongsTo('i-i-s-sklad2-товар', { inverse: null, async: false }),
  склад: DS.belongsTo('i-i-s-sklad2-склад', { inverse: 'товарНаСкладе', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-sklad2-товар-на-складе.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-sklad2-товар-на-складе.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-sklad2-товар-на-складе.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварНаСкладеE', 'i-i-s-sklad2-товар-на-складе', {
    количество: attr('Количество', { index: 0 }),
    товар: belongsTo('i-i-s-sklad2-товар', 'Товар', {
      название: attr('Название', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'название' })
  });
};
