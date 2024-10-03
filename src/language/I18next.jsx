import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        ...enTranslations
      },
      pt: {
        ...ptTranslations
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

// append app to dom
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);