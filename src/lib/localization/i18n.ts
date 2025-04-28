import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import es from "./messages/es";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'es',
    resources: {
        es
    }
})


export default i18n;