import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sklad2-документ-l');
  this.route('i-i-s-sklad2-документ-e',
  { path: 'i-i-s-sklad2-документ-e/:id' });
  this.route('i-i-s-sklad2-документ-e.new',
  { path: 'i-i-s-sklad2-документ-e/new' });
  this.route('i-i-s-sklad2-заказ-l');
  this.route('i-i-s-sklad2-заказ-e',
  { path: 'i-i-s-sklad2-заказ-e/:id' });
  this.route('i-i-s-sklad2-заказ-e.new',
  { path: 'i-i-s-sklad2-заказ-e/new' });
  this.route('i-i-s-sklad2-накладная-l');
  this.route('i-i-s-sklad2-накладная-e',
  { path: 'i-i-s-sklad2-накладная-e/:id' });
  this.route('i-i-s-sklad2-накладная-e.new',
  { path: 'i-i-s-sklad2-накладная-e/new' });
  this.route('i-i-s-sklad2-склад-l');
  this.route('i-i-s-sklad2-склад-e',
  { path: 'i-i-s-sklad2-склад-e/:id' });
  this.route('i-i-s-sklad2-склад-e.new',
  { path: 'i-i-s-sklad2-склад-e/new' });
  this.route('i-i-s-sklad2-сотрудник-l');
  this.route('i-i-s-sklad2-сотрудник-e',
  { path: 'i-i-s-sklad2-сотрудник-e/:id' });
  this.route('i-i-s-sklad2-сотрудник-e.new',
  { path: 'i-i-s-sklad2-сотрудник-e/new' });
  this.route('i-i-s-sklad2-товар-l');
  this.route('i-i-s-sklad2-товар-e',
  { path: 'i-i-s-sklad2-товар-e/:id' });
  this.route('i-i-s-sklad2-товар-e.new',
  { path: 'i-i-s-sklad2-товар-e/new' });
});

export default Router;
