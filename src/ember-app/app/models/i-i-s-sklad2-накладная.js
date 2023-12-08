import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as НакладнаяMixin
} from '../mixins/regenerated/models/i-i-s-sklad2-накладная';

import ДокументModel from './i-i-s-sklad2-документ';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-sklad2-документ';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ДокументModel.extend(НакладнаяMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
