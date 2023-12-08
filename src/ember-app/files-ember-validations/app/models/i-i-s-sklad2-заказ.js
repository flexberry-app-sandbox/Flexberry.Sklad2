import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказMixin
} from '../mixins/regenerated/models/i-i-s-sklad2-заказ';

import ДокументModel from './i-i-s-sklad2-документ';

let Model = ДокументModel.extend(ЗаказMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
