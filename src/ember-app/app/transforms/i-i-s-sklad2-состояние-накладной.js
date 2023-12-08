import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеНакладнойEnum from '../enums/i-i-s-sklad2-состояние-накладной';

export default FlexberryEnum.extend({
  enum: СостояниеНакладнойEnum,
  sourceType: 'IIS.Sklad2.СостояниеНакладной'
});
