import {
  defineNamespace,
  defineProjections,
  Model as ЗаписьВНакладнойMixin
} from '../mixins/regenerated/models/i-i-s-sklad2-запись-в-накладной';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписьВНакладнойMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
