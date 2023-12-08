import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Sklad2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sklad2',
          title: 'Sklad2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
            'i-i-s-sklad2-заказ-l': {
              caption: 'Заказ',
              title: ''
            },
            'i-i-s-sklad2-товар-l': {
              caption: 'ТоварL',
              title: 'Товар'
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
