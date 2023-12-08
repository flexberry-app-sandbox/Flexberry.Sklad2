import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSklad2ДокументLForm from './forms/i-i-s-sklad2-документ-l';
import IISSklad2ЗаказLForm from './forms/i-i-s-sklad2-заказ-l';
import IISSklad2НакладнаяLForm from './forms/i-i-s-sklad2-накладная-l';
import IISSklad2СкладLForm from './forms/i-i-s-sklad2-склад-l';
import IISSklad2СотрудникLForm from './forms/i-i-s-sklad2-сотрудник-l';
import IISSklad2ТоварLForm from './forms/i-i-s-sklad2-товар-l';
import IISSklad2ДокументEForm from './forms/i-i-s-sklad2-документ-e';
import IISSklad2ЗаказEForm from './forms/i-i-s-sklad2-заказ-e';
import IISSklad2НакладнаяEForm from './forms/i-i-s-sklad2-накладная-e';
import IISSklad2СкладEForm from './forms/i-i-s-sklad2-склад-e';
import IISSklad2СотрудникEForm from './forms/i-i-s-sklad2-сотрудник-e';
import IISSklad2ТоварEForm from './forms/i-i-s-sklad2-товар-e';
import IISSklad2ДокументModel from './models/i-i-s-sklad2-документ';
import IISSklad2ЗаказModel from './models/i-i-s-sklad2-заказ';
import IISSklad2ЗаписьВНакладнойModel from './models/i-i-s-sklad2-запись-в-накладной';
import IISSklad2НакладнаяModel from './models/i-i-s-sklad2-накладная';
import IISSklad2СкладModel from './models/i-i-s-sklad2-склад';
import IISSklad2СотрудникModel from './models/i-i-s-sklad2-сотрудник';
import IISSklad2СтрокаЗаказаModel from './models/i-i-s-sklad2-строка-заказа';
import IISSklad2ТоварНаСкладеModel from './models/i-i-s-sklad2-товар-на-складе';
import IISSklad2ТоварModel from './models/i-i-s-sklad2-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sklad2-документ': IISSklad2ДокументModel,
    'i-i-s-sklad2-заказ': IISSklad2ЗаказModel,
    'i-i-s-sklad2-запись-в-накладной': IISSklad2ЗаписьВНакладнойModel,
    'i-i-s-sklad2-накладная': IISSklad2НакладнаяModel,
    'i-i-s-sklad2-склад': IISSklad2СкладModel,
    'i-i-s-sklad2-сотрудник': IISSklad2СотрудникModel,
    'i-i-s-sklad2-строка-заказа': IISSklad2СтрокаЗаказаModel,
    'i-i-s-sklad2-товар-на-складе': IISSklad2ТоварНаСкладеModel,
    'i-i-s-sklad2-товар': IISSklad2ТоварModel
  },

  'application-name': 'Sklad2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Sklad2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sklad2',
          title: 'Sklad2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        sklad2: {
          caption: 'Sklad2',
          title: 'Sklad2',
          'i-i-s-sklad2-склад-l': {
            caption: 'Склад',
            title: ''
          },
          'информация-о-заказах': {
            caption: 'Информация о заказах',
            title: 'Информация о заказах',
            'i-i-s-sklad2-документ-l': {
              caption: 'ДокументL',
              title: 'Документ'
            },
            'i-i-s-sklad2-накладная-l': {
              caption: 'НакладнаяL',
              title: 'Накладная'
            },
            'i-i-s-sklad2-заказ-l': {
              caption: 'ЗаказL',
              title: 'Заказ'
            }
          },
          'товар-на-складе': {
            caption: 'Товар на складе',
            title: 'Товар на складе',
            'i-i-s-sklad2-товар-l': {
              caption: 'ТоварL',
              title: 'Товар'
            },
            'i-i-s-sklad2-заказ-l': {
              caption: 'Заказ',
              title: ''
            },
            'i-i-s-sklad2-склад-l': {
              caption: 'СкладL',
              title: 'Склад'
            }
          },
          'i-i-s-sklad2-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-sklad2-накладная-l': {
            caption: 'Накладная',
            title: ''
          },
          'i-i-s-sklad2-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-sklad2-документ-l': {
            caption: 'Документ',
            title: ''
          },
          'i-i-s-sklad2-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          }
        },
        сотрудник: {
          caption: 'Сотрудник',
          title: 'Сотрудник',
          'i-i-s-sklad2-сотрудник-l': {
            caption: 'Сотрудник',
            title: 'Сотрудник'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-sklad2-документ-l': IISSklad2ДокументLForm,
    'i-i-s-sklad2-заказ-l': IISSklad2ЗаказLForm,
    'i-i-s-sklad2-накладная-l': IISSklad2НакладнаяLForm,
    'i-i-s-sklad2-склад-l': IISSklad2СкладLForm,
    'i-i-s-sklad2-сотрудник-l': IISSklad2СотрудникLForm,
    'i-i-s-sklad2-товар-l': IISSklad2ТоварLForm,
    'i-i-s-sklad2-документ-e': IISSklad2ДокументEForm,
    'i-i-s-sklad2-заказ-e': IISSklad2ЗаказEForm,
    'i-i-s-sklad2-накладная-e': IISSklad2НакладнаяEForm,
    'i-i-s-sklad2-склад-e': IISSklad2СкладEForm,
    'i-i-s-sklad2-сотрудник-e': IISSklad2СотрудникEForm,
    'i-i-s-sklad2-товар-e': IISSklad2ТоварEForm
  },

});

export default translations;
