export const DOC_ROUTES = {
  SOCIAL: {
    GITHUB: "https://github.com/SATYAM-PRATIBHAN/ZentoUI",
    LINKEDIN: "https://www.linkedin.com/in/satyampratibhan/",
    X: "https://x.com/s_pratibhan",
  },
  HOME: "/",
  DOCS: {
    ROOT: "/docs",
    GETTING_STARTED: "/docs/getting-started",
    COMPONENTS: {
      ROOT: "/docs/components",
      BUTTON: "/docs/components/button",
      INPUT: "/docs/components/input",
      CARD: "/docs/components/card",
      MODAL: "/docs/components/modal",
      SWITCH: "/docs/components/switch",
      BADGE: "/docs/components/badge",
      TOAST: "/docs/components/toast",
      ACCORDION: "/docs/components/accordion",
    },
  },
  THEMES: "/themes",
  PRICING: "/pricing",
  NOT_FOUND: "/404",
  PRIVACY_POLICY: "/privacy",
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
