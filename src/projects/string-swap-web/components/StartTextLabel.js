import React from "react";
import { useTranslation } from "react-i18next";


function StartTextLabel() {
  const { t } = useTranslation(['stringSwap']);

  return (
    <label className="form-label">{t("startText")}</label>
  );
}

export default StartTextLabel;