import I18n from 'react-native-i18n';
import I18nEn from './i18n-en';
import I18nPt from './i18n-pt';
I18n.fallbacks = true;

I18n.translations = {
  'en': I18nEn,
  'pt': I18nPt,
}

export default I18n;