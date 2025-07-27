export const DOC_ROUTES = {
  SOCIAL: {
    GITHUB: "https://github.com/SATYAM-PRATIBHAN/ZentoUI",
    LINKEDIN: "https://www.linkedin.com/in/satyampratibhan/",
    X: "https://x.com/s_pratibhan",
  },
  HOME: "/",
  DOCS: {
    ROOT: "/docs",
    INTRODUCTION: "/docs/introduction",
    INSTALLATION: "/docs/installation",
    USAGE: "/docs/usage",
    COMPONENTS: {
      BUTTON: "/docs/components/button",
      INPUT: "/docs/components/input",
      CARD: "/docs/components/card",
      MODAL: "/docs/components/modal",
      SWITCH: "/docs/components/switch",
      BADGE: "/docs/components/badge",
      TOAST: "/docs/components/toast",
      ACCORDION: "/docs/components/accordion",
    },
    SECTION: {
      PRICING: "/docs/sections/pricing",
      HERO: "/docs/sections/home",
      FEATURES: "/docs/sections/features",
    },
  },
  THEMES: "/themes",
  PRIVACY_POLICY: "/privacy",
  CUSTOM_COMPONENTS: "/custom-components",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
} as const;

type PathValue = string | ((...args: string[]) => string);
type FlatRoutes = string[];

const flattenRoutes = (
  obj: Record<string, PathValue | Record<string, unknown>>,
): FlatRoutes => {
  if (!obj) return [];
  return Object.values(obj).reduce<FlatRoutes>((acc, value) => {
    if (typeof value === "string") {
      acc.push(value);
    } else if (typeof value === "function") {
      // Dynamic routes are skipped for flattening
    } else if (typeof value === "object" && value !== null) {
      acc.push(
        ...flattenRoutes(
          value as Record<string, PathValue | Record<string, unknown>>,
        ),
      );
    }
    return acc;
  }, []);
};

export const ALL_DOC_ROUTES: FlatRoutes = flattenRoutes(DOC_ROUTES.DOCS);

export const isDocRoute = (
  path: string,
): path is (typeof ALL_DOC_ROUTES)[number] => ALL_DOC_ROUTES.includes(path);
