import commonEN from "./locales/en/common.json";
import authEN from "./locales/en/auth.json";
import homeEN from "./locales/en/home.json";

import commonFR from "./locales/fr/common.json";
import authFR from "./locales/fr/auth.json";
import homeFR from "./locales/fr/home.json";

export const defaultNS = "common";
export const resources = {
  en: {
    common: commonEN,
    auth: authEN,
    home: homeEN,
  },
  fr: {
    common: commonFR,
    auth: authFR,
    home: homeFR,
  },
} as const;
