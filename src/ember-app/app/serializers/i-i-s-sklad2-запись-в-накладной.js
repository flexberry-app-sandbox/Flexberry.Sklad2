import { Serializer as ЗаписьВНакладнойSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sklad2-запись-в-накладной';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаписьВНакладнойSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
