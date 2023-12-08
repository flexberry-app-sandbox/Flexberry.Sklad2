import { Serializer as ЗаказSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sklad2-заказ';
import ДокументSerializer from './i-i-s-sklad2-документ';

export default ДокументSerializer.extend(ЗаказSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
