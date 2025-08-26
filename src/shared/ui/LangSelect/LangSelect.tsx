/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { SelectChangeEvent } from "@mui/material";
import { LangSelectStyled } from "./LangSelectStyled";

export const LangSelect = () => {
  const { i18n } = useTranslation();

  const options = useMemo(
    () => [
      {
        label: "English",
        value: "en",
      },
      {
        label: "Français",
        value: "fr",
      },
    ],
    [],
  );

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      i18n.changeLanguage(event.target.value as string);
    },
    [i18n],
  );

  return (
    <LangSelectStyled
      size="small"
      value={i18n.language}
      options={options}
      //@ts-ignore
      onChange={handleChange}
    />
  );
};
