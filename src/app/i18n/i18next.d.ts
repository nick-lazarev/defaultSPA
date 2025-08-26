// import the original type declarations
import "i18next";
import type { defaultNS, resources } from "./resources";
// import all namespaces (for the default language, only)

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: typeof defaultNS;
    // custom resources type
    resources: typeof resources.en;
    // other
  }
}
