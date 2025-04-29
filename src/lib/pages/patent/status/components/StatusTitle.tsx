import { useTranslation } from "react-i18next";
import "@i18n";

function StatusTitle() {

    const { t, i18n } = useTranslation("patent_state_section");
    
    return (
        <div>
            <h1 className="text-orange100 text-3xl font-semibold">{t("title")}</h1>
            <h2 className="text-xl">{t("subtitle")}</h2>
        </div>
    );
}

export default StatusTitle;