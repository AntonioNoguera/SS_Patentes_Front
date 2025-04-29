import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import es from "./messages/es";
import en from "./messages/en";


i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'es',
    resources: {
        es,
        en
    }
})


export default i18n;