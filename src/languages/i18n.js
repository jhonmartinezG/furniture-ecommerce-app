import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./english.json";
import spanish from "./spanish.json";

i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: english,
    es: spanish,
  },
  react: {
    useSuspence: false,
  },
});

export default i18next;
