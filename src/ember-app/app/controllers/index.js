import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.sklad2.caption'),
          title: i18n.t('forms.application.sitemap.sklad2.title'),
          children: [{
            link: 'i-i-s-sklad2-склад-l',
            caption: i18n.t('forms.application.sitemap.sklad2.i-i-s-sklad2-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.sklad2.i-i-s-sklad2-склад-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.sklad2.информация-о-заказах.caption'),
            title: i18n.t('forms.application.sitemap.sklad2.информация-о-заказах.title'),
            children: [{
              link: 'i-i-s-sklad2-документ-l',
              caption: i18n.t('forms.application.sitemap.sklad2.информация-о-заказах.i-i-s-sklad2-документ-l.caption'),
              title: i18n.t('forms.application.sitemap.sklad2.информация-о-заказах.i-i-s-sklad2-документ-l.title'),
              icon: 'file',
              children: null
            }, {
              link: 'i-i-s-sklad2-накладная-l',
              caption: i18n.t('forms.application.sitemap.sklad2.информация-о-заказах.i-i-s-sklad2-накладная-l.caption'),
              title: i18n.t('forms.application.sitemap.sklad2.информация-о-заказах.i-i-s-sklad2-накладная-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-sklad2-заказ-l',
              caption: i18n.t('forms.application.sitemap.sklad2.информация-о-заказах.i-i-s-sklad2-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.sklad2.информация-о-заказах.i-i-s-sklad2-заказ-l.title'),
              icon: 'phone',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.sklad2.товар-на-складе.caption'),
            title: i18n.t('forms.application.sitemap.sklad2.товар-на-складе.title'),
            children: [{
              link: 'i-i-s-sklad2-товар-l',
              caption: i18n.t('forms.application.sitemap.sklad2.товар-на-складе.i-i-s-sklad2-товар-l.caption'),
              title: i18n.t('forms.application.sitemap.sklad2.товар-на-складе.i-i-s-sklad2-товар-l.title'),
              children: null
            }]
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудник.caption'),
          title: i18n.t('forms.application.sitemap.сотрудник.title'),
          children: [{
            link: 'i-i-s-sklad2-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.сотрудник.i-i-s-sklad2-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудник.i-i-s-sklad2-сотрудник-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})