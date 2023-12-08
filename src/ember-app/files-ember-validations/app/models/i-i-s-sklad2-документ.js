import {
  defineNamespace,
  defineProjections,
  Model as ДокументMixin
} from '../mixins/regenerated/models/i-i-s-sklad2-документ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокументMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
