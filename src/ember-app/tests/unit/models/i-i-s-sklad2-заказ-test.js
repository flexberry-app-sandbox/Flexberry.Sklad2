import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sklad2-заказ', 'Unit | Model | i-i-s-sklad2-заказ', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
