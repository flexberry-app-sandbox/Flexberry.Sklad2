import { Serializer as НакладнаяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sklad2-накладная';
import ДокументSerializer from './i-i-s-sklad2-документ';

export default ДокументSerializer.extend(НакладнаяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
