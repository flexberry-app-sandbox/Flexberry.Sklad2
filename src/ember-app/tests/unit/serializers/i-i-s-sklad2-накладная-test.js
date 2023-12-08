import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sklad2-накладная', 'Unit | Serializer | i-i-s-sklad2-накладная', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-sklad2-накладная',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-sklad2-состоние-заказа',
    'transform:i-i-s-sklad2-состояние-накладной',

    'model:i-i-s-sklad2-документ',
    'model:i-i-s-sklad2-заказ',
    'model:i-i-s-sklad2-запись-в-накладной',
    'model:i-i-s-sklad2-накладная',
    'model:i-i-s-sklad2-склад',
    'model:i-i-s-sklad2-сотрудник',
    'model:i-i-s-sklad2-строка-заказа',
    'model:i-i-s-sklad2-товар-на-складе',
    'model:i-i-s-sklad2-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
