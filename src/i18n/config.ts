import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./en/translation.json"
import fr from "./fr/translation.json"
import es from "./es/translation.json"

const lng = localStorage.getItem("language") || "en"

i18next.use(initReactI18next).init({
  lng,
  debug: false,
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    es: { translation: es },
  },
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
})
