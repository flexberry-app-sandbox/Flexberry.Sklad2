import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостониеЗаказаEnum from '../enums/i-i-s-sklad2-состоние-заказа';

export default FlexberryEnum.extend({
  enum: СостониеЗаказаEnum,
  sourceType: 'IIS.Sklad2.СостониеЗаказа'
});
